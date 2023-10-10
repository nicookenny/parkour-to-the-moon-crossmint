import { UseCase } from '../../domain/entities/UseCase';
import { PolyanetRepository } from '../../infraestructure/repository/polyanet.repository';
import { Polyanet } from '../entities';

export class addPolyanetUseCase extends UseCase<Polyanet> {
  constructor(repository: PolyanetRepository) {
    super(repository);
  }
  async execute(polyanet: Polyanet) {
    return await this.repository.add(polyanet);
  }
}
