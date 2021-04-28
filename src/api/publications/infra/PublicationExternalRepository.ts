import axios from '../../../axios';
import { injectable } from 'inversify';
import Publication from '../domain/Publication';
import PublicationRepository from '../domain/PublicationRepository';

@injectable()
export default class PublicationExternalRepository implements PublicationRepository {
  async getList(userId: number): Promise<Publication[]> {
    const { data } = await axios.get(`/posts?userId=${userId}`);
    return data;
  }
}
