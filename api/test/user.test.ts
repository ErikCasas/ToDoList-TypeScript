import supertest from 'supertest';
import app from '../src/app';
import { userLogIn } from './helpers/userTest';
import { startServer, closeServer } from '../src/index';
import { response } from 'express';
import db from '../src/config';
import mongoose from 'mongoose';

const request = supertest(app);

beforeAll(async () => {
  await startServer();
});

afterAll(async () => {
  await closeServer();
  await mongoose.disconnect()
  process.exit();
});

test('The path responds with a JSON :)', async () => {
 const response = await request
    .post('/User/LogIn')
    .send(userLogIn)
    .expect(200)
    .expect('Content-Type', /application\/json/);
    expect((response.body)).toMatchObject({
      Token:expect.any(String),
      email:userLogIn.email
    })
});

// test('no se que estoy haciendo', async()=>{
//     await request.get('/lola').expect(201)
// })
