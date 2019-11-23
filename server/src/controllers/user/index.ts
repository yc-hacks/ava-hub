import * as express from 'express';
import User from '../../models/user';

export interface UserInterace {
    id: number;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    createdBy: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface Request extends express.Request {
    session: {
        user: User;
        reset: { (): void };
    };
}

export const list = (req: express.Request, res: express.Response): any => {
    return User.findAll({})
        .then((users): express.Response => res.status(200).send(users.map((user) => user.id))) // Return array of quotes
        .catch((error: Error): express.Response => res.status(400).send(error)); // Error
};

/*
 * Parameters:
 *  req.body {
 *      username,
 *      password,
 *  }
 */
export const login = (req: Request, res: express.Response): any => {
    const data = req.body;
    if (data.username === undefined || data.password === undefined) {
        // Empty authentication
        res.status(200).send({
            success: false,
            error: 'Please submit a username and password',
        });
        return; // Terminate
    }
    return User.findOne({
        where: {
            username: data.username,
            password: data.password,
        },
    }) // Get all quotes
        .then(
            (user: User): express.Response => {
                if (user == null) {
                    // Invalid credentials
                    return res.status(200).send({
                        success: false,
                        error: 'Invalid username & password',
                    });
                }

                // Valid credentials
                console.log(`Successfully logged in user: ${user.username}`);
                delete user.password; // Don't send back password
                req.session.user = user; // Set cookie
                return res.status(200).send({
                    success: true,
                    user, // Send user
                });
            },
        ) // Return array of quotes
        .catch(
            (error: Error): express.Response => {
                console.log(error);
                return res.status(400).send({
                    success: false,
                    error,
                });
            },
        ); // Error in request
};

export const logout = (req: Request, res: express.Response): void => {
    const previousUser = req.session.user;
    req.session.reset();
    res.status(200).send({
        success: true,
        user: previousUser,
    });
};

export const currentUser = (req: Request, res: express.Response): void => {
    if (req.session.user) {
        delete req.session.user.password; // Remove password
        const data = {
            loggedIn: true,
            user: req.session.user,
        };
        res.status(200).send(data);
    } else {
        const data = {
            loggedIn: false,
        };
        res.status(200).send(data);
    }
};
