import { Response } from 'express';
import { inject } from 'inversify';
import GetPhotos from '../app/GetPhotos';
import { controller, httpGet, queryParam, response } from 'inversify-express-utils';

@controller('/photos')
export class PhotoController {
  @inject(GetPhotos)
  private getAlbumsUseCase: GetPhotos;

  @httpGet('/')
  public async list(@queryParam('albumId') albumId: number, @response() res: Response) {
    const response = await this.getAlbumsUseCase.execute(albumId);
    res.status(200).send(response);
  }
}
