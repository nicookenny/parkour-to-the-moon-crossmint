import { Cometh, Polyanet } from '../../application/entities';
import { IUniverseRepository } from '../../domain/repository/universe.repository';
import { AxiosInstance } from 'axios';

export class PolyanetRepository implements IUniverseRepository<Polyanet> {
  constructor(public api: AxiosInstance) {}

  async add(polyanet: Polyanet) {
    const { row, column } = polyanet.position;
    console.log(
      `Adding polyanet to the universe... (${this.api.defaults.baseURL})`
    );
    try {
      const { data } = await this.api.post('/polyanets', {
        row,
        column,
      });

      console.log('Polyanet added to the universe', { data });
      return true;
    } catch (error) {
      console.error('Error adding polyanet to the universe');
      console.error(error);
      return false;
    }
  }
}
