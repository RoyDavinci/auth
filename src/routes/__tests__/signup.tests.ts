import request, {Request, Response} from 'supertest';
import app from '../../app';

// beforeAll(() => {
//     //start the database connection
// });

// beforeEach(() => {
//     //clean up the database
// });

// afterAll(() => {
//     //close up the database connection
// });

it('should return 405 for non-post requests to the sign up route', () => {});
it('should return 422 if email is not valid', async () => {
    await request(app).post('/api/auth/signup').send({email: 'emsthias33@gmail'}).expect(422);
});
