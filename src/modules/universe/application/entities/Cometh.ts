import { Coordinates } from '../../domain/entities/Coordinates';
import { UniverseObject } from '../../domain/entities/Object';

export type ComethDirection = 'LEFT' | 'RIGHT' | 'UP' | 'DOWN';

export class Cometh extends UniverseObject {
  direction: ComethDirection;
  constructor(coordinates: Coordinates, direction: ComethDirection) {
    super(coordinates);
    this.direction = direction;
  }

  get name(): string {
    return `${this.direction}_COMETH`;
  }
}
