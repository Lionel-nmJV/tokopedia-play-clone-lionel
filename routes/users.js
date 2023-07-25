import express from "express";
import {update, deleteUser, getUser, like} from "../controllers/user.js";
import {verifyToken} from "../verifyToken.js";

const router = express.Router();

//update user
router.put("/:id",verifyToken, update)
//delete user
router.delete("/:id",verifyToken, deleteUser)
//get user
router.get("/find/:id", getUser)
//likes
router.put("/like/:videoId",verifyToken, like)
export default router;