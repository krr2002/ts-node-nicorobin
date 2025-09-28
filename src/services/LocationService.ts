import { Location } from "../models/Location";
import { LocationRepository } from "../repositories/LocationRepository";

export class LocationService {
  private repository: LocationRepository;

  constructor(repository: LocationRepository) {
    this.repository = repository;
  }

  createLocation(data: Omit<Location, "id">): Location {
    return this.repository.save(data);
  }

  getAllLocations(): Location[] {
    return this.repository.findAll();
  }

  getLocationById(id: number): Location | undefined {
    return this.repository.findById(id);
  }
}
