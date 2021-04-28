import axios from '../../../axios';
import { injectable } from 'inversify';
import User from '../domain/User';
import UserRepository from '../domain/UserRepository';

@injectable()
export default class UserExternalRepository implements UserRepository {
  async getList(): Promise<User[]> {
    const { data } = await axios.get('/users');
    return data;
  }
}
