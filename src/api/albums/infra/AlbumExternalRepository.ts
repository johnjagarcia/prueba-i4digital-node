import axios from '../../../axios';
import { injectable } from 'inversify';
import Album from '../domain/Album';
import AlbumRepository from '../domain/AlbumRepository';

@injectable()
export default class AlbumExternalRepository implements AlbumRepository {
  async getList(userId: number): Promise<Album[]> {
    const { data } = await axios.get(`/albums?userId=${userId}`);
    return data;
  }
}
