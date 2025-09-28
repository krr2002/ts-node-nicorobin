import type { Request, Response } from "express";
import { LocationService } from "../services/LocationService";

export class LocationController {
  private service: LocationService;

  constructor(service: LocationService) {
    this.service = service;
  }

  create = (req: Request, res: Response) => {
    const { country, state, city, latitude, longitude } = req.body;
    const newLocation = this.service.createLocation({ country, state, city, latitude, longitude });
    res.status(201).json(newLocation);
  };

  getAll = (req: Request, res: Response) => {
    const locations = this.service.getAllLocations();
    res.json(locations);
  };

  getById = (req: Request, res: Response) => {
    const id = parseInt(req.params.id!, 10);
    const location = this.service.getLocationById(id);
    if (!location) return res.status(404).json({ message: "Location not found" });
    res.json(location);
  };
}
