import supertest from 'supertest';
import app from '../src/app';
import { userLogIn } from './helpers/userTest';
import { startServer, closeServer } from '../src/index';
import { response } from 'express';

const request = supertest(app);

beforeAll(async () => {
  await startServer();
});

afterAll(async () => {
  await closeServer();
});

test('The path responds with a JSON :)', async () => {
 const response = await request
    .post('/User/LogIn')
    .send(userLogIn)
    .expect(200)
    .expect('Content-Type', /application\/json/);
    console.log(response.body)
});

// test('no se que estoy haciendo', async()=>{
//     await request.get('/lola').expect(201)
// })
