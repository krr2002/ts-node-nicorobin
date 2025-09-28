import { Location } from "../models/location.model";

export class LocationRepository {
  private locations: Location[] = [];
  private currentId = 1;

  save(location: Omit<Location, "id">): Location {
    const newLocation: Location = { id: this.currentId++, ...location };
    this.locations.push(newLocation);
    return newLocation;
  }

  findAll(): Location[] {
    return this.locations;
  }

  findById(id: number): Location | undefined {
    return this.locations.find(loc => loc.id === id);
  }
}
