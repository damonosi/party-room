import { Event } from "../../../models/Event";
import db from "./../../../utils/db";
import { getSession } from "next-auth/react";

const handler = async (req, res) => {
  const session = await getSession({ req });
  if (session?.user?.isAdmin === true) {
    return res.status(401).send({ message: "signin required" });
  }
  db.connect();
  const cereri = await Event.find({
    acceptata: false,
  }).exec();

  await db.disconnect();
  res.send(cereri);
};
export default handler;
