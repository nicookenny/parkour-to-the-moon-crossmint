import { Coordinates } from '../../domain/entities/Coordinates';
import { UniverseObject } from '../../domain/entities/Object';

export type SoloonColor = 'BLUE' | 'RED' | 'PURPLE' | 'WHITE';

export class Soloon extends UniverseObject {
  color: SoloonColor;

  constructor(coordinates: Coordinates, color: SoloonColor) {
    super(coordinates);
    this.color = color;
  }

  get name(): string {
    return `${this.color}_SOLOON`;
  }
}
