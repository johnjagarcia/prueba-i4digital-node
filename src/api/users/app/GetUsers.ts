import { inject, injectable } from 'inversify';
import { TYPES } from '../../../constants/types';
import UserRepository from '../domain/UserRepository';

@injectable()
export default class GetUsers {
  constructor(@inject(TYPES.UserRepository) private repository: UserRepository) {}

  async execute() {
    return await this.repository.getList();
  }
}
