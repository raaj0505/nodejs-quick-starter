
import express from "express";
import homeRoute from "./homeRoute";
import healthCheckRoute from "./healthCheckRoute";

const router  = express.Router();

router.use("/", homeRoute);
router.use("/healthcheck", healthCheckRoute);
export default router;