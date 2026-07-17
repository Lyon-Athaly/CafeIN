import express from "express";
import { addMember, deleteMember, getMember, updateMember } from "../controller/memberController.js";
import upload from "../middleware/multer.js";

const memberRouter = express.Router()

memberRouter.get("/", getMember)
memberRouter.get("/:idMember", getMember)

memberRouter.post("/", upload.single("image"), addMember)
memberRouter.put("/:idMember", upload.single("image"), updateMember);

memberRouter.delete("/:idMember", deleteMember);


export default memberRouter;
