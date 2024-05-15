import * as orbitalsController from "../../controllers/v1/orbitals.js";
import { generateRoutes } from "../../utils/routes.js";

const orbitalsResource = {
  create: orbitalsController.createOrbital,
  getAll: orbitalsController.getOrbitals,
  getOne: orbitalsController.getOrbital,
  update: orbitalsController.updateOrbital,
  delete: orbitalsController.deleteOrbital,
};

export const orbitalsRouter = generateRoutes(orbitalsResource);
