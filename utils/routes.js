import express from "express";

export const generateRoutes = (resource = {}) => {
  const router = express.Router();

  const notImplementedHandler = (req, res) => {
    res.status(501).json({ message: "Not Implemented" });
  };

  router.post("/", resource.create || notImplementedHandler);
  router.get("/", resource.getAll || notImplementedHandler);
  router.get("/:id", resource.getOne || notImplementedHandler);
  router.put("/:id", resource.update || notImplementedHandler);
  router.delete("/:id", resource.delete || notImplementedHandler);

  return router;
};
