import nc from "next-connect";

import client from '../../../utils/client'

const handler = nc();

handler.get(async (req, res) => {
  const Certification = await client.fetch(`*[_type == "Certification" && _id == $id][0]`, {
    id: req.query.id,
  });
  res.send(Certification);
});
export default handler;