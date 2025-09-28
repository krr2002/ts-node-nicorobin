import express from "express";
import bodyParser from "body-parser";
import locationRoutes from "./routes/LocationRoutes";

const app = express();

app.use(bodyParser.json());
app.use("/locations", locationRoutes);

export default app;
