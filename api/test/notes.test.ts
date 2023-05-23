import supertest from 'supertest';
import { app } from '../src/index';
const request = supertest(app);

describe('rutas para las notas', () => {
  it('The path responds with a JSON', async () => {
    await request
      .get('/notes/getAll')
      .expect(200)
      .expect('Content-Type', /application\/json/);
  });
});
