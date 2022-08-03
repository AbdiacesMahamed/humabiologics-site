import nc from "next-connect";

const handler = nc();

handler.get(async (req, res) => {
  const applications = [
    "Human Collagen",
    "Human Gelatin",
    "Human Tissue ECM",
    "Test",
  ];
  res.send(applications);
});

export default handler;
