import { Universe } from './modules/universe/application/entities/Universe';
import {
  Cometh,
  ComethDirection,
  Polyanet,
  Soloon,
  SoloonColor,
  Space,
} from './modules/universe/application/entities';
import { Coordinates } from './modules/universe/domain/entities/Coordinates';
import { UniverseObject } from './modules/universe/domain/entities/Object';
import { SoloonRepository } from './modules/universe/infraestructure/repository/soloon.repository';
import { api } from './modules/universe/infraestructure/http/api';
import { ComethRepository } from './modules/universe/infraestructure/repository/cometh.repository';
import { PolyanetRepository } from './modules/universe/infraestructure/repository/polyanet.repository';
import { map } from './public/map.json';
import { UniverseRepository } from './modules/universe/infraestructure/repository/universe.repository';
export const main = async () => {
  const universe = new Universe();

  const soloonRepository = new SoloonRepository(api);
  const comethRepository = new ComethRepository(api);
  const polyanetRepository = new PolyanetRepository(api);
  const universeRepository = new UniverseRepository(api);

  const goal = await universeRepository.getGoal();

  for (let row = 0; row < universe.value.length; row++) {
    for (let col = 0; col < goal[row].length; col++) {
      const object = goal[row][col];

      const alreadyOnMap = map[row][col] === object && object !== 'SPACE';

      const coordinates = new Coordinates(row, col);

      if (!alreadyOnMap) {
        if (object.includes('SPACE')) {
          const space = new Space(coordinates);
          universe.addObject(space);
        }

        if (object.includes('COMETH')) {
          const direction = object.split('_')[0] as ComethDirection;
          const cometh = new Cometh(coordinates, direction);
          const data = await comethRepository.add(cometh);
          if (data) {
            universe.addObject(cometh);
          }
        }

        if (object.includes('SOLOON')) {
          const color = object.split('_')[0] as SoloonColor;
          const soloon = new Soloon(coordinates, color);
          const data = await soloonRepository.add(soloon);
          if (data) {
            universe.addObject(soloon);
          }
        }

        if (object.includes('POLYANET')) {
          const polyanet = new Polyanet(coordinates);
          const data = await polyanetRepository.add(polyanet);
          if (data) {
            universe.addObject(polyanet);
          }
        }
      } else {
        console.log(`${object} already on map`);
      }
    }
  }

  return universe.value.map((row) =>
    row.map((object: UniverseObject) => object?.name)
  );
};

main().then(console.log);
