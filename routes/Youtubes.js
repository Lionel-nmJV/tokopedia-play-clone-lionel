import express from "express";
import {addVideo, addView, getVideo, random, Search, trend} from "../controllers/youtube.js";
import {verifyToken} from "../verifyToken.js";

const router = express.Router();

//create video
router.post("/",verifyToken, addVideo)
router.put("/:id",verifyToken, addVideo)
router.delete("/:id",verifyToken, addVideo)
router.get("/find/:id", getVideo)
router.put("/view/:id", addView)
router.get("/trend", trend)
router.get("/random", random)
router.get("/search", Search)

export default router;