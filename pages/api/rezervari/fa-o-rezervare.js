import { Event } from "../../../models/Event";
import db from "./../../../utils/db";

const handler = async (req, res) => {
  const { nrValue: nrTelefon, dataValue: data } = req.body;
  console.log(nrTelefon);
  db.connect();
  const rezervareNoua = new Event({
    nrTelefon,
    data,
  });
  const rezervareFacuta = await rezervareNoua.save();

  await db.disconnect();
  res.send(rezervareFacuta);
};
export default handler;
