import { Event } from "../../../models/Event";
import db from "./../../../utils/db";
import { getSession } from "next-auth/react";

const handler = async (req, res) => {
  const session = await getSession({ req });
  if (session?.user?.isAdmin !== true) {
    return res.status(401).send({ message: "signin required" });
  }
  db.connect();
  const rezervariAcceptate = await Event.find({
    acceptata: true,
  }).exec();

  await db.disconnect();
  res.send(rezervariAcceptate);
};
export default handler;
