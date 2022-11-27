
import { subcriptionController } from "@controllers/post/subcription";
import express from "express";
const router = express.Router();

router.post("/subcription", subcriptionController);


export default router;