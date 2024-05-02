const request = require('supertest');
const express = require('express');
const routes = require('../src/routes/userRoute');

const app = express();
const router  = express.Router();
app.use(express.json());
// app.use('/api/user', routes);
require("../src/routes/userRoute")(app)

describe('User Routes', () => {

    it('should return users', async () => {
        const res = await request(app)
          .get('/api/user/searchUser')
        expect(res.statusCode).toEqual(200); 
      });

    it('should return a user by username', async () => {
        const res = await request(app)
          .get('/u/:username')
          .send({
            username: "TestName"
          });
          expect(res.statusCode).toEqual(200);
    });

    it('should return a users followers by username', async () => {
        const res = await request(app)
          .get('/followers/:username')
          .send({
            username: "TestName"
          });
          expect(res.statusCode).toEqual(200);
    });

    it('should return a users following by username', async () => {
        const res = await request(app)
          .get('/followings/:username')
          .send({
            username: "TestName"
          });
          expect(res.statusCode).toEqual(200);
    });

    it('should sign up a new user', async () => {
        const res = await request(app)
          .post('/signup')
          .send({
            username: "TestName",
            password: "test123",
            email: "example@email.com"
          });
        expect(res.statusCode).toEqual(200); 
    });

    it('should login a user', async () => {
        const res = await request(app)
          .post('/login')
          .send({
            username: "TestName",
            password: "test123"
          });
        expect(res.statusCode).toEqual(200); 
    });
    
});
