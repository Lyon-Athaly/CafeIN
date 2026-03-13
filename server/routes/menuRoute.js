import express from "express";
import { addMenu, deleteMenu, getMenu } from "../controller/menuController";

const menuRouter = express.Router()

router.get("/", getMenu)
router.post("/", addMenu);
router.delete("/", deleteMenu);

export default menuRouter;
