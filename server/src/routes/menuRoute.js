import express from "express";
import { addMenu, deleteMenu, getMenu, updateMenu } from "../controller/menuController.js";
// import upload from "../middleware/multer.js";

const menuRouter = express.Router()

menuRouter.get("/", getMenu)
menuRouter.post("/", addMenu)
menuRouter.patch("/:idMenu", updateMenu)
menuRouter.delete("/:idMenu", deleteMenu);


export default menuRouter;
