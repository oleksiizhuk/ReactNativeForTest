import * as appSagas from './app';
import * as swapiSagas from './swapi';
export const sagas = {
  ...appSagas,
  ...swapiSagas,
};
