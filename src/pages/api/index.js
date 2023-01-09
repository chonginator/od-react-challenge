import data from "../../../public/data.json";

const handler = (req, res) => {
  try {
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

export default handler;
