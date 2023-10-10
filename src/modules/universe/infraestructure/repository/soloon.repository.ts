import { Soloon } from '../../application/entities';
import { IUniverseRepository } from '../../domain/repository/universe.repository';
import { AxiosInstance } from 'axios';

export class SoloonRepository implements IUniverseRepository<Soloon> {
  constructor(public api: AxiosInstance) {}

  async add(soloon: Soloon) {
    const { row, column } = soloon.position;
    console.log(
      `Adding soloon to the universe... (${this.api.defaults.baseURL})`
    );
    try {
      const { data } = await this.api.post('/soloons', {
        row,
        column,
        color: soloon.color.toLowerCase(),
      });
      console.log('soloon added to the universe', { data });
      return true;
    } catch (error) {
      console.error('Error adding soloon to the universe');
      console.error(error);
      return false;
    }
  }
}
