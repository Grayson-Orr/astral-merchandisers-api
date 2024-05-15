export const createWaypoint = (req, res) => {
  res.status(200).json({ msg: "Create Waypoint route" });
};

export const getWaypoints = (req, res) => {
  res.status(200).json({ msg: "Get Waypoints route" });
};

export const getWaypoint = (req, res) => {
  const { id } = req.params;
  res.status(200).json({ msg: `Get Waypoint route for ID ${id}` });
};

export const updateWaypoint = (req, res) => {
  const { id } = req.params;
  res.status(200).json({ msg: `Update Waypoint route for ID ${id}` });
};

export const deleteWaypoint = (req, res) => {
  const { id } = req.params;
  res.status(200).json({ msg: `Delete Waypoint route for ID ${id}` });
};
