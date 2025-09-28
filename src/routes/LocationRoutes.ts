import { Router } from "express";
import { LocationRepository } from "../repositories/LocationRepository";
import { LocationService } from "../services/LocationService";
import { LocationController } from "../controllers/LocationController";

const router = Router();
const repository = new LocationRepository();
const service = new LocationService(repository);
const controller = new LocationController(service);

router.post("/", controller.create);
router.get("/", controller.getAll);
router.get("/:id", controller.getById);

export default router;
