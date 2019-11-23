import * as express from 'express';
import { currentUser, list, login, logout } from '../controllers/user';

export default (app: express.Application): void => {
    app.get('/api/users', list);
    app.post('/api/login', login);
    app.get('/api/logout', logout);
    app.get('/api/users/current', currentUser);
};
