import { startServer } from '../src/index';

let server: any;

beforeAll(async () => {
  server = await startServer();
});

afterAll(() => {
  server.close();
});
