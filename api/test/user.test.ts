import supertest from 'supertest';
import { app } from '../src/index';
const request = supertest(app);


describe.skip('rutas para las notas', () => {
  test('The path responds with a JSON', async () => {
    await request.get('/notes/getAll')
    .expect(202)
    .expect('Content-Type', /application\/json/)
  });
});

