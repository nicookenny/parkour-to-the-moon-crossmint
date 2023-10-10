import { Coordinates } from '../../domain/entities/Coordinates';
import { UniverseObject } from '../../domain/entities/Object';

export class Space extends UniverseObject {
  constructor(coordinates: Coordinates) {
    super(coordinates);
  }
}
