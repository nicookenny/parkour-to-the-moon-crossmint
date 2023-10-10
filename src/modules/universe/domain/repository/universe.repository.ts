import { Cometh, Polyanet, Soloon, Space } from '../../application/entities';
import { AxiosInstance } from 'axios';

export interface IUniverseRepository<T> {
  api: AxiosInstance;
  add(object: T): Promise<boolean>;
}
