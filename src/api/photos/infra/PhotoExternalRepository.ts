import axios from '../../../axios';
import { injectable } from 'inversify';
import Photo from '../domain/Photo';
import PhotoRepository from '../domain/PhotoRepository';

@injectable()
export default class PhotoExternalRepository implements PhotoRepository {
  async getList(albumId: number): Promise<Photo[]> {
    const { data } = await axios.get(`/photos?albumId=${albumId}`);
    return data;
  }
}
