import { Coordinates } from './Coordinates';

export abstract class UniverseObject {
  coordinates: Coordinates;

  constructor(coordinates: Coordinates) {
    this.coordinates = coordinates;
  }

  get position(): {
    row: number;
    column: number;
  } {
    return this.coordinates.position;
  }

  get name(): string {
    return this.constructor.name.toUpperCase();
  }
}
