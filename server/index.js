import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import healthRoute from "./routes/health.js";
import intakeRoute from "./routes/intake.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.use("/api/health", healthRoute);
app.use("/api/intake", intakeRoute);

app.listen(PORT, () => {
  console.log(`devoct server running on port ${PORT}`);
});

export default app;
