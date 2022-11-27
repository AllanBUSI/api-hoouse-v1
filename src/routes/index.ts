import express from "express";
const router = express.Router();
import stripeRouter from './stripe'

router.use("/stripe", stripeRouter)

export default router;
