import { Router } from "express";
import { LocationRepository } from "../repositories/location.repository";
import { LocationService } from "../services/location.service";
import { LocationController } from "../controllers/location.controller";

const router = Router();
const repository = new LocationRepository();
const service = new LocationService(repository);
const controller = new LocationController(service);

router.post("/", controller.create);
router.get("/", controller.getAll);
router.get("/:id", controller.getById);

export default router;
