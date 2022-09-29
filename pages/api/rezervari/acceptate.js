import { Event } from "../../../models/Event";
import db from "./../../../utils/db";

const handler = async (req, res) => {
  db.connect();
  const rezervariAcceptate = await Event.find({
    acceptata: true,
  }).exec();

  await db.disconnect();
  res.send(rezervariAcceptate);
};
export default handler;
