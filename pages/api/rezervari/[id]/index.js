import db from "../../../../utils/db";
import { getSession } from "next-auth/react";
import { Event } from "../../../../models/Event";

const handler = async (req, res) => {
  const session = await getSession({ req });
  if (!session) {
    return res.status(401).send("signin required");
  }
  await db.connect();
  const eveniment = await Event.findById(req.query.id);
  await db.disconnect();
  res.send(eveniment);
};

export default handler;
