// Docs: https://github.com/mozilla/node-client-sessions

// const express = require('express');
// import * as sessions from 'client-sessions';
import sessions = require('client-sessions');

const sessionAuth = (app): void => {
    // Tutorial: https://github.com/mozilla/node-client-sessions
    app.use(
        sessions({
            cookieName: 'session',
            secret: 'mysecretkey',
            resave: true,
            aveUninitialized: true,
            duration: 60 * 60 * 1000, // how long the session will stay valid in ms
            activeDuration: 1000 * 60 * 10, // if expiresIn < activeDuration, the session will be extended by activeDuration milliseconds
        }),
    );

    app.use((req, res, next): void => {
        // APIs that client must be logged in for
        // Best practice: APIs that are accessible via the client but require a login
        // APIs are already protected by a Basic Auth, this is just a safegaurd
        const blacklisted = ['/api/users/create'];
        const path = req.originalUrl;
        // if (new RegExp(/\/api.*/).test(path)) { // Only require authentication for API routes
        if (!req.session.user) {
            console.log('No session');
            if (new RegExp(blacklisted.join('|'), 'i').test(path)) {
                // If on the blacklist
                res.status(401).send('Please log in');
            } else {
                // Allowed
                next();
            }
        } else {
            console.log(`Session with user: ${req.session.user.username}`);
            next();
        }
        // } else {
        //     next();
        // }
    });
};

export default sessionAuth;
