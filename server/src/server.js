import "dotenv/config";
import express from "express";
import menuRouter from "./routes/menuRoute.js";

const app = express();

app.use(express.json());

app.use("/menu", menuRouter);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`${port}`);
});