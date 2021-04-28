import Photo from './Photo';

export default interface PhotoRepository {
  getList(albumId: number): Promise<Photo[] | undefined>;
}
