import { IUniverseRepository } from '../repository/universe.repository';

export abstract class UseCase<T> {
  public repository: IUniverseRepository<T>;

  constructor(repository: IUniverseRepository<T>) {
    this.repository = repository;
  }
  abstract execute(param: T): void;
}
