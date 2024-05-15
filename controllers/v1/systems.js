export const createSystem = (req, res) => {
  res.status(200).json({ msg: "Create System route" });
};

export const getSystems = (req, res) => {
  res.status(200).json({ msg: "Get Systems route" });
};

export const getSystem = (req, res) => {
  const { id } = req.params;
  res.status(200).json({ msg: `Get System route for ID ${id}` });
};

export const updateSystem = (req, res) => {
  const { id } = req.params;
  res.status(200).json({ msg: `Update System route for ID ${id}` });
};

export const deleteSystem = (req, res) => {
  const { id } = req.params;
  res.status(200).json({ msg: `Delete System route for ID ${id}` });
};
