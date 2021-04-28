import express from 'express';
import { InversifyExpressServer } from 'inversify-express-utils';
import { connectDB } from './config/db.connection';
import myContainer from './config/inversify.config';
import LogDocument from './api/shared/infra/LogDocument';
import cors from 'cors';

import './api/albums/interfaces/AlbumController';
import './api/photos/interfaces/PhotoController';
import './api/publications/interfaces/PublicationController';
import './api/users/interfaces/UserController';
import './api/logs/interfaces/LogController';

class App {
  public server: InversifyExpressServer;
  public port: number;

  constructor(port: number) {
    this.server = new InversifyExpressServer(myContainer, null, { rootPath: '/api' });

    this.port = port;

    this.server.setConfig((app) => {
      app.use(cors());
      app.use(express.json());
      app.use(async function (req, res, next) {
        if (req.url && !req.url.includes('logs')) {
          try {
            const logDocument = new LogDocument({
              url: req.url,
              method: req.method,
              query: JSON.stringify(req.query)
            });
            await logDocument.save();
          } catch (error) {}
        }

        next();
      });
    });
  }

  async listen() {
    const serverInstance = this.server.build();

    await connectDB();

    serverInstance.listen(this.port, () => {
      console.log(`App listening on the port ${this.port}`);
    });
  }
}

export default App;
