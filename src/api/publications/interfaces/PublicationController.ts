import { Response } from 'express';
import { inject } from 'inversify';
import GetPublications from '../app/GetPublications';
import { controller, httpGet, queryParam, response } from 'inversify-express-utils';

@controller('/publications')
export class PublicationController {
  @inject(GetPublications)
  private getPublicationsUseCase: GetPublications;

  @httpGet('/')
  public async list(@queryParam('userId') userId: number, @response() res: Response) {
    const response = await this.getPublicationsUseCase.execute(userId);
    res.status(200).send(response);
  }
}
