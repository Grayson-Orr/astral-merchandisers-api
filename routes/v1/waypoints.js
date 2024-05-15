import * as waypointsController from "../../controllers/v1/waypoints.js";
import { generateRoutes } from "../../utils/routes.js";

const waypointsResource = {
  create: waypointsController.createWaypoint,
  getAll: waypointsController.getWaypoints,
  getOne: waypointsController.getWaypoint,
  update: waypointsController.updateWaypoint,
  delete: waypointsController.deleteWaypoint,
};

export const waypointsRouter = generateRoutes(waypointsResource);
