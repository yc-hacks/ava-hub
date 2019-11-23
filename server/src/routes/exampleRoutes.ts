import * as express from 'express';
import { getUser, testNest } from '../controllers/user';

export default (app: express.Application): void => {
    app.get('/api/user/:id', getUser);

    app.post('/api/nest', testNest);
};
