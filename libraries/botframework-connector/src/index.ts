if (!this.hasOwnProperty("FormData")) {
  this.FormData = require("form-data");
}

if (!this.hasOwnProperty("fetch")) {
  this.fetch = require("node-fetch");
}

import { TokenResponse } from './connectorApi/models/mappers';

/**
 * @module botbuilder
 */
export * from './auth';
export { ConnectorClient } from './connectorApi/connectorClient';
export { TokenApiClient, TokenApiModels } from './tokenApi/tokenApiClient';
export { EmulatorApiClient } from './emulatorApiClient';
export * from './tokenApi/models'
