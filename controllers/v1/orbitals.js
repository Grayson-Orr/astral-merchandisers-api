export const createOrbital = (req, res) => {
  res.status(200).json({ msg: "Create Orbital route" });
};

export const getOrbitals = (req, res) => {
  res.status(200).json({ msg: "Get Orbitals route" });
};

export const getOrbital = (req, res) => {
  const { id } = req.params;
  res.status(200).json({ msg: `Get Orbital route for ID ${id}` });
};

export const updateOrbital = (req, res) => {
  const { id } = req.params;
  res.status(200).json({ msg: `Update Orbital route for ID ${id}` });
};

export const deleteOrbital = (req, res) => {
  const { id } = req.params;
  res.status(200).json({ msg: `Delete Orbital route for ID ${id}` });
};
