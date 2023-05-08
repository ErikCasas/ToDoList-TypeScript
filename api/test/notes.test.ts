import supertest from 'supertest';
import { startServer, app } from '../src/index';
const request = supertest(app);

let server:any;

beforeAll(async () => {
  server = await startServer();
});

afterAll(() => {
  server.close();
});

describe('Ruta para crear una nota', () => {});

// afterAll(() => app.close());
