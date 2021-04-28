import { inject, injectable } from 'inversify';
import { TYPES } from '../../../constants/types';
import PhotoRepository from '../domain/PhotoRepository';

@injectable()
export default class GetPhotos {
  constructor(@inject(TYPES.PhotoRepository) private repository: PhotoRepository) {}

  async execute(userId: number) {
    return await this.repository.getList(userId);
  }
}
