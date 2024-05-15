import * as systemsController from "../../controllers/v1/systems.js";
import { generateRoutes } from "../../utils/routes.js";

const systemsResource = {
  create: systemsController.createSystem,
  getAll: systemsController.getSystems,
  getOne: systemsController.getSystem,
  update: systemsController.updateSystem,
  delete: systemsController.deleteSystem,
};

export const systemsRouter = generateRoutes(systemsResource);
