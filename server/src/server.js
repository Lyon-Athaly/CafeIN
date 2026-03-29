import "dotenv/config";
import express from "express";
import menuRouter from "./routes/menuRoute.js";
import cors from "cors";

const app = express();
const port = process.env.PORT;

app.use(cors())
app.use(express.json());

app.use("/uploads", express.static("src/uploads"));
app.use("/menu", menuRouter);


app.listen(port, () => {console.log(`${port}`);});