import express from "express";
import { addMenu, deleteMenu, getMenu, updateMenu } from "../controller/menuController.js";
import upload from "../middleware/multer.js";

const menuRouter = express.Router()

menuRouter.get("/", getMenu)
menuRouter.get("/:idMenu", getMenu)

menuRouter.post("/", upload.single("image"), addMenu)
menuRouter.put("/:idMenu", upload.single("image"), updateMenu);

menuRouter.delete("/:idMenu", deleteMenu);


export default menuRouter;
