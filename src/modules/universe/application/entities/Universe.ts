import { UniverseObject } from '../../domain/entities/Object';
import { map } from '../../../../public/map.json';
import { writeFileSync } from 'fs';

export class Universe {
  private map: any[][] = new Array(30).fill(new Array(30).fill('SPACE'));

  public addObject(object: UniverseObject) {
    const { row, column } = object.position;

    const copy = [...this.map[row]];

    copy[column] = object;

    this.map[row] = copy;
    map[row] = copy.map((col) => col?.name);

    writeFileSync(
      './map.json',
      JSON.stringify({
        map,
      })
    );
  }

  get value() {
    return this.map;
  }
}
