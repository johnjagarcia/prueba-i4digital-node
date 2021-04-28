import { inject, injectable } from 'inversify';
import { TYPES } from '../../../constants/types';
import PublicationRepository from '../domain/PublicationRepository';

@injectable()
export default class GetPublications {
  constructor(@inject(TYPES.PublicationRepository) private repository: PublicationRepository) {}

  async execute(userId: number) {
    return await this.repository.getList(userId);
  }
}
