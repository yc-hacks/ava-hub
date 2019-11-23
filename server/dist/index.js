(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./server/src/app.ts":
/*!***************************!*\
  !*** ./server/src/app.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const express = __webpack_require__(/*! express */ "express");
const session_1 = __webpack_require__(/*! ./config/session */ "./server/src/config/session.ts");
const models_1 = __webpack_require__(/*! ./models */ "./server/src/models/index.ts");
const routes_1 = __webpack_require__(/*! ./routes */ "./server/src/routes/index.ts");
const logger = __webpack_require__(/*! morgan */ "morgan");
const bodyParser = __webpack_require__(/*! body-parser */ "body-parser");
const path = __webpack_require__(/*! path */ "path");
const dotenv = __webpack_require__(/*! dotenv */ "dotenv");
const result = dotenv.config();
const __dirname = process.env.PWD;
const app = express();
app.all('*', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Origin', `${req.headers.origin}`);
    res.header('Access-Control-Allow-Headers', 'accept, content-type, x-parse-application-id, x-parse-rest-api-key, x-parse-session-token, AUTHORIZATION');
    if ('OPTIONS' == req.method) {
        res.send(200);
    }
    else {
        next();
    }
});
session_1.default(app);
models_1.default();
app.use(logger('dev'));
app.use(bodyParser.json({ limit: '15mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '15mb', extended: true }));
var queryParser = __webpack_require__(/*! express-query-int */ "express-query-int");
app.use(bodyParser.json());
app.use(queryParser());
app.use('/scripts', express.static(path.join(__dirname, '../../client/dist')));
routes_1.default(app);
app.get('*', (req, res) => res.status(200).send({
    message: 'For some reason, none of the routes hit...',
}));
exports.default = app;


/***/ }),

/***/ "./server/src/config/config.json":
/*!***************************************!*\
  !*** ./server/src/config/config.json ***!
  \***************************************/
/*! exports provided: development, production, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"development\":{\"username\":\"kevinhou\",\"password\":null,\"database\":\"ava-hub\",\"host\":\"127.0.0.1\",\"port\":5432,\"dialect\":\"postgres\"},\"production\":{\"use_env_variable\":\"DATABASE_URL\"}}");

/***/ }),

/***/ "./server/src/config/session.ts":
/*!**************************************!*\
  !*** ./server/src/config/session.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const sessions = __webpack_require__(/*! client-sessions */ "client-sessions");
const sessionAuth = (app) => {
    app.use(sessions({
        cookieName: 'session',
        secret: 'mysecretkey',
        resave: true,
        aveUninitialized: true,
        duration: 60 * 60 * 1000,
        activeDuration: 1000 * 60 * 10,
    }));
    app.use((req, res, next) => {
        const blacklisted = ['/api/users/create'];
        const path = req.originalUrl;
        if (!req.session.user) {
            console.log('No session');
            if (new RegExp(blacklisted.join('|'), 'i').test(path)) {
                res.status(401).send('Please log in');
            }
            else {
                next();
            }
        }
        else {
            console.log(`Session with user: ${req.session.user.username}`);
            next();
        }
    });
};
exports.default = sessionAuth;


/***/ }),

/***/ "./server/src/controllers/user/index.ts":
/*!**********************************************!*\
  !*** ./server/src/controllers/user/index.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = __webpack_require__(/*! ../../models/user */ "./server/src/models/user.ts");
exports.list = (req, res) => {
    return user_1.default.findAll({})
        .then((users) => res.status(200).send(users.map((user) => user.id)))
        .catch((error) => res.status(400).send(error));
};
exports.login = (req, res) => {
    const data = req.body;
    if (data.username === undefined || data.password === undefined) {
        res.status(200).send({
            success: false,
            error: 'Please submit a username and password',
        });
        return;
    }
    return user_1.default.findOne({
        where: {
            username: data.username,
            password: data.password,
        },
    })
        .then((user) => {
        if (user == null) {
            return res.status(200).send({
                success: false,
                error: 'Invalid username & password',
            });
        }
        console.log(`Successfully logged in user: ${user.username}`);
        delete user.password;
        req.session.user = user;
        return res.status(200).send({
            success: true,
            user,
        });
    })
        .catch((error) => {
        console.log(error);
        return res.status(400).send({
            success: false,
            error,
        });
    });
};
exports.logout = (req, res) => {
    const previousUser = req.session.user;
    req.session.reset();
    res.status(200).send({
        success: true,
        user: previousUser,
    });
};
exports.currentUser = (req, res) => {
    if (req.session.user) {
        delete req.session.user.password;
        const data = {
            loggedIn: true,
            user: req.session.user,
        };
        res.status(200).send(data);
    }
    else {
        const data = {
            loggedIn: false,
        };
        res.status(200).send(data);
    }
};


/***/ }),

/***/ "./server/src/index.ts":
/*!*****************************!*\
  !*** ./server/src/index.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __webpack_require__(/*! ./app */ "./server/src/app.ts");
const port = parseInt(process.env.PORT, 10) || 5000;
app_1.default.set('port', port);
app_1.default.listen(port);


/***/ }),

/***/ "./server/src/models/episode.ts":
/*!**************************************!*\
  !*** ./server/src/models/episode.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = __webpack_require__(/*! sequelize-typescript */ "sequelize-typescript");
const podcast_1 = __webpack_require__(/*! ./podcast */ "./server/src/models/podcast.ts");
let Episode = class Episode extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.AllowNull(false),
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Episode.prototype, "title", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Episode.prototype, "description", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Date)
], Episode.prototype, "pubDat", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Episode.prototype, "link", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Episode.prototype, "audioLink", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => podcast_1.default),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Episode.prototype, "podcastId", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => podcast_1.default),
    __metadata("design:type", podcast_1.default)
], Episode.prototype, "podcast", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Episode.prototype, "transcript", void 0);
__decorate([
    sequelize_typescript_1.CreatedAt,
    __metadata("design:type", Date)
], Episode.prototype, "createdAt", void 0);
__decorate([
    sequelize_typescript_1.UpdatedAt,
    __metadata("design:type", Date)
], Episode.prototype, "updatedAt", void 0);
Episode = __decorate([
    sequelize_typescript_1.Table({ tableName: 'Episode' })
], Episode);
exports.default = Episode;


/***/ }),

/***/ "./server/src/models/genre.ts":
/*!************************************!*\
  !*** ./server/src/models/genre.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = __webpack_require__(/*! sequelize-typescript */ "sequelize-typescript");
const podcast_1 = __webpack_require__(/*! ./podcast */ "./server/src/models/podcast.ts");
let Genre = class Genre extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.AllowNull(false),
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Genre.prototype, "name", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Genre.prototype, "description", void 0);
__decorate([
    sequelize_typescript_1.HasMany(() => podcast_1.default),
    __metadata("design:type", Array)
], Genre.prototype, "podcasts", void 0);
__decorate([
    sequelize_typescript_1.CreatedAt,
    __metadata("design:type", Date)
], Genre.prototype, "createdAt", void 0);
__decorate([
    sequelize_typescript_1.UpdatedAt,
    __metadata("design:type", Date)
], Genre.prototype, "updatedAt", void 0);
Genre = __decorate([
    sequelize_typescript_1.Table({ tableName: 'Genre' })
], Genre);
exports.default = Genre;


/***/ }),

/***/ "./server/src/models/index.ts":
/*!************************************!*\
  !*** ./server/src/models/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = __webpack_require__(/*! sequelize-typescript */ "sequelize-typescript");
const episode_1 = __webpack_require__(/*! ./episode */ "./server/src/models/episode.ts");
const genre_1 = __webpack_require__(/*! ./genre */ "./server/src/models/genre.ts");
const podcast_1 = __webpack_require__(/*! ./podcast */ "./server/src/models/podcast.ts");
const user_1 = __webpack_require__(/*! ./user */ "./server/src/models/user.ts");
const logger = __webpack_require__(/*! heroku-logger */ "heroku-logger");
const configFile = __webpack_require__(/*! ../config/config.json */ "./server/src/config/config.json");
exports.default = () => {
    var env = "development" || false;
    var db = {};
    let sequelize = {};
    console.log("development");
    logger.info(`process.env.NODE_ENV: ${"development"}`);
    if (false) {}
    else {
        var config = configFile[env];
        console.log('Using local configuration:', config);
        logger.info('Using local configuration:', { config });
        sequelize = new sequelize_typescript_1.Sequelize(Object.assign({}, config));
    }
    sequelize.addModels([podcast_1.default, episode_1.default, genre_1.default, user_1.default]);
    sequelize.sync({ alter: true });
    db.sequelize = sequelize;
    db.Sequelize = sequelize_typescript_1.Sequelize;
};


/***/ }),

/***/ "./server/src/models/podcast.ts":
/*!**************************************!*\
  !*** ./server/src/models/podcast.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = __webpack_require__(/*! sequelize-typescript */ "sequelize-typescript");
const episode_1 = __webpack_require__(/*! ./episode */ "./server/src/models/episode.ts");
const genre_1 = __webpack_require__(/*! ./genre */ "./server/src/models/genre.ts");
let Podcast = class Podcast extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.AllowNull(false),
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Podcast.prototype, "name", void 0);
__decorate([
    sequelize_typescript_1.AllowNull(false),
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Podcast.prototype, "author", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Podcast.prototype, "description", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Podcast.prototype, "image", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => genre_1.default),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Podcast.prototype, "genreId", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => genre_1.default),
    __metadata("design:type", genre_1.default)
], Podcast.prototype, "genre", void 0);
__decorate([
    sequelize_typescript_1.HasMany(() => episode_1.default),
    __metadata("design:type", Array)
], Podcast.prototype, "episodes", void 0);
__decorate([
    sequelize_typescript_1.CreatedAt,
    __metadata("design:type", Date)
], Podcast.prototype, "createdAt", void 0);
__decorate([
    sequelize_typescript_1.UpdatedAt,
    __metadata("design:type", Date)
], Podcast.prototype, "updatedAt", void 0);
Podcast = __decorate([
    sequelize_typescript_1.Table({ tableName: 'Podcast' })
], Podcast);
exports.default = Podcast;


/***/ }),

/***/ "./server/src/models/user.ts":
/*!***********************************!*\
  !*** ./server/src/models/user.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = __webpack_require__(/*! sequelize-typescript */ "sequelize-typescript");
let User = class User extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.AllowNull(false),
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], User.prototype, "username", void 0);
__decorate([
    sequelize_typescript_1.AllowNull(false),
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    sequelize_typescript_1.AllowNull(false),
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], User.prototype, "firstName", void 0);
__decorate([
    sequelize_typescript_1.AllowNull(false),
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], User.prototype, "lastName", void 0);
__decorate([
    sequelize_typescript_1.CreatedAt,
    __metadata("design:type", Date)
], User.prototype, "createdAt", void 0);
__decorate([
    sequelize_typescript_1.UpdatedAt,
    __metadata("design:type", Date)
], User.prototype, "updatedAt", void 0);
User = __decorate([
    sequelize_typescript_1.Table({ tableName: 'User' })
], User);
exports.default = User;


/***/ }),

/***/ "./server/src/routes/index.ts":
/*!************************************!*\
  !*** ./server/src/routes/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const express = __webpack_require__(/*! express */ "express");
const path = __webpack_require__(/*! path */ "path");
const loginRoutes_1 = __webpack_require__(/*! ./loginRoutes */ "./server/src/routes/loginRoutes.ts");
const routes = (app) => {
    loginRoutes_1.default(app);
    app.use(express.static('./client/build'));
    app.get('/favicon.png', (req, res) => {
        const __dirname = process.env.PWD;
        res.sendFile('favicon.png', { root: path.join(__dirname, './client/assets') });
    });
    app.get('*', (req, res) => {
        const __dirname = process.env.PWD;
        res.sendFile('index.html', { root: path.join(__dirname, './client/build') });
    });
};
exports.default = routes;


/***/ }),

/***/ "./server/src/routes/loginRoutes.ts":
/*!******************************************!*\
  !*** ./server/src/routes/loginRoutes.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = __webpack_require__(/*! ../controllers/user */ "./server/src/controllers/user/index.ts");
exports.default = (app) => {
    app.get('/api/users', user_1.list);
    app.post('/api/login', user_1.login);
    app.get('/api/logout', user_1.logout);
    app.get('/api/users/current', user_1.currentUser);
};


/***/ }),

/***/ 0:
/*!**************************************************!*\
  !*** multi babel-polyfill ./server/src/index.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! babel-polyfill */"babel-polyfill");
module.exports = __webpack_require__(/*! ./server/src/index.ts */"./server/src/index.ts");


/***/ }),

/***/ "babel-polyfill":
/*!*********************************!*\
  !*** external "babel-polyfill" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),

/***/ "client-sessions":
/*!**********************************!*\
  !*** external "client-sessions" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("client-sessions");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("dotenv");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "express-query-int":
/*!************************************!*\
  !*** external "express-query-int" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express-query-int");

/***/ }),

/***/ "heroku-logger":
/*!********************************!*\
  !*** external "heroku-logger" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("heroku-logger");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("morgan");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "sequelize-typescript":
/*!***************************************!*\
  !*** external "sequelize-typescript" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sequelize-typescript");

/***/ })

/******/ })));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NyYy9hcHAudHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NyYy9jb25maWcvc2Vzc2lvbi50cyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvc3JjL2NvbnRyb2xsZXJzL3VzZXIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvc3JjL21vZGVscy9lcGlzb2RlLnRzIiwid2VicGFjazovLy8uL3NlcnZlci9zcmMvbW9kZWxzL2dlbnJlLnRzIiwid2VicGFjazovLy8uL3NlcnZlci9zcmMvbW9kZWxzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NlcnZlci9zcmMvbW9kZWxzL3BvZGNhc3QudHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NyYy9tb2RlbHMvdXNlci50cyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvc3JjL3JvdXRlcy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvc3JjL3JvdXRlcy9sb2dpblJvdXRlcy50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiYWJlbC1wb2x5ZmlsbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImJvZHktcGFyc2VyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY2xpZW50LXNlc3Npb25zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZG90ZW52XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXhwcmVzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3MtcXVlcnktaW50XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaGVyb2t1LWxvZ2dlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vcmdhblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInBhdGhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzZXF1ZWxpemUtdHlwZXNjcmlw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LENBQUMsR0FBd0IsRUFBUSxFQUFFO0lBQzlDLEdBQUcsQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLFdBQUksQ0FBQyxDQUFDO0lBQzVCLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLFlBQUssQ0FBQyxDQUFDO0lBQzlCLEdBQUcsQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLGFBQU0sQ0FBQyxDQUFDO0lBQy9CLEdBQUcsQ0FBQyxHQUFHLENBQUMsb0JBQW9CLEVBQUUsa0JBQVcsQ0FBQyxDQUFDO0FBQy9DLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1JGLDJDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLDRDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLG9DOzs7Ozs7Ozs7OztBQ0FBLDhDOzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLGlDOzs7Ozs7Ozs7OztBQ0FBLGlEIiwiZmlsZSI6ImRpc3QvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgKiBhcyBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IHNlc3Npb24gZnJvbSAnLi9jb25maWcvc2Vzc2lvbic7XG5pbXBvcnQgaW5pdGlhbGl6ZSBmcm9tICcuL21vZGVscyc7XG5pbXBvcnQgcm91dGVzIGZyb20gJy4vcm91dGVzJztcblxuaW1wb3J0IGxvZ2dlciA9IHJlcXVpcmUoJ21vcmdhbicpO1xuY29uc3QgYm9keVBhcnNlciA9IHJlcXVpcmUoJ2JvZHktcGFyc2VyJyk7XG5pbXBvcnQgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKTtcblxuLy8gQ29uZmlndXJlIGRvdGVudiB0byBsb2FkIGluIHRoZSAuZW52IGZpbGVcbmltcG9ydCBkb3RlbnYgPSByZXF1aXJlKCdkb3RlbnYnKTtcbmNvbnN0IHJlc3VsdCA9IGRvdGVudi5jb25maWcoKTtcblxuY29uc3QgX19kaXJuYW1lID0gcHJvY2Vzcy5lbnYuUFdEOyAvLyBDb3VsZCBicmVhayBvbiBwcm9kXG5cbmNvbnN0IGFwcCA9IGV4cHJlc3MoKTsgLy8gU2V0dXAgZXhwcmVzcyBhcHBcblxuLy8gQWxsb3cgY3Jvc3Mgb3JpZ2luIHJlcXVlc3RzIHdpdGggYXV0aG9yaXphdGlvbiAoZm9yIEFQSSBwdXJwb3NlcylcbmFwcC5hbGwoJyonLCAocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSwgbmV4dDogZXhwcmVzcy5OZXh0RnVuY3Rpb24pOiB2b2lkID0+IHtcbiAgICByZXMuaGVhZGVyKCdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nLCAnKicpO1xuICAgIHJlcy5oZWFkZXIoJ0FjY2Vzcy1Db250cm9sLUFsbG93LU1ldGhvZHMnLCAnUFVULCBHRVQsIFBPU1QsIERFTEVURSwgT1BUSU9OUycpO1xuICAgIHJlcy5oZWFkZXIoJ0FjY2Vzcy1Db250cm9sLUFsbG93LUNyZWRlbnRpYWxzJywgJ3RydWUnKTtcbiAgICByZXMuaGVhZGVyKCdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nLCBgJHtyZXEuaGVhZGVycy5vcmlnaW59YCk7XG4gICAgcmVzLmhlYWRlcihcbiAgICAgICAgJ0FjY2Vzcy1Db250cm9sLUFsbG93LUhlYWRlcnMnLFxuICAgICAgICAnYWNjZXB0LCBjb250ZW50LXR5cGUsIHgtcGFyc2UtYXBwbGljYXRpb24taWQsIHgtcGFyc2UtcmVzdC1hcGkta2V5LCB4LXBhcnNlLXNlc3Npb24tdG9rZW4sIEFVVEhPUklaQVRJT04nLFxuICAgICk7XG4gICAgLy8gSW50ZXJjZXB0IE9QVElPTlMgbWV0aG9kXG4gICAgaWYgKCdPUFRJT05TJyA9PSByZXEubWV0aG9kKSB7XG4gICAgICAgIHJlcy5zZW5kKDIwMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbmV4dCgpO1xuICAgIH1cbn0pO1xuXG4vLyBTZXR1cCBhdXRoZW50aWNhdGlvbiBhbmQgc2VjdXJpdHlcbi8vIHNlY3VyaXR5KGFwcCk7XG5zZXNzaW9uKGFwcCk7XG5pbml0aWFsaXplKCk7XG5cbi8vIExvZyByZXF1ZXN0cyB0byB0aGUgY29uc29sZS5cbmFwcC51c2UobG9nZ2VyKCdkZXYnKSk7XG5cbi8vIFBhcnNlIGluY29taW5nIHJlcXVlc3RzIGRhdGEgKGh0dHBzOi8vZ2l0aHViLmNvbS9leHByZXNzanMvYm9keS1wYXJzZXIpXG4vLyAgKyBpbmNyZWFzaW5nIGJvZHkgcmVxdWVzdCBsaW1pdCBzaXplXG5hcHAudXNlKGJvZHlQYXJzZXIuanNvbih7IGxpbWl0OiAnMTVtYicsIGV4dGVuZGVkOiB0cnVlIH0pKTtcbmFwcC51c2UoYm9keVBhcnNlci51cmxlbmNvZGVkKHsgbGltaXQ6ICcxNW1iJywgZXh0ZW5kZWQ6IHRydWUgfSkpO1xuXG4vLyBQYXJzZSBxdWVyaWVzIGludG8gbnVtYmVycywgbm90IHN0cmluZ3NcbnZhciBxdWVyeVBhcnNlciA9IHJlcXVpcmUoJ2V4cHJlc3MtcXVlcnktaW50Jyk7XG5hcHAudXNlKGJvZHlQYXJzZXIuanNvbigpKTtcbmFwcC51c2UocXVlcnlQYXJzZXIoKSk7XG5cbmFwcC51c2UoJy9zY3JpcHRzJywgZXhwcmVzcy5zdGF0aWMocGF0aC5qb2luKF9fZGlybmFtZSwgJy4uLy4uL2NsaWVudC9kaXN0JykpKTtcblxuLy8gUmVxdWlyZSByb3V0ZXMgYW5kIHNpbXVsdGFuZW91c2x5IGF0dGFjaCBhcHBcbnJvdXRlcyhhcHApO1xuXG4vLyBDYXRjaCBhbGwgaWYgdGhlIHJvdXRlcyBkb2Vzbid0IGZpbmQgYSB2YWxpZCBVUkxcbmFwcC5nZXQoXG4gICAgJyonLFxuICAgIChyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlKTogZXhwcmVzcy5SZXNwb25zZSA9PlxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuc2VuZCh7XG4gICAgICAgICAgICBtZXNzYWdlOiAnRm9yIHNvbWUgcmVhc29uLCBub25lIG9mIHRoZSByb3V0ZXMgaGl0Li4uJyxcbiAgICAgICAgfSksXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBhcHA7XG4iLCIvLyBEb2NzOiBodHRwczovL2dpdGh1Yi5jb20vbW96aWxsYS9ub2RlLWNsaWVudC1zZXNzaW9uc1xuXG4vLyBjb25zdCBleHByZXNzID0gcmVxdWlyZSgnZXhwcmVzcycpO1xuLy8gaW1wb3J0ICogYXMgc2Vzc2lvbnMgZnJvbSAnY2xpZW50LXNlc3Npb25zJztcbmltcG9ydCBzZXNzaW9ucyA9IHJlcXVpcmUoJ2NsaWVudC1zZXNzaW9ucycpO1xuXG5jb25zdCBzZXNzaW9uQXV0aCA9IChhcHApOiB2b2lkID0+IHtcbiAgICAvLyBUdXRvcmlhbDogaHR0cHM6Ly9naXRodWIuY29tL21vemlsbGEvbm9kZS1jbGllbnQtc2Vzc2lvbnNcbiAgICBhcHAudXNlKFxuICAgICAgICBzZXNzaW9ucyh7XG4gICAgICAgICAgICBjb29raWVOYW1lOiAnc2Vzc2lvbicsXG4gICAgICAgICAgICBzZWNyZXQ6ICdteXNlY3JldGtleScsXG4gICAgICAgICAgICByZXNhdmU6IHRydWUsXG4gICAgICAgICAgICBhdmVVbmluaXRpYWxpemVkOiB0cnVlLFxuICAgICAgICAgICAgZHVyYXRpb246IDYwICogNjAgKiAxMDAwLCAvLyBob3cgbG9uZyB0aGUgc2Vzc2lvbiB3aWxsIHN0YXkgdmFsaWQgaW4gbXNcbiAgICAgICAgICAgIGFjdGl2ZUR1cmF0aW9uOiAxMDAwICogNjAgKiAxMCwgLy8gaWYgZXhwaXJlc0luIDwgYWN0aXZlRHVyYXRpb24sIHRoZSBzZXNzaW9uIHdpbGwgYmUgZXh0ZW5kZWQgYnkgYWN0aXZlRHVyYXRpb24gbWlsbGlzZWNvbmRzXG4gICAgICAgIH0pLFxuICAgICk7XG5cbiAgICBhcHAudXNlKChyZXEsIHJlcywgbmV4dCk6IHZvaWQgPT4ge1xuICAgICAgICAvLyBBUElzIHRoYXQgY2xpZW50IG11c3QgYmUgbG9nZ2VkIGluIGZvclxuICAgICAgICAvLyBCZXN0IHByYWN0aWNlOiBBUElzIHRoYXQgYXJlIGFjY2Vzc2libGUgdmlhIHRoZSBjbGllbnQgYnV0IHJlcXVpcmUgYSBsb2dpblxuICAgICAgICAvLyBBUElzIGFyZSBhbHJlYWR5IHByb3RlY3RlZCBieSBhIEJhc2ljIEF1dGgsIHRoaXMgaXMganVzdCBhIHNhZmVnYXVyZFxuICAgICAgICBjb25zdCBibGFja2xpc3RlZCA9IFsnL2FwaS91c2Vycy9jcmVhdGUnXTtcbiAgICAgICAgY29uc3QgcGF0aCA9IHJlcS5vcmlnaW5hbFVybDtcbiAgICAgICAgLy8gaWYgKG5ldyBSZWdFeHAoL1xcL2FwaS4qLykudGVzdChwYXRoKSkgeyAvLyBPbmx5IHJlcXVpcmUgYXV0aGVudGljYXRpb24gZm9yIEFQSSByb3V0ZXNcbiAgICAgICAgaWYgKCFyZXEuc2Vzc2lvbi51c2VyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnTm8gc2Vzc2lvbicpO1xuICAgICAgICAgICAgaWYgKG5ldyBSZWdFeHAoYmxhY2tsaXN0ZWQuam9pbignfCcpLCAnaScpLnRlc3QocGF0aCkpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBvbiB0aGUgYmxhY2tsaXN0XG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDEpLnNlbmQoJ1BsZWFzZSBsb2cgaW4nKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gQWxsb3dlZFxuICAgICAgICAgICAgICAgIG5leHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBTZXNzaW9uIHdpdGggdXNlcjogJHtyZXEuc2Vzc2lvbi51c2VyLnVzZXJuYW1lfWApO1xuICAgICAgICAgICAgbmV4dCgpO1xuICAgICAgICB9XG4gICAgICAgIC8vIH0gZWxzZSB7XG4gICAgICAgIC8vICAgICBuZXh0KCk7XG4gICAgICAgIC8vIH1cbiAgICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNlc3Npb25BdXRoO1xuIiwiaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbmltcG9ydCBVc2VyIGZyb20gJy4uLy4uL21vZGVscy91c2VyJztcblxuZXhwb3J0IGludGVyZmFjZSBVc2VySW50ZXJhY2Uge1xuICAgIGlkOiBudW1iZXI7XG4gICAgdXNlcm5hbWU6IHN0cmluZztcbiAgICBwYXNzd29yZDogc3RyaW5nO1xuICAgIGZpcnN0TmFtZTogc3RyaW5nO1xuICAgIGxhc3ROYW1lOiBzdHJpbmc7XG4gICAgY3JlYXRlZEJ5OiBzdHJpbmc7XG4gICAgY3JlYXRlZEF0OiBEYXRlO1xuICAgIHVwZGF0ZWRBdDogRGF0ZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZXF1ZXN0IGV4dGVuZHMgZXhwcmVzcy5SZXF1ZXN0IHtcbiAgICBzZXNzaW9uOiB7XG4gICAgICAgIHVzZXI6IFVzZXI7XG4gICAgICAgIHJlc2V0OiB7ICgpOiB2b2lkIH07XG4gICAgfTtcbn1cblxuZXhwb3J0IGNvbnN0IGxpc3QgPSAocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSk6IGFueSA9PiB7XG4gICAgcmV0dXJuIFVzZXIuZmluZEFsbCh7fSlcbiAgICAgICAgLnRoZW4oKHVzZXJzKTogZXhwcmVzcy5SZXNwb25zZSA9PiByZXMuc3RhdHVzKDIwMCkuc2VuZCh1c2Vycy5tYXAoKHVzZXIpID0+IHVzZXIuaWQpKSkgLy8gUmV0dXJuIGFycmF5IG9mIHF1b3Rlc1xuICAgICAgICAuY2F0Y2goKGVycm9yOiBFcnJvcik6IGV4cHJlc3MuUmVzcG9uc2UgPT4gcmVzLnN0YXR1cyg0MDApLnNlbmQoZXJyb3IpKTsgLy8gRXJyb3Jcbn07XG5cbi8qXG4gKiBQYXJhbWV0ZXJzOlxuICogIHJlcS5ib2R5IHtcbiAqICAgICAgdXNlcm5hbWUsXG4gKiAgICAgIHBhc3N3b3JkLFxuICogIH1cbiAqL1xuZXhwb3J0IGNvbnN0IGxvZ2luID0gKHJlcTogUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlKTogYW55ID0+IHtcbiAgICBjb25zdCBkYXRhID0gcmVxLmJvZHk7XG4gICAgaWYgKGRhdGEudXNlcm5hbWUgPT09IHVuZGVmaW5lZCB8fCBkYXRhLnBhc3N3b3JkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgLy8gRW1wdHkgYXV0aGVudGljYXRpb25cbiAgICAgICAgcmVzLnN0YXR1cygyMDApLnNlbmQoe1xuICAgICAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgICAgICBlcnJvcjogJ1BsZWFzZSBzdWJtaXQgYSB1c2VybmFtZSBhbmQgcGFzc3dvcmQnLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuOyAvLyBUZXJtaW5hdGVcbiAgICB9XG4gICAgcmV0dXJuIFVzZXIuZmluZE9uZSh7XG4gICAgICAgIHdoZXJlOiB7XG4gICAgICAgICAgICB1c2VybmFtZTogZGF0YS51c2VybmFtZSxcbiAgICAgICAgICAgIHBhc3N3b3JkOiBkYXRhLnBhc3N3b3JkLFxuICAgICAgICB9LFxuICAgIH0pIC8vIEdldCBhbGwgcXVvdGVzXG4gICAgICAgIC50aGVuKFxuICAgICAgICAgICAgKHVzZXI6IFVzZXIpOiBleHByZXNzLlJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodXNlciA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEludmFsaWQgY3JlZGVudGlhbHNcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6ICdJbnZhbGlkIHVzZXJuYW1lICYgcGFzc3dvcmQnLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBWYWxpZCBjcmVkZW50aWFsc1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBTdWNjZXNzZnVsbHkgbG9nZ2VkIGluIHVzZXI6ICR7dXNlci51c2VybmFtZX1gKTtcbiAgICAgICAgICAgICAgICBkZWxldGUgdXNlci5wYXNzd29yZDsgLy8gRG9uJ3Qgc2VuZCBiYWNrIHBhc3N3b3JkXG4gICAgICAgICAgICAgICAgcmVxLnNlc3Npb24udXNlciA9IHVzZXI7IC8vIFNldCBjb29raWVcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQoe1xuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB1c2VyLCAvLyBTZW5kIHVzZXJcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICkgLy8gUmV0dXJuIGFycmF5IG9mIHF1b3Rlc1xuICAgICAgICAuY2F0Y2goXG4gICAgICAgICAgICAoZXJyb3I6IEVycm9yKTogZXhwcmVzcy5SZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuc2VuZCh7XG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBlcnJvcixcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICk7IC8vIEVycm9yIGluIHJlcXVlc3Rcbn07XG5cbmV4cG9ydCBjb25zdCBsb2dvdXQgPSAocmVxOiBSZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UpOiB2b2lkID0+IHtcbiAgICBjb25zdCBwcmV2aW91c1VzZXIgPSByZXEuc2Vzc2lvbi51c2VyO1xuICAgIHJlcS5zZXNzaW9uLnJlc2V0KCk7XG4gICAgcmVzLnN0YXR1cygyMDApLnNlbmQoe1xuICAgICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgICB1c2VyOiBwcmV2aW91c1VzZXIsXG4gICAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgY3VycmVudFVzZXIgPSAocmVxOiBSZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UpOiB2b2lkID0+IHtcbiAgICBpZiAocmVxLnNlc3Npb24udXNlcikge1xuICAgICAgICBkZWxldGUgcmVxLnNlc3Npb24udXNlci5wYXNzd29yZDsgLy8gUmVtb3ZlIHBhc3N3b3JkXG4gICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAgICBsb2dnZWRJbjogdHJ1ZSxcbiAgICAgICAgICAgIHVzZXI6IHJlcS5zZXNzaW9uLnVzZXIsXG4gICAgICAgIH07XG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5zZW5kKGRhdGEpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAgICBsb2dnZWRJbjogZmFsc2UsXG4gICAgICAgIH07XG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5zZW5kKGRhdGEpO1xuICAgIH1cbn07XG4iLCIvLyBBcHBsaWNhdGlvbiBlbnRyeSwgc2V0dGluZyB1cCBzZXJ2ZXJcbmltcG9ydCBhcHAgZnJvbSAnLi9hcHAnOyAvLyBUaGUgZXhwcmVzcyBhcHAgd2UganVzdCBjcmVhdGVkXG5cbmNvbnN0IHBvcnQgPSBwYXJzZUludChwcm9jZXNzLmVudi5QT1JULCAxMCkgfHwgNTAwMDsgLy8gVXNlIHBvcnQgNTAwMFxuYXBwLnNldCgncG9ydCcsIHBvcnQpO1xuXG4vLyAwLjAuMC4wIG1ha2VzIGl0IGF2YWlsYWJsZSBvbiB5b3VyIGxvY2FsIG5ldHdvcmtcbi8vIGFwcC5saXN0ZW4ocG9ydCwgJzAuMC4wLjAnKTtcbmFwcC5saXN0ZW4ocG9ydCk7XG4iLCJpbXBvcnQge1xuICAgIEFsbG93TnVsbCxcbiAgICBCZWxvbmdzVG8sXG4gICAgQ29sdW1uLFxuICAgIENyZWF0ZWRBdCxcbiAgICBGb3JlaWduS2V5LFxuICAgIE1vZGVsLFxuICAgIFRhYmxlLFxuICAgIFVwZGF0ZWRBdCxcbn0gZnJvbSAnc2VxdWVsaXplLXR5cGVzY3JpcHQnO1xuaW1wb3J0IFBvZGNhc3QgZnJvbSAnLi9wb2RjYXN0JztcblxuQFRhYmxlKHsgdGFibGVOYW1lOiAnRXBpc29kZScgfSlcbmNsYXNzIEVwaXNvZGUgZXh0ZW5kcyBNb2RlbDxFcGlzb2RlPiB7XG4gICAgQEFsbG93TnVsbChmYWxzZSlcbiAgICBAQ29sdW1uXG4gICAgdGl0bGU6IHN0cmluZztcblxuICAgIEBDb2x1bW5cbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuXG4gICAgQENvbHVtblxuICAgIHB1YkRhdDogRGF0ZTtcblxuICAgIEBDb2x1bW5cbiAgICBsaW5rOiBzdHJpbmc7XG5cbiAgICBAQ29sdW1uXG4gICAgYXVkaW9MaW5rOiBzdHJpbmc7XG5cbiAgICAvLyBNQVJLOiBPbmUgdG8gTWFueSBQb2RjYXN0XG4gICAgQEZvcmVpZ25LZXkoKCkgPT4gUG9kY2FzdClcbiAgICBAQ29sdW1uXG4gICAgcG9kY2FzdElkOiBudW1iZXI7XG5cbiAgICBAQmVsb25nc1RvKCgpID0+IFBvZGNhc3QpXG4gICAgcG9kY2FzdDogUG9kY2FzdDtcblxuICAgIEBDb2x1bW5cbiAgICB0cmFuc2NyaXB0OiBzdHJpbmc7XG5cbiAgICBAQ3JlYXRlZEF0XG4gICAgY3JlYXRlZEF0OiBEYXRlO1xuXG4gICAgQFVwZGF0ZWRBdFxuICAgIHVwZGF0ZWRBdDogRGF0ZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRXBpc29kZTtcbiIsImltcG9ydCB7XG4gICAgQWxsb3dOdWxsLFxuICAgIENvbHVtbixcbiAgICBDcmVhdGVkQXQsXG4gICAgSGFzTWFueSxcbiAgICBNb2RlbCxcbiAgICBUYWJsZSxcbiAgICBVcGRhdGVkQXQsXG59IGZyb20gJ3NlcXVlbGl6ZS10eXBlc2NyaXB0JztcbmltcG9ydCBQb2RjYXN0IGZyb20gJy4vcG9kY2FzdCc7XG5cbkBUYWJsZSh7IHRhYmxlTmFtZTogJ0dlbnJlJyB9KVxuY2xhc3MgR2VucmUgZXh0ZW5kcyBNb2RlbDxHZW5yZT4ge1xuICAgIEBBbGxvd051bGwoZmFsc2UpXG4gICAgQENvbHVtblxuICAgIG5hbWU6IHN0cmluZztcblxuICAgIEBDb2x1bW5cbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuXG4gICAgQEhhc01hbnkoKCkgPT4gUG9kY2FzdClcbiAgICBwb2RjYXN0czogUG9kY2FzdFtdO1xuXG4gICAgQENyZWF0ZWRBdFxuICAgIGNyZWF0ZWRBdDogRGF0ZTtcblxuICAgIEBVcGRhdGVkQXRcbiAgICB1cGRhdGVkQXQ6IERhdGU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdlbnJlO1xuIiwiaW1wb3J0IHsgU2VxdWVsaXplIH0gZnJvbSAnc2VxdWVsaXplLXR5cGVzY3JpcHQnO1xuaW1wb3J0IEVwaXNvZGUgZnJvbSAnLi9lcGlzb2RlJztcbmltcG9ydCBHZW5yZSBmcm9tICcuL2dlbnJlJztcbmltcG9ydCBQb2RjYXN0IGZyb20gJy4vcG9kY2FzdCc7XG5pbXBvcnQgVXNlciBmcm9tICcuL3VzZXInO1xuXG5pbXBvcnQgbG9nZ2VyID0gcmVxdWlyZSgnaGVyb2t1LWxvZ2dlcicpOyAvLyBGb3IgbG9nZ2luZyB0byB0aGUgbG9nIGhlcm9rdSBsb2cgZmlsZVxuXG5pbXBvcnQgY29uZmlnRmlsZSA9IHJlcXVpcmUoJy4uL2NvbmZpZy9jb25maWcuanNvbicpO1xuXG5kZWNsYXJlIHZhciBwcm9jZXNzOiB7XG4gICAgZW52OiB7XG4gICAgICAgIE5PREVfRU5WOiBzdHJpbmc7XG4gICAgICAgIERBVEFCQVNFX1VSTDogc3RyaW5nO1xuICAgIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCAoKTogdm9pZCA9PiB7XG4gICAgdmFyIGVudiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WIHx8ICdkZXZlbG9wbWVudCc7IC8vIERldGVybWluZSBpZiB1c2luZyBkZXZlbG9wbWVudFxuICAgIC8vIGNvbnN0IF9fZGlybmFtZSA9IHByb2Nlc3MuZW52LlBXRDsgLy8gQ291bGQgYnJlYWsgb24gcHJvZFxuICAgIC8vIGNvbnN0IGN1cnJlbnREaXIgPSBwYXRoLmpvaW4oX19kaXJuYW1lLCAnLi9zZXJ2ZXIvc3JjL21vZGVscycpO1xuXG4gICAgLy8gUmVndWxhciBgbW9kdWxlLmZpbGVuYW1lYCBpcyB1bmRlZmluZWQgaW4gbG9jYWwgZGV2XG4gICAgLy8gY29uc3QgZmlsZW5hbWUgPSBtb2R1bGUuZmlsZW5hbWUgIT09IHVuZGVmaW5lZCA/IG1vZHVsZS5maWxlbmFtZSA6ICdpbmRleC50cyc7XG4gICAgLy8gdmFyIGJhc2VuYW1lID0gcGF0aC5iYXNlbmFtZShmaWxlbmFtZSk7XG5cbiAgICB2YXIgZGI6IGFueSA9IHt9O1xuXG4gICAgLy8gSSB1c2UgdGhlIG5vZGUtY29uZmlnIHBhY2thZ2UgdG8gbWFuYWdlIHRoZSBEQiBjb25maWcgeW91IGNhbiBjaG9vc2VcbiAgICAvLyB0byBzdGljayB3aXRoIHRoZSBvcmlnaW5hbCB2ZXJzaW9uLiBBbmQgSSByZW1vdmVkIGVudmlyb25tZW50IHZhcmlhYmxlXG4gICAgLy8gc3VwcG9ydCBiZWNhdXNlIEkgZG9uJ3QgbmVlZCBpdC5cbiAgICBsZXQgc2VxdWVsaXplOiBhbnkgPSB7fTtcbiAgICBjb25zb2xlLmxvZyhwcm9jZXNzLmVudi5OT0RFX0VOVik7IC8vIFRPRE86IEZvciBzb21lIHJlYXNvbiwgaW4gcHJvZHVjdGlvbiwgdGhpcyByZWFkcyBhcyAnZGV2ZWxvcG1lbnQnXG4gICAgbG9nZ2VyLmluZm8oYHByb2Nlc3MuZW52Lk5PREVfRU5WOiAke3Byb2Nlc3MuZW52Lk5PREVfRU5WfWApO1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgLy8gRnJvbSB0aGUgZW52aXJvbm1lbnQsIGV4dHJhY3QgdGhlIGtleSB3aXRoIHRoZSBuYW1lIHByb3ZpZGVkIGluIHRoZSBjb25maWcgYXMgdXNlX2Vudl92YXJpYWJsZVxuICAgICAgICAvLyBhbmQgdXNlIHRoYXQgdG8gZXN0YWJsaXNoIGEgY29ubmVjdGlvbiB0byBvdXIgZGF0YWJhc2UuXG4gICAgICAgIGNvbnNvbGUubG9nKCdVc2luZyBkYXRhYmFzZSBVUkw6JywgcHJvY2Vzcy5lbnYuREFUQUJBU0VfVVJMKTtcbiAgICAgICAgbG9nZ2VyLmluZm8oJ1VzaW5nIGRhdGFiYXNlIFVSTDonLCB7IHVybDogcHJvY2Vzcy5lbnYuREFUQUJBU0VfVVJMIH0pO1xuICAgICAgICBzZXF1ZWxpemUgPSBuZXcgU2VxdWVsaXplKHByb2Nlc3MuZW52LkRBVEFCQVNFX1VSTCk7IC8vIEVzdGFibGlzaCBjb25uZWN0aW9uIHVzaW5nIGVudmlyb25tZW50IHZhcmlhYmxlc1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBjb25maWcgPSBjb25maWdGaWxlW2Vudl07IC8vIElmIGxvY2FsLCB1c2UgY29uZmlnXG4gICAgICAgIGNvbnNvbGUubG9nKCdVc2luZyBsb2NhbCBjb25maWd1cmF0aW9uOicsIGNvbmZpZyk7XG4gICAgICAgIGxvZ2dlci5pbmZvKCdVc2luZyBsb2NhbCBjb25maWd1cmF0aW9uOicsIHsgY29uZmlnIH0pO1xuICAgICAgICBzZXF1ZWxpemUgPSBuZXcgU2VxdWVsaXplKHtcbiAgICAgICAgICAgIC4uLmNvbmZpZyxcbiAgICAgICAgICAgIC8vIGRhdGFiYXNlOiBjb25maWcuZGF0YWJhc2UsXG4gICAgICAgICAgICAvLyB1c2VybmFtZTogY29uZmlnLnVzZXJuYW1lLFxuICAgICAgICAgICAgLy8gcGFzc3dvcmQ6IGNvbmZpZy5wYXNzd29yZCxcbiAgICAgICAgfSk7IC8vIENvbm5lY3RcbiAgICB9XG5cbiAgICBzZXF1ZWxpemUuYWRkTW9kZWxzKFtQb2RjYXN0LCBFcGlzb2RlLCBHZW5yZSwgVXNlcl0pO1xuICAgIC8vIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PSAncHJvZHVjdGlvbicpIHtcbiAgICAvLyAgICAgc2VxdWVsaXplLnN5bmMoKTsgLy8gRG9uJ3QgY29ycnVwdCBwcm9kdWN0aW9uIGRhdGFcbiAgICAvLyB9IGVsc2Uge1xuICAgIC8vIHNlcXVlbGl6ZS5zeW5jKHsgZm9yY2U6IHRydWUgfSk7IC8vIFRPRE86IFJlbW92ZSBiZWZvcmUgbGl2ZVxuICAgIHNlcXVlbGl6ZS5zeW5jKHsgYWx0ZXI6IHRydWUgfSk7XG4gICAgLy8gc2VxdWVsaXplLnN5bmMoKTtcbiAgICAvLyB9XG5cbiAgICBkYi5zZXF1ZWxpemUgPSBzZXF1ZWxpemU7XG4gICAgZGIuU2VxdWVsaXplID0gU2VxdWVsaXplO1xufTtcbiIsImltcG9ydCB7XG4gICAgQWxsb3dOdWxsLFxuICAgIEJlbG9uZ3NUbyxcbiAgICBDb2x1bW4sXG4gICAgQ3JlYXRlZEF0LFxuICAgIEZvcmVpZ25LZXksXG4gICAgSGFzTWFueSxcbiAgICBNb2RlbCxcbiAgICBUYWJsZSxcbiAgICBVcGRhdGVkQXQsXG59IGZyb20gJ3NlcXVlbGl6ZS10eXBlc2NyaXB0JztcbmltcG9ydCBFcGlzb2RlIGZyb20gJy4vZXBpc29kZSc7XG5pbXBvcnQgR2VucmUgZnJvbSAnLi9nZW5yZSc7XG5cbkBUYWJsZSh7IHRhYmxlTmFtZTogJ1BvZGNhc3QnIH0pXG5jbGFzcyBQb2RjYXN0IGV4dGVuZHMgTW9kZWw8UG9kY2FzdD4ge1xuICAgIEBBbGxvd051bGwoZmFsc2UpXG4gICAgQENvbHVtblxuICAgIG5hbWU6IHN0cmluZztcblxuICAgIEBBbGxvd051bGwoZmFsc2UpXG4gICAgQENvbHVtblxuICAgIGF1dGhvcjogc3RyaW5nO1xuXG4gICAgQENvbHVtblxuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG5cbiAgICBAQ29sdW1uXG4gICAgaW1hZ2U6IHN0cmluZztcblxuICAgIC8vIE1BUks6IEdlbnJlXG4gICAgQEZvcmVpZ25LZXkoKCkgPT4gR2VucmUpXG4gICAgQENvbHVtblxuICAgIGdlbnJlSWQ6IG51bWJlcjtcblxuICAgIEBCZWxvbmdzVG8oKCkgPT4gR2VucmUpXG4gICAgZ2VucmU6IEdlbnJlO1xuXG4gICAgLy8gTUFSSzogRXBpc29kZVxuICAgIEBIYXNNYW55KCgpID0+IEVwaXNvZGUpXG4gICAgZXBpc29kZXM6IEVwaXNvZGVbXTtcblxuICAgIEBDcmVhdGVkQXRcbiAgICBjcmVhdGVkQXQ6IERhdGU7XG5cbiAgICBAVXBkYXRlZEF0XG4gICAgdXBkYXRlZEF0OiBEYXRlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBQb2RjYXN0O1xuIiwiaW1wb3J0IHsgQWxsb3dOdWxsLCBDb2x1bW4sIENyZWF0ZWRBdCwgTW9kZWwsIFRhYmxlLCBVcGRhdGVkQXQgfSBmcm9tICdzZXF1ZWxpemUtdHlwZXNjcmlwdCc7XG5cbkBUYWJsZSh7IHRhYmxlTmFtZTogJ1VzZXInIH0pXG5jbGFzcyBVc2VyIGV4dGVuZHMgTW9kZWw8VXNlcj4ge1xuICAgIEBBbGxvd051bGwoZmFsc2UpXG4gICAgQENvbHVtblxuICAgIHVzZXJuYW1lOiBzdHJpbmc7XG5cbiAgICBAQWxsb3dOdWxsKGZhbHNlKVxuICAgIEBDb2x1bW5cbiAgICBwYXNzd29yZDogc3RyaW5nO1xuXG4gICAgQEFsbG93TnVsbChmYWxzZSlcbiAgICBAQ29sdW1uXG4gICAgZmlyc3ROYW1lOiBzdHJpbmc7XG5cbiAgICBAQWxsb3dOdWxsKGZhbHNlKVxuICAgIEBDb2x1bW5cbiAgICBsYXN0TmFtZTogc3RyaW5nO1xuXG4gICAgQENyZWF0ZWRBdFxuICAgIGNyZWF0ZWRBdDogRGF0ZTtcblxuICAgIEBVcGRhdGVkQXRcbiAgICB1cGRhdGVkQXQ6IERhdGU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXI7XG4iLCIvLyBzZXJ2ZXIvcm91dGVzL2luZGV4LmpzXG4vLyBBUEkgcm91dGUgdGhhdCBtYXBzIGZ1bmN0aW9uYWxpdHlcbmltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgKiBhcyBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IExvZ2luUm91dGVzIGZyb20gJy4vbG9naW5Sb3V0ZXMnO1xuXG4vLyBSZXF1aXJlcyBhbiBhcHAgYXMgYW4gaW5wdXQgc28gY2FuIGRpcmVjdCB0aGUgdXNlciBhY2NvcmRpbmdseVxuY29uc3Qgcm91dGVzID0gKGFwcDogZXhwcmVzcy5BcHBsaWNhdGlvbik6IHZvaWQgPT4ge1xuICAgIC8vIE1vZHVsYXIgcm91dGVzXG4gICAgTG9naW5Sb3V0ZXMoYXBwKTtcblxuICAgIC8vIFNlcnZlIHN0YXRpYyBmaWxlc1xuICAgIGFwcC51c2UoZXhwcmVzcy5zdGF0aWMoJy4vY2xpZW50L2J1aWxkJykpO1xuXG4gICAgYXBwLmdldCgnL2Zhdmljb24ucG5nJywgKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UpOiB2b2lkID0+IHtcbiAgICAgICAgY29uc3QgX19kaXJuYW1lID0gcHJvY2Vzcy5lbnYuUFdEO1xuICAgICAgICByZXMuc2VuZEZpbGUoJ2Zhdmljb24ucG5nJywgeyByb290OiBwYXRoLmpvaW4oX19kaXJuYW1lLCAnLi9jbGllbnQvYXNzZXRzJykgfSk7XG4gICAgfSk7XG5cbiAgICAvLyBDbGllbnQgYXBwIGVudHJ5IGluZGV4Lmh0bWwgZmlsZSAtIHJlYWN0IHJvdXRlclxuICAgIGFwcC5nZXQoJyonLCAocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSk6IHZvaWQgPT4ge1xuICAgICAgICBjb25zdCBfX2Rpcm5hbWUgPSBwcm9jZXNzLmVudi5QV0Q7XG4gICAgICAgIHJlcy5zZW5kRmlsZSgnaW5kZXguaHRtbCcsIHsgcm9vdDogcGF0aC5qb2luKF9fZGlybmFtZSwgJy4vY2xpZW50L2J1aWxkJykgfSk7IC8vIFJlbmRlciBjbGllbnRcbiAgICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJvdXRlcztcbiIsImltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgeyBjdXJyZW50VXNlciwgbGlzdCwgbG9naW4sIGxvZ291dCB9IGZyb20gJy4uL2NvbnRyb2xsZXJzL3VzZXInO1xuXG5leHBvcnQgZGVmYXVsdCAoYXBwOiBleHByZXNzLkFwcGxpY2F0aW9uKTogdm9pZCA9PiB7XG4gICAgYXBwLmdldCgnL2FwaS91c2VycycsIGxpc3QpO1xuICAgIGFwcC5wb3N0KCcvYXBpL2xvZ2luJywgbG9naW4pO1xuICAgIGFwcC5nZXQoJy9hcGkvbG9nb3V0JywgbG9nb3V0KTtcbiAgICBhcHAuZ2V0KCcvYXBpL3VzZXJzL2N1cnJlbnQnLCBjdXJyZW50VXNlcik7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYmFiZWwtcG9seWZpbGxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYm9keS1wYXJzZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY2xpZW50LXNlc3Npb25zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImRvdGVudlwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3MtcXVlcnktaW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImhlcm9rdS1sb2dnZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9yZ2FuXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2VxdWVsaXplLXR5cGVzY3JpcHRcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==