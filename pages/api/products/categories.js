import nc from "next-connect";

const handler = nc();

handler.get(async (req, res) => {
  const categories = [
    "Human Collagen",
    "Human Gelatin",
    "Human Tissue ECM",
    "Human Organ ECM",
  ];
  res.send(categories);
});

export default handler;
