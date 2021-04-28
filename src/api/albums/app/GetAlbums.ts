import { inject, injectable } from 'inversify';
import { TYPES } from '../../../constants/types';
import AlbumRepository from '../domain/AlbumRepository';

@injectable()
export default class GetAlbums {
  constructor(@inject(TYPES.AlbumRepository) private repository: AlbumRepository) {}

  async execute(userId: number) {
    return await this.repository.getList(userId);
  }
}
