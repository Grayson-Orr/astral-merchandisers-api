import express from "express";
import cors from "cors";

import { agentsRouter } from "./routes/v1/agents.js";
import { systemsRouter } from "./routes/v1/systems.js";
import { waypointsRouter } from "./routes/v1/waypoints.js";

const app = express();

app.use(cors());

app.use("/api/v1/agents", agentsRouter);
app.use("/api/v1/systems", systemsRouter);
app.use("/api/v1/waypoints", waypointsRouter);

app.listen(3000, () => {
  console.log("Server is listening on port 3000.");
});

export default app;
