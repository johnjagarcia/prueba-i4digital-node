import { Container } from 'inversify';
import { TYPES } from '../constants/types';
import GetUsers from '../api/users/app/GetUsers';
import UserRepository from '../api/users/domain/UserRepository';
import UserExternalRepository from '../api/users/infra/UserExternalRepository';
import PublicationRepository from '../api/publications/domain/PublicationRepository';
import GetPublications from '../api/publications/app/GetPublications';
import PublicationExternalRepository from '../api/publications/infra/PublicationExternalRepository';
import AlbumRepository from '../api/albums/domain/AlbumRepository';
import AlbumExternalRepository from '../api/albums/infra/AlbumExternalRepository';
import GetAlbums from '../api/albums/app/GetAlbums';
import PhotoRepository from '../api/photos/domain/PhotoRepository';
import PhotoExternalRepository from '../api/photos/infra/PhotoExternalRepository';
import GetPhotos from '../api/photos/app/GetPhotos';
import LogRepository from '../api/logs/domain/LogRepository';
import LogExternalRepository from '../api/logs/infra/LogExternalRepository';
import GetLogs from '../api/logs/app/GetLogs';

const myContainer = new Container();

myContainer.bind<UserRepository>(TYPES.UserRepository).to(UserExternalRepository);
myContainer.bind<GetUsers>(GetUsers).to(GetUsers).inSingletonScope();

myContainer
  .bind<PublicationRepository>(TYPES.PublicationRepository)
  .to(PublicationExternalRepository);
myContainer.bind<GetPublications>(GetPublications).to(GetPublications).inSingletonScope();

myContainer.bind<AlbumRepository>(TYPES.AlbumRepository).to(AlbumExternalRepository);
myContainer.bind<GetAlbums>(GetAlbums).to(GetAlbums).inSingletonScope();

myContainer.bind<PhotoRepository>(TYPES.PhotoRepository).to(PhotoExternalRepository);
myContainer.bind<GetPhotos>(GetPhotos).to(GetPhotos).inSingletonScope();

myContainer.bind<LogRepository>(TYPES.LogRepository).to(LogExternalRepository);
myContainer.bind<GetLogs>(GetLogs).to(GetLogs).inSingletonScope();

export default myContainer;
