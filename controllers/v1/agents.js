export const createAgent = (req, res) => {
  res.status(200).json({ msg: "Create System route" });
};

export const getAgent = (req, res) => {
  res.status(200).json({ msg: "Get Agent route" });
};
