//import { Client } from './node_modules/appwrite';
import { Client, Account, ID } from './node_modules/appwrite/dist/cjs/sdk.js';
const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('646b7d74ec0c50722e35');