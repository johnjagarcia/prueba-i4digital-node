import Album from './Album';

export default interface AlbumRepository {
  getList(userId: number): Promise<Album[] | undefined>;
}
