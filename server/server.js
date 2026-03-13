import express from "express";
import userRouter from "./routes/userRoute.js";

const app = express()

app.use(express.json())

app.use("/users", userRouter)

app.listen(4000, ()=>{console.log("Nyala")})