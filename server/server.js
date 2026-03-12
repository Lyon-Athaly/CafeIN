import express from "express";

const app = express()

app.use(express.json())

app.use("/", (req, res, next)=>{
    res.send("Hello");
})

app.listen(4000, ()=>{console.log("Nyala")})