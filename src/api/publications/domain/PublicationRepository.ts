import Publication from './Publication';

export default interface PublicationRepository {
  getList(userId: number): Promise<Publication[] | undefined>;
}
