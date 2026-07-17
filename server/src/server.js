import "dotenv/config";
import express from "express";
import menuRouter from "./routes/menuRoute.js";
import cors from "cors";
import Auth from "./middleware/Auth.js";
import memberRouter from "./routes/memberRoute.js";

const app = express();
const port = process.env.PORT;

app.use(cors())
app.use(express.json());

app.use("/uploads", express.static("src/uploads"));
app.use("/menu", Auth, menuRouter);
app.use("/member", Auth, memberRouter);


app.listen(port, () => {console.log(`${port}`);});