import { NextFunction, Request, Response } from 'express';
import { inject } from 'inversify';
import GetUsers from '../app/GetUsers';
import { controller, httpGet } from 'inversify-express-utils';

@controller('/users')
export class UserController {
  @inject(GetUsers)
  private getUsersUseCase: GetUsers;

  @httpGet('/')
  public async list(req: Request, res: Response, next: NextFunction) {
    const response = await this.getUsersUseCase.execute();
    res.status(200).send(response);
  }
}
