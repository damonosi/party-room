import { Event } from "../../../models/Event";
import db from "./../../../utils/db";

const handler = async (req, res) => {
  const {
    nrValue: nrTelefon,
    dataInceput,
    dataFinal,
    bautura,
    mancare,
  } = req.body;
  let pretLocatie = 1000;
  db.connect();
  const rezervareNoua = new Event({
    nrTelefon,
    "data.dePe": dataInceput,
    "data.panaPe": dataFinal,
    "extra.bautura.acceptata": bautura,
    "extra.mancare.acceptata": mancare,

    pretTotal:
      pretLocatie + (bautura === true ? 200 : 0) + (mancare === true ? 400 : 0),
  });
  const rezervareFacuta = await rezervareNoua.save();

  await db.disconnect();
  res.send(rezervareFacuta);
};
export default handler;
