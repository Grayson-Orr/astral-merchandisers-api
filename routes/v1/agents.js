import * as agentsController from "../../controllers/v1/agents.js";
import { generateRoutes } from "../../utils/routes.js";

const agentsResource = {
  create: agentsController.createAgent,
  getOne: agentsController.getAgent,
};

export const agentsRouter = generateRoutes(agentsResource);
