import { UseCase } from '../../domain/entities/UseCase';
import { SoloonRepository } from '../../infraestructure/repository/soloon.repository';
import { Soloon } from '../entities';

export class addSoloonUseCase extends UseCase<Soloon> {
  constructor(repository: SoloonRepository) {
    super(repository);
  }
  async execute(soloon: Soloon) {
    return await this.repository.add(soloon);
  }
}
