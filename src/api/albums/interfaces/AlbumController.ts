import { Response } from 'express';
import { inject } from 'inversify';
import GetAlbums from '../app/GetAlbums';
import { controller, httpGet, queryParam, response } from 'inversify-express-utils';

@controller('/albums')
export class AlbumController {
  @inject(GetAlbums)
  private getAlbumsUseCase: GetAlbums;

  @httpGet('/')
  public async list(@queryParam('userId') userId: number, @response() res: Response) {
    const response = await this.getAlbumsUseCase.execute(userId);
    res.status(200).send(response);
  }
}
