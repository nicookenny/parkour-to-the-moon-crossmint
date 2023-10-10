import { Cometh } from '../../application/entities';
import { IUniverseRepository } from '../../domain/repository/universe.repository';
import { AxiosInstance } from 'axios';

export class ComethRepository implements IUniverseRepository<Cometh> {
  constructor(public api: AxiosInstance) {}

  async add(cometh: Cometh) {
    const { row, column } = cometh.position;
    console.log(
      `Adding cometh to the universe... (${this.api.defaults.baseURL})`
    );
    try {
      const { data } = await this.api.post('/comeths', {
        row,
        column,
        direction: cometh.direction.toLowerCase(),
      });
      console.log('Cometh added to the universe', { data });
      return true;
    } catch (error) {
      console.error('Error adding cometh to the universe');
      console.error(error);
      return false;
    }
  }
}
