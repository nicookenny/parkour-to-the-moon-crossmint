import { UseCase } from '../../domain/entities/UseCase';
import { IUniverseRepository } from '../../domain/repository/universe.repository';
import { ComethRepository } from '../../infraestructure/repository/cometh.repository';
import { Cometh } from '../entities';

export class addComethUseCase extends UseCase<Cometh> {
  constructor(repository: ComethRepository) {
    super(repository);
  }
  async execute(cometh: Cometh) {
    return await this.repository.add(cometh);
  }
}
