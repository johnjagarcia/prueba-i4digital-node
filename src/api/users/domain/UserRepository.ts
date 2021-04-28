import User from './User';

export default interface UserRepository {
  getList(): Promise<User[] | undefined>;
}
