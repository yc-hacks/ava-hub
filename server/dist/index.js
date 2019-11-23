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
const security_1 = __webpack_require__(/*! ./config/security */ "./server/src/config/security.ts");
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
security_1.default(app);
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

/***/ "./server/src/config/security.ts":
/*!***************************************!*\
  !*** ./server/src/config/security.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const authorization = __webpack_require__(/*! auth-header */ "auth-header");
const buffer_1 = __webpack_require__(/*! buffer */ "buffer");
const logger = __webpack_require__(/*! heroku-logger */ "heroku-logger");
const validIPs = [
    '::ffff:127.0.0.1',
    '127.0.0.1',
    '::1',
];
const validReferers = ['(https?://)?localhost:3000.*'];
const validURLs = new RegExp(validReferers.join('|'), 'i');
const validPages = ['/', '/favicon.ico', '/scripts/index.js'];
const blacklist = /\/api.*/;
const unauthorizedResponse = (res) => {
    res.status(401).send('Request failed: Bad authentication');
};
const security = (app) => {
    app.use((req, res, next) => {
        const inWhitelist = validPages.indexOf(req.originalUrl) > -1;
        if (!inWhitelist || blacklist.test(req.originalUrl)) {
            const ip = (req.headers['x-forwarded-for'] ||
                req.connection.remoteAddress ||
                req.ip);
            const referer = req.header('Referer');
            console.log('IP: ', ip);
            if (validIPs.indexOf(ip) > -1) {
                console.log(ip, 'is a whitelisted IP');
                logger.info('Whitelisted IP', { ip: ip });
                next();
            }
            else if (referer && validURLs.test(referer)) {
                logger.info('Whitelisted Referer', { referer: referer });
                next();
            }
            else {
                const authHeader = req.header['authorization']
                    ? req.header['authorization']
                    : req.headers['authorization'];
                if (!authHeader) {
                    res.set('WWW-Authenticate', 'Basic realm="Authorization Required"');
                    logger.error('No Authentication', {
                        ip: ip,
                        referer: referer,
                        url: req.originalUrl,
                    });
                    return unauthorizedResponse(res);
                }
                const auth = authorization.parse(authHeader);
                const [un, pw] = new buffer_1.Buffer(auth.token, 'base64').toString().split(':', 2);
                if (un !== 'admin' || pw !== process.env.ADMIN_API_KEY) {
                    logger.error('Unauthorized Credentials', { username: un, password: pw });
                    return unauthorizedResponse(res);
                }
                logger.info('User Authenticated', { username: un, password: pw });
                next();
            }
        }
        else {
            logger.info('Whitelist or not in blacklist', { url: req.originalUrl });
            next();
        }
    });
};
exports.default = security;


/***/ }),

/***/ "./server/src/controllers/user/index.ts":
/*!**********************************************!*\
  !*** ./server/src/controllers/user/index.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const logger = __webpack_require__(/*! heroku-logger */ "heroku-logger");
const episode_1 = __webpack_require__(/*! ../../models/episode */ "./server/src/models/episode.ts");
exports.getUser = (req, res) => {
    const { id } = req.params;
    return episode_1.default.findById(id)
        .then((user) => res.status(200).send(user))
        .catch((error) => res.status(400).send(error));
};
exports.testNest = (req, res) => {
    logger.log(req.body);
    return {
        test: 'Hello',
    };
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
    sequelize.addModels([podcast_1.default, episode_1.default, genre_1.default]);
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

/***/ "./server/src/routes/exampleRoutes.ts":
/*!********************************************!*\
  !*** ./server/src/routes/exampleRoutes.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = __webpack_require__(/*! ../controllers/user */ "./server/src/controllers/user/index.ts");
exports.default = (app) => {
    app.get('/api/user/:id', user_1.getUser);
    app.post('/api/nest', user_1.testNest);
};


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
const exampleRoutes_1 = __webpack_require__(/*! ./exampleRoutes */ "./server/src/routes/exampleRoutes.ts");
const routes = (app) => {
    exampleRoutes_1.default(app);
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

/***/ 0:
/*!**************************************************!*\
  !*** multi babel-polyfill ./server/src/index.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! babel-polyfill */"babel-polyfill");
module.exports = __webpack_require__(/*! ./server/src/index.ts */"./server/src/index.ts");


/***/ }),

/***/ "auth-header":
/*!******************************!*\
  !*** external "auth-header" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("auth-header");

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

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("buffer");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NyYy9hcHAudHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NyYy9jb25maWcvc2VjdXJpdHkudHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NyYy9jb250cm9sbGVycy91c2VyL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NlcnZlci9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NyYy9tb2RlbHMvZXBpc29kZS50cyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvc3JjL21vZGVscy9nZW5yZS50cyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvc3JjL21vZGVscy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvc3JjL21vZGVscy9wb2RjYXN0LnRzIiwid2VicGFjazovLy8uL3NlcnZlci9zcmMvcm91dGVzL2V4YW1wbGVSb3V0ZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NyYy9yb3V0ZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXV0aC1oZWFkZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiYWJlbC1wb2x5ZmlsbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImJvZHktcGFyc2VyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYnVmZmVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZG90ZW52XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXhwcmVzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3MtcXVlcnktaW50XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaGVyb2t1LWxvZ2dlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vcmdhblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInBhdGhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzZXF1ZWxpemUtdHlwZXNjcmlwdFwiIl0sIm5h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LEVBQUUsR0FBcUIsRUFBUSxFQUFFO1FBQzFFLE1BQU0sU0FBUyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDO1FBQ2xDLEdBQUcsQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLGlCQUFpQixDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ25GLENBQUMsQ0FBQyxDQUFDO0lBR0gsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFvQixFQUFFLEdBQXFCLEVBQVEsRUFBRTtRQUMvRCxNQUFNLFNBQVMsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQztRQUNsQyxHQUFHLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxnQkFBZ0IsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNqRixDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQztBQUVGLGtCQUFlLE1BQU0sQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFCdEIsd0M7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsb0M7Ozs7Ozs7Ozs7O0FDQUEsOEM7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsaUM7Ozs7Ozs7Ozs7O0FDQUEsaUQiLCJmaWxlIjoiZGlzdC9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgc2VjdXJpdHkgZnJvbSAnLi9jb25maWcvc2VjdXJpdHknO1xuaW1wb3J0IGluaXRpYWxpemUgZnJvbSAnLi9tb2RlbHMnO1xuaW1wb3J0IHJvdXRlcyBmcm9tICcuL3JvdXRlcyc7XG5cbmltcG9ydCBsb2dnZXIgPSByZXF1aXJlKCdtb3JnYW4nKTtcbmNvbnN0IGJvZHlQYXJzZXIgPSByZXF1aXJlKCdib2R5LXBhcnNlcicpO1xuaW1wb3J0IHBhdGggPSByZXF1aXJlKCdwYXRoJyk7XG5cbi8vIENvbmZpZ3VyZSBkb3RlbnYgdG8gbG9hZCBpbiB0aGUgLmVudiBmaWxlXG5pbXBvcnQgZG90ZW52ID0gcmVxdWlyZSgnZG90ZW52Jyk7XG5jb25zdCByZXN1bHQgPSBkb3RlbnYuY29uZmlnKCk7XG5cbmNvbnN0IF9fZGlybmFtZSA9IHByb2Nlc3MuZW52LlBXRDsgLy8gQ291bGQgYnJlYWsgb24gcHJvZFxuXG5jb25zdCBhcHAgPSBleHByZXNzKCk7IC8vIFNldHVwIGV4cHJlc3MgYXBwXG5cbi8vIEFsbG93IGNyb3NzIG9yaWdpbiByZXF1ZXN0cyB3aXRoIGF1dGhvcml6YXRpb24gKGZvciBBUEkgcHVycG9zZXMpXG5hcHAuYWxsKCcqJywgKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UsIG5leHQ6IGV4cHJlc3MuTmV4dEZ1bmN0aW9uKTogdm9pZCA9PiB7XG4gICAgcmVzLmhlYWRlcignQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJywgJyonKTtcbiAgICByZXMuaGVhZGVyKCdBY2Nlc3MtQ29udHJvbC1BbGxvdy1NZXRob2RzJywgJ1BVVCwgR0VULCBQT1NULCBERUxFVEUsIE9QVElPTlMnKTtcbiAgICByZXMuaGVhZGVyKCdBY2Nlc3MtQ29udHJvbC1BbGxvdy1DcmVkZW50aWFscycsICd0cnVlJyk7XG4gICAgcmVzLmhlYWRlcignQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJywgYCR7cmVxLmhlYWRlcnMub3JpZ2lufWApO1xuICAgIHJlcy5oZWFkZXIoXG4gICAgICAgICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1IZWFkZXJzJyxcbiAgICAgICAgJ2FjY2VwdCwgY29udGVudC10eXBlLCB4LXBhcnNlLWFwcGxpY2F0aW9uLWlkLCB4LXBhcnNlLXJlc3QtYXBpLWtleSwgeC1wYXJzZS1zZXNzaW9uLXRva2VuLCBBVVRIT1JJWkFUSU9OJyxcbiAgICApO1xuICAgIC8vIEludGVyY2VwdCBPUFRJT05TIG1ldGhvZFxuICAgIGlmICgnT1BUSU9OUycgPT0gcmVxLm1ldGhvZCkge1xuICAgICAgICByZXMuc2VuZCgyMDApO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG5leHQoKTtcbiAgICB9XG59KTtcblxuLy8gU2V0dXAgYXV0aGVudGljYXRpb24gYW5kIHNlY3VyaXR5XG5zZWN1cml0eShhcHApO1xuaW5pdGlhbGl6ZSgpO1xuXG4vLyBMb2cgcmVxdWVzdHMgdG8gdGhlIGNvbnNvbGUuXG5hcHAudXNlKGxvZ2dlcignZGV2JykpO1xuXG4vLyBQYXJzZSBpbmNvbWluZyByZXF1ZXN0cyBkYXRhIChodHRwczovL2dpdGh1Yi5jb20vZXhwcmVzc2pzL2JvZHktcGFyc2VyKVxuLy8gICsgaW5jcmVhc2luZyBib2R5IHJlcXVlc3QgbGltaXQgc2l6ZVxuYXBwLnVzZShib2R5UGFyc2VyLmpzb24oeyBsaW1pdDogJzE1bWInLCBleHRlbmRlZDogdHJ1ZSB9KSk7XG5hcHAudXNlKGJvZHlQYXJzZXIudXJsZW5jb2RlZCh7IGxpbWl0OiAnMTVtYicsIGV4dGVuZGVkOiB0cnVlIH0pKTtcblxuLy8gUGFyc2UgcXVlcmllcyBpbnRvIG51bWJlcnMsIG5vdCBzdHJpbmdzXG52YXIgcXVlcnlQYXJzZXIgPSByZXF1aXJlKCdleHByZXNzLXF1ZXJ5LWludCcpO1xuYXBwLnVzZShib2R5UGFyc2VyLmpzb24oKSk7XG5hcHAudXNlKHF1ZXJ5UGFyc2VyKCkpO1xuXG5hcHAudXNlKCcvc2NyaXB0cycsIGV4cHJlc3Muc3RhdGljKHBhdGguam9pbihfX2Rpcm5hbWUsICcuLi8uLi9jbGllbnQvZGlzdCcpKSk7XG5cbi8vIFJlcXVpcmUgcm91dGVzIGFuZCBzaW11bHRhbmVvdXNseSBhdHRhY2ggYXBwXG5yb3V0ZXMoYXBwKTtcblxuLy8gQ2F0Y2ggYWxsIGlmIHRoZSByb3V0ZXMgZG9lc24ndCBmaW5kIGEgdmFsaWQgVVJMXG5hcHAuZ2V0KFxuICAgICcqJyxcbiAgICAocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSk6IGV4cHJlc3MuUmVzcG9uc2UgPT5cbiAgICAgICAgcmVzLnN0YXR1cygyMDApLnNlbmQoe1xuICAgICAgICAgICAgbWVzc2FnZTogJ0ZvciBzb21lIHJlYXNvbiwgbm9uZSBvZiB0aGUgcm91dGVzIGhpdC4uLicsXG4gICAgICAgIH0pLFxuKTtcblxuZXhwb3J0IGRlZmF1bHQgYXBwO1xuIiwiaW1wb3J0ICogYXMgYXV0aG9yaXphdGlvbiBmcm9tICdhdXRoLWhlYWRlcic7IC8vIEZvciBwYXJzaW5nIGF1dGhlbnRpY2F0aW9uXG5pbXBvcnQgeyBCdWZmZXIgfSBmcm9tICdidWZmZXInO1xuaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbmltcG9ydCAqIGFzIGxvZ2dlciBmcm9tICdoZXJva3UtbG9nZ2VyJzsgLy8gRm9yIGxvZ2dpbmcgdG8gdGhlIGxvZyBoZXJva3UgbG9nIGZpbGVcblxuLy8gV2hpdGVsaXN0ZWQgSVBzXG5jb25zdCB2YWxpZElQcyA9IFtcbiAgICAnOjpmZmZmOjEyNy4wLjAuMScsIC8vIExvY2FsIGhvc3RcbiAgICAnMTI3LjAuMC4xJywgLy8gSVB2NCAtIGxvY2FsaG9zdCAoPylcbiAgICAnOjoxJywgLy8gSVB2NlxuXTtcblxuLy8gV2hpdGVsaXN0ZWQgdXJsc1xuY29uc3QgdmFsaWRSZWZlcmVycyA9IFsnKGh0dHBzPzovLyk/bG9jYWxob3N0OjMwMDAuKiddO1xuY29uc3QgdmFsaWRVUkxzID0gbmV3IFJlZ0V4cCh2YWxpZFJlZmVyZXJzLmpvaW4oJ3wnKSwgJ2knKTsgLy8gQ29udmVydCB0byByZWd1bGFyIGV4cHJlc3Npb25cblxuLy8gV2hpdGVsaXN0ZWQgYXNzZXRzIC0gYWxyZWFkeSBub3QgaW4gdGhlIGJsYWNrbGlzdCBzbyBub3QgZW50aXJlbHkgbmVjY2Vzc2FyeSBhbnltb3JlXG5jb25zdCB2YWxpZFBhZ2VzID0gWycvJywgJy9mYXZpY29uLmljbycsICcvc2NyaXB0cy9pbmRleC5qcyddO1xuXG4vLyBBbnkgcm91dGUgaW4gdGhlIGJsYWNrbGlzdCB3aWxsIHJlcXVpcmUgYXV0aGVudGljYXRpb25cbmNvbnN0IGJsYWNrbGlzdCA9IC9cXC9hcGkuKi87IC8vIEp1c3QgQVBJc1xuXG4vLyBIYW5kbGUgNDAxIGVycm9yIGNvZGUgLSBVbmF1dGhvcml6ZWRcbmNvbnN0IHVuYXV0aG9yaXplZFJlc3BvbnNlID0gKHJlczogZXhwcmVzcy5SZXNwb25zZSk6IHZvaWQgPT4ge1xuICAgIHJlcy5zdGF0dXMoNDAxKS5zZW5kKCdSZXF1ZXN0IGZhaWxlZDogQmFkIGF1dGhlbnRpY2F0aW9uJyk7XG59O1xuXG5jb25zdCBzZWN1cml0eSA9IChhcHApOiB2b2lkID0+IHtcbiAgICAvLyBTa2lwIHdoaXRlbGlzdGVkIGRvbWFpbnNcbiAgICBhcHAudXNlKChyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlLCBuZXh0OiBleHByZXNzLk5leHRGdW5jdGlvbik6IHZvaWQgPT4ge1xuICAgICAgICAvLyBSZXF1aXJlIGF1dGhlbnRpY2F0aW9uIGlmIG5vdCBpbiB0aGUgd2hpdGVsaXN0IG9yIGlzIGluIGJsYWNrbGlzdFxuICAgICAgICBjb25zdCBpbldoaXRlbGlzdCA9IHZhbGlkUGFnZXMuaW5kZXhPZihyZXEub3JpZ2luYWxVcmwpID4gLTE7XG4gICAgICAgIGlmICghaW5XaGl0ZWxpc3QgfHwgYmxhY2tsaXN0LnRlc3QocmVxLm9yaWdpbmFsVXJsKSkge1xuICAgICAgICAgICAgLy8gR2V0IHRoZSBJUCBhZGRyZXNzXG4gICAgICAgICAgICBjb25zdCBpcDogc3RyaW5nID0gKHJlcS5oZWFkZXJzWyd4LWZvcndhcmRlZC1mb3InXSB8fFxuICAgICAgICAgICAgICAgIHJlcS5jb25uZWN0aW9uLnJlbW90ZUFkZHJlc3MgfHxcbiAgICAgICAgICAgICAgICByZXEuaXApIGFzIHN0cmluZztcbiAgICAgICAgICAgIGNvbnN0IHJlZmVyZXIgPSByZXEuaGVhZGVyKCdSZWZlcmVyJyk7IC8vIElmIHRoZSByZXF1ZXN0IGlzIGJlaW5nIHNlbnQgYnkgYSB3ZWJzaXRlXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnSVA6ICcsIGlwKTtcbiAgICAgICAgICAgIGlmICh2YWxpZElQcy5pbmRleE9mKGlwKSA+IC0xKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coaXAsICdpcyBhIHdoaXRlbGlzdGVkIElQJyk7XG4gICAgICAgICAgICAgICAgbG9nZ2VyLmluZm8oJ1doaXRlbGlzdGVkIElQJywgeyBpcDogaXAgfSk7XG4gICAgICAgICAgICAgICAgbmV4dCgpOyAvLyBSZXF1ZXN0IHZhbGlkXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlZmVyZXIgJiYgdmFsaWRVUkxzLnRlc3QocmVmZXJlcikpIHtcbiAgICAgICAgICAgICAgICBsb2dnZXIuaW5mbygnV2hpdGVsaXN0ZWQgUmVmZXJlcicsIHsgcmVmZXJlcjogcmVmZXJlciB9KTtcbiAgICAgICAgICAgICAgICBuZXh0KCk7IC8vIFJlcXVlc3QgdmFsaWRcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gbG9nZ2VyLmluZm8oXCJDaGVja2luZyBhdXRob3JpemF0aW9uLi4uXCIpXG4gICAgICAgICAgICAgICAgY29uc3QgYXV0aEhlYWRlciA9IHJlcS5oZWFkZXJbJ2F1dGhvcml6YXRpb24nXVxuICAgICAgICAgICAgICAgICAgICA/IHJlcS5oZWFkZXJbJ2F1dGhvcml6YXRpb24nXVxuICAgICAgICAgICAgICAgICAgICA6IHJlcS5oZWFkZXJzWydhdXRob3JpemF0aW9uJ107XG5cbiAgICAgICAgICAgICAgICAvLyBGYWlsIGlmIG5vIGJhc2ljIGF1dGhlbnRpY2F0aW9uIHByb3ZpZGVkXG4gICAgICAgICAgICAgICAgaWYgKCFhdXRoSGVhZGVyKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIE5vIGF1dGhvcml6YXRpb25cbiAgICAgICAgICAgICAgICAgICAgcmVzLnNldCgnV1dXLUF1dGhlbnRpY2F0ZScsICdCYXNpYyByZWFsbT1cIkF1dGhvcml6YXRpb24gUmVxdWlyZWRcIicpOyAvLyBQcm9tcHQgY2hhbGxlbmdlIHBhc3N3b3JkXG4gICAgICAgICAgICAgICAgICAgIGxvZ2dlci5lcnJvcignTm8gQXV0aGVudGljYXRpb24nLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpcDogaXAsXG4gICAgICAgICAgICAgICAgICAgICAgICByZWZlcmVyOiByZWZlcmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiByZXEub3JpZ2luYWxVcmwsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdW5hdXRob3JpemVkUmVzcG9uc2UocmVzKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBSZXRyZWl2ZSBhdXRob3JpemF0aW9uIHRva2VuXG4gICAgICAgICAgICAgICAgY29uc3QgYXV0aCA9IGF1dGhvcml6YXRpb24ucGFyc2UoYXV0aEhlYWRlcik7XG5cbiAgICAgICAgICAgICAgICAvLyBHZXQgdGhlIGJhc2ljIGF1dGggY29tcG9uZW50XG4gICAgICAgICAgICAgICAgY29uc3QgW3VuLCBwd10gPSBuZXcgQnVmZmVyKGF1dGgudG9rZW4sICdiYXNlNjQnKS50b1N0cmluZygpLnNwbGl0KCc6JywgMik7XG5cbiAgICAgICAgICAgICAgICAvLyBWZXJpZnkgYXV0aGVudGljYXRpb24uXG4gICAgICAgICAgICAgICAgaWYgKHVuICE9PSAnYWRtaW4nIHx8IHB3ICE9PSBwcm9jZXNzLmVudi5BRE1JTl9BUElfS0VZKSB7XG4gICAgICAgICAgICAgICAgICAgIGxvZ2dlci5lcnJvcignVW5hdXRob3JpemVkIENyZWRlbnRpYWxzJywgeyB1c2VybmFtZTogdW4sIHBhc3N3b3JkOiBwdyB9KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVuYXV0aG9yaXplZFJlc3BvbnNlKHJlcyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbG9nZ2VyLmluZm8oJ1VzZXIgQXV0aGVudGljYXRlZCcsIHsgdXNlcm5hbWU6IHVuLCBwYXNzd29yZDogcHcgfSk7XG4gICAgICAgICAgICAgICAgbmV4dCgpOyAvLyBSZXF1ZXN0IHZhbGlkXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBTa2lwIGF1dGhlbnRpY2F0aW9uXG4gICAgICAgICAgICBsb2dnZXIuaW5mbygnV2hpdGVsaXN0IG9yIG5vdCBpbiBibGFja2xpc3QnLCB7IHVybDogcmVxLm9yaWdpbmFsVXJsIH0pO1xuICAgICAgICAgICAgbmV4dCgpO1xuICAgICAgICB9XG4gICAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzZWN1cml0eTtcbiIsImltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgKiBhcyBsb2dnZXIgZnJvbSAnaGVyb2t1LWxvZ2dlcic7IC8vIEZvciBsb2dnaW5nIHRvIHRoZSBsb2cgaGVyb2t1IGxvZyBmaWxlXG5pbXBvcnQgVXNlciBmcm9tICcuLi8uLi9tb2RlbHMvZXBpc29kZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXNlckdldFJlcXVlc3QgZXh0ZW5kcyBleHByZXNzLlJlcXVlc3Qge1xuICAgIGlkOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRVc2VyID0gKHJlcTogVXNlckdldFJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSk6IGFueSA9PiB7XG4gICAgY29uc3QgeyBpZCB9ID0gcmVxLnBhcmFtcztcbiAgICByZXR1cm4gVXNlci5maW5kQnlJZChpZClcbiAgICAgICAgLnRoZW4oKHVzZXI6IFVzZXIpOiBleHByZXNzLlJlc3BvbnNlID0+IHJlcy5zdGF0dXMoMjAwKS5zZW5kKHVzZXIpKVxuICAgICAgICAuY2F0Y2goKGVycm9yOiBFcnJvcik6IGV4cHJlc3MuUmVzcG9uc2UgPT4gcmVzLnN0YXR1cyg0MDApLnNlbmQoZXJyb3IpKTsgLy8gRXJyb3Jcbn07XG5cbmV4cG9ydCBjb25zdCB0ZXN0TmVzdCA9IChyZXE6IFVzZXJHZXRSZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UpOiBhbnkgPT4ge1xuICAgIGxvZ2dlci5sb2cocmVxLmJvZHkpO1xuICAgIHJldHVybiB7XG4gICAgICAgIHRlc3Q6ICdIZWxsbycsXG4gICAgfTtcbn07XG4iLCIvLyBBcHBsaWNhdGlvbiBlbnRyeSwgc2V0dGluZyB1cCBzZXJ2ZXJcbmltcG9ydCBhcHAgZnJvbSAnLi9hcHAnOyAvLyBUaGUgZXhwcmVzcyBhcHAgd2UganVzdCBjcmVhdGVkXG5cbmNvbnN0IHBvcnQgPSBwYXJzZUludChwcm9jZXNzLmVudi5QT1JULCAxMCkgfHwgNTAwMDsgLy8gVXNlIHBvcnQgNTAwMFxuYXBwLnNldCgncG9ydCcsIHBvcnQpO1xuXG4vLyAwLjAuMC4wIG1ha2VzIGl0IGF2YWlsYWJsZSBvbiB5b3VyIGxvY2FsIG5ldHdvcmtcbi8vIGFwcC5saXN0ZW4ocG9ydCwgJzAuMC4wLjAnKTtcbmFwcC5saXN0ZW4ocG9ydCk7XG4iLCJpbXBvcnQge1xuICAgIEFsbG93TnVsbCxcbiAgICBCZWxvbmdzVG8sXG4gICAgQ29sdW1uLFxuICAgIENyZWF0ZWRBdCxcbiAgICBGb3JlaWduS2V5LFxuICAgIE1vZGVsLFxuICAgIFRhYmxlLFxuICAgIFVwZGF0ZWRBdCxcbn0gZnJvbSAnc2VxdWVsaXplLXR5cGVzY3JpcHQnO1xuaW1wb3J0IFBvZGNhc3QgZnJvbSAnLi9wb2RjYXN0JztcblxuQFRhYmxlKHsgdGFibGVOYW1lOiAnRXBpc29kZScgfSlcbmNsYXNzIEVwaXNvZGUgZXh0ZW5kcyBNb2RlbDxFcGlzb2RlPiB7XG4gICAgQEFsbG93TnVsbChmYWxzZSlcbiAgICBAQ29sdW1uXG4gICAgdGl0bGU6IHN0cmluZztcblxuICAgIEBDb2x1bW5cbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuXG4gICAgQENvbHVtblxuICAgIHB1YkRhdDogRGF0ZTtcblxuICAgIEBDb2x1bW5cbiAgICBsaW5rOiBzdHJpbmc7XG5cbiAgICBAQ29sdW1uXG4gICAgYXVkaW9MaW5rOiBzdHJpbmc7XG5cbiAgICAvLyBNQVJLOiBPbmUgdG8gTWFueSBQb2RjYXN0XG4gICAgQEZvcmVpZ25LZXkoKCkgPT4gUG9kY2FzdClcbiAgICBAQ29sdW1uXG4gICAgcG9kY2FzdElkOiBudW1iZXI7XG5cbiAgICBAQmVsb25nc1RvKCgpID0+IFBvZGNhc3QpXG4gICAgcG9kY2FzdDogUG9kY2FzdDtcblxuICAgIEBDb2x1bW5cbiAgICB0cmFuc2NyaXB0OiBzdHJpbmc7XG5cbiAgICBAQ3JlYXRlZEF0XG4gICAgY3JlYXRlZEF0OiBEYXRlO1xuXG4gICAgQFVwZGF0ZWRBdFxuICAgIHVwZGF0ZWRBdDogRGF0ZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRXBpc29kZTtcbiIsImltcG9ydCB7XG4gICAgQWxsb3dOdWxsLFxuICAgIENvbHVtbixcbiAgICBDcmVhdGVkQXQsXG4gICAgSGFzTWFueSxcbiAgICBNb2RlbCxcbiAgICBUYWJsZSxcbiAgICBVcGRhdGVkQXQsXG59IGZyb20gJ3NlcXVlbGl6ZS10eXBlc2NyaXB0JztcbmltcG9ydCBQb2RjYXN0IGZyb20gJy4vcG9kY2FzdCc7XG5cbkBUYWJsZSh7IHRhYmxlTmFtZTogJ0dlbnJlJyB9KVxuY2xhc3MgR2VucmUgZXh0ZW5kcyBNb2RlbDxHZW5yZT4ge1xuICAgIEBBbGxvd051bGwoZmFsc2UpXG4gICAgQENvbHVtblxuICAgIG5hbWU6IHN0cmluZztcblxuICAgIEBDb2x1bW5cbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuXG4gICAgQEhhc01hbnkoKCkgPT4gUG9kY2FzdClcbiAgICBwb2RjYXN0czogUG9kY2FzdFtdO1xuXG4gICAgQENyZWF0ZWRBdFxuICAgIGNyZWF0ZWRBdDogRGF0ZTtcblxuICAgIEBVcGRhdGVkQXRcbiAgICB1cGRhdGVkQXQ6IERhdGU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdlbnJlO1xuIiwiaW1wb3J0IHsgU2VxdWVsaXplIH0gZnJvbSAnc2VxdWVsaXplLXR5cGVzY3JpcHQnO1xuaW1wb3J0IEVwaXNvZGUgZnJvbSAnLi9lcGlzb2RlJztcbmltcG9ydCBHZW5yZSBmcm9tICcuL2dlbnJlJztcbmltcG9ydCBQb2RjYXN0IGZyb20gJy4vcG9kY2FzdCc7XG5cbmltcG9ydCBsb2dnZXIgPSByZXF1aXJlKCdoZXJva3UtbG9nZ2VyJyk7IC8vIEZvciBsb2dnaW5nIHRvIHRoZSBsb2cgaGVyb2t1IGxvZyBmaWxlXG5cbmltcG9ydCBjb25maWdGaWxlID0gcmVxdWlyZSgnLi4vY29uZmlnL2NvbmZpZy5qc29uJyk7XG5cbmRlY2xhcmUgdmFyIHByb2Nlc3M6IHtcbiAgICBlbnY6IHtcbiAgICAgICAgTk9ERV9FTlY6IHN0cmluZztcbiAgICAgICAgREFUQUJBU0VfVVJMOiBzdHJpbmc7XG4gICAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0ICgpOiB2b2lkID0+IHtcbiAgICB2YXIgZW52ID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgfHwgJ2RldmVsb3BtZW50JzsgLy8gRGV0ZXJtaW5lIGlmIHVzaW5nIGRldmVsb3BtZW50XG4gICAgLy8gY29uc3QgX19kaXJuYW1lID0gcHJvY2Vzcy5lbnYuUFdEOyAvLyBDb3VsZCBicmVhayBvbiBwcm9kXG4gICAgLy8gY29uc3QgY3VycmVudERpciA9IHBhdGguam9pbihfX2Rpcm5hbWUsICcuL3NlcnZlci9zcmMvbW9kZWxzJyk7XG5cbiAgICAvLyBSZWd1bGFyIGBtb2R1bGUuZmlsZW5hbWVgIGlzIHVuZGVmaW5lZCBpbiBsb2NhbCBkZXZcbiAgICAvLyBjb25zdCBmaWxlbmFtZSA9IG1vZHVsZS5maWxlbmFtZSAhPT0gdW5kZWZpbmVkID8gbW9kdWxlLmZpbGVuYW1lIDogJ2luZGV4LnRzJztcbiAgICAvLyB2YXIgYmFzZW5hbWUgPSBwYXRoLmJhc2VuYW1lKGZpbGVuYW1lKTtcblxuICAgIHZhciBkYjogYW55ID0ge307XG5cbiAgICAvLyBJIHVzZSB0aGUgbm9kZS1jb25maWcgcGFja2FnZSB0byBtYW5hZ2UgdGhlIERCIGNvbmZpZyB5b3UgY2FuIGNob29zZVxuICAgIC8vIHRvIHN0aWNrIHdpdGggdGhlIG9yaWdpbmFsIHZlcnNpb24uIEFuZCBJIHJlbW92ZWQgZW52aXJvbm1lbnQgdmFyaWFibGVcbiAgICAvLyBzdXBwb3J0IGJlY2F1c2UgSSBkb24ndCBuZWVkIGl0LlxuICAgIGxldCBzZXF1ZWxpemU6IGFueSA9IHt9O1xuICAgIGNvbnNvbGUubG9nKHByb2Nlc3MuZW52Lk5PREVfRU5WKTsgLy8gVE9ETzogRm9yIHNvbWUgcmVhc29uLCBpbiBwcm9kdWN0aW9uLCB0aGlzIHJlYWRzIGFzICdkZXZlbG9wbWVudCdcbiAgICBsb2dnZXIuaW5mbyhgcHJvY2Vzcy5lbnYuTk9ERV9FTlY6ICR7cHJvY2Vzcy5lbnYuTk9ERV9FTlZ9YCk7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAvLyBGcm9tIHRoZSBlbnZpcm9ubWVudCwgZXh0cmFjdCB0aGUga2V5IHdpdGggdGhlIG5hbWUgcHJvdmlkZWQgaW4gdGhlIGNvbmZpZyBhcyB1c2VfZW52X3ZhcmlhYmxlXG4gICAgICAgIC8vIGFuZCB1c2UgdGhhdCB0byBlc3RhYmxpc2ggYSBjb25uZWN0aW9uIHRvIG91ciBkYXRhYmFzZS5cbiAgICAgICAgY29uc29sZS5sb2coJ1VzaW5nIGRhdGFiYXNlIFVSTDonLCBwcm9jZXNzLmVudi5EQVRBQkFTRV9VUkwpO1xuICAgICAgICBsb2dnZXIuaW5mbygnVXNpbmcgZGF0YWJhc2UgVVJMOicsIHsgdXJsOiBwcm9jZXNzLmVudi5EQVRBQkFTRV9VUkwgfSk7XG4gICAgICAgIHNlcXVlbGl6ZSA9IG5ldyBTZXF1ZWxpemUocHJvY2Vzcy5lbnYuREFUQUJBU0VfVVJMKTsgLy8gRXN0YWJsaXNoIGNvbm5lY3Rpb24gdXNpbmcgZW52aXJvbm1lbnQgdmFyaWFibGVzXG4gICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGNvbmZpZyA9IGNvbmZpZ0ZpbGVbZW52XTsgLy8gSWYgbG9jYWwsIHVzZSBjb25maWdcbiAgICAgICAgY29uc29sZS5sb2coJ1VzaW5nIGxvY2FsIGNvbmZpZ3VyYXRpb246JywgY29uZmlnKTtcbiAgICAgICAgbG9nZ2VyLmluZm8oJ1VzaW5nIGxvY2FsIGNvbmZpZ3VyYXRpb246JywgeyBjb25maWcgfSk7XG4gICAgICAgIHNlcXVlbGl6ZSA9IG5ldyBTZXF1ZWxpemUoe1xuICAgICAgICAgICAgLi4uY29uZmlnLFxuICAgICAgICAgICAgLy8gZGF0YWJhc2U6IGNvbmZpZy5kYXRhYmFzZSxcbiAgICAgICAgICAgIC8vIHVzZXJuYW1lOiBjb25maWcudXNlcm5hbWUsXG4gICAgICAgICAgICAvLyBwYXNzd29yZDogY29uZmlnLnBhc3N3b3JkLFxuICAgICAgICB9KTsgLy8gQ29ubmVjdFxuICAgIH1cblxuICAgIHNlcXVlbGl6ZS5hZGRNb2RlbHMoW1BvZGNhc3QsIEVwaXNvZGUsIEdlbnJlXSk7XG4gICAgLy8gaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09ICdwcm9kdWN0aW9uJykge1xuICAgIC8vICAgICBzZXF1ZWxpemUuc3luYygpOyAvLyBEb24ndCBjb3JydXB0IHByb2R1Y3Rpb24gZGF0YVxuICAgIC8vIH0gZWxzZSB7XG4gICAgLy8gc2VxdWVsaXplLnN5bmMoeyBmb3JjZTogdHJ1ZSB9KTsgLy8gVE9ETzogUmVtb3ZlIGJlZm9yZSBsaXZlXG4gICAgc2VxdWVsaXplLnN5bmMoeyBhbHRlcjogdHJ1ZSB9KTtcbiAgICAvLyBzZXF1ZWxpemUuc3luYygpO1xuICAgIC8vIH1cblxuICAgIGRiLnNlcXVlbGl6ZSA9IHNlcXVlbGl6ZTtcbiAgICBkYi5TZXF1ZWxpemUgPSBTZXF1ZWxpemU7XG59O1xuIiwiaW1wb3J0IHtcbiAgICBBbGxvd051bGwsXG4gICAgQmVsb25nc1RvLFxuICAgIENvbHVtbixcbiAgICBDcmVhdGVkQXQsXG4gICAgRm9yZWlnbktleSxcbiAgICBIYXNNYW55LFxuICAgIE1vZGVsLFxuICAgIFRhYmxlLFxuICAgIFVwZGF0ZWRBdCxcbn0gZnJvbSAnc2VxdWVsaXplLXR5cGVzY3JpcHQnO1xuaW1wb3J0IEVwaXNvZGUgZnJvbSAnLi9lcGlzb2RlJztcbmltcG9ydCBHZW5yZSBmcm9tICcuL2dlbnJlJztcblxuQFRhYmxlKHsgdGFibGVOYW1lOiAnUG9kY2FzdCcgfSlcbmNsYXNzIFBvZGNhc3QgZXh0ZW5kcyBNb2RlbDxQb2RjYXN0PiB7XG4gICAgQEFsbG93TnVsbChmYWxzZSlcbiAgICBAQ29sdW1uXG4gICAgbmFtZTogc3RyaW5nO1xuXG4gICAgQEFsbG93TnVsbChmYWxzZSlcbiAgICBAQ29sdW1uXG4gICAgYXV0aG9yOiBzdHJpbmc7XG5cbiAgICBAQ29sdW1uXG4gICAgZGVzY3JpcHRpb246IHN0cmluZztcblxuICAgIEBDb2x1bW5cbiAgICBpbWFnZTogc3RyaW5nO1xuXG4gICAgLy8gTUFSSzogR2VucmVcbiAgICBARm9yZWlnbktleSgoKSA9PiBHZW5yZSlcbiAgICBAQ29sdW1uXG4gICAgZ2VucmVJZDogbnVtYmVyO1xuXG4gICAgQEJlbG9uZ3NUbygoKSA9PiBHZW5yZSlcbiAgICBnZW5yZTogR2VucmU7XG5cbiAgICAvLyBNQVJLOiBFcGlzb2RlXG4gICAgQEhhc01hbnkoKCkgPT4gRXBpc29kZSlcbiAgICBlcGlzb2RlczogRXBpc29kZVtdO1xuXG4gICAgQENyZWF0ZWRBdFxuICAgIGNyZWF0ZWRBdDogRGF0ZTtcblxuICAgIEBVcGRhdGVkQXRcbiAgICB1cGRhdGVkQXQ6IERhdGU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvZGNhc3Q7XG4iLCJpbXBvcnQgKiBhcyBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IHsgZ2V0VXNlciwgdGVzdE5lc3QgfSBmcm9tICcuLi9jb250cm9sbGVycy91c2VyJztcblxuZXhwb3J0IGRlZmF1bHQgKGFwcDogZXhwcmVzcy5BcHBsaWNhdGlvbik6IHZvaWQgPT4ge1xuICAgIGFwcC5nZXQoJy9hcGkvdXNlci86aWQnLCBnZXRVc2VyKTtcblxuICAgIGFwcC5wb3N0KCcvYXBpL25lc3QnLCB0ZXN0TmVzdCk7XG59O1xuIiwiLy8gc2VydmVyL3JvdXRlcy9pbmRleC5qc1xuLy8gQVBJIHJvdXRlIHRoYXQgbWFwcyBmdW5jdGlvbmFsaXR5XG5pbXBvcnQgKiBhcyBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0ICogYXMgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCBFeGFtcGxlUm91dGVzIGZyb20gJy4vZXhhbXBsZVJvdXRlcyc7XG5cbi8vIFJlcXVpcmVzIGFuIGFwcCBhcyBhbiBpbnB1dCBzbyBjYW4gZGlyZWN0IHRoZSB1c2VyIGFjY29yZGluZ2x5XG5jb25zdCByb3V0ZXMgPSAoYXBwOiBleHByZXNzLkFwcGxpY2F0aW9uKTogdm9pZCA9PiB7XG4gICAgLy8gTW9kdWxhciByb3V0ZXNcbiAgICBFeGFtcGxlUm91dGVzKGFwcCk7XG5cbiAgICAvLyBTZXJ2ZSBzdGF0aWMgZmlsZXNcbiAgICBhcHAudXNlKGV4cHJlc3Muc3RhdGljKCcuL2NsaWVudC9idWlsZCcpKTtcblxuICAgIGFwcC5nZXQoJy9mYXZpY29uLnBuZycsIChyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlKTogdm9pZCA9PiB7XG4gICAgICAgIGNvbnN0IF9fZGlybmFtZSA9IHByb2Nlc3MuZW52LlBXRDtcbiAgICAgICAgcmVzLnNlbmRGaWxlKCdmYXZpY29uLnBuZycsIHsgcm9vdDogcGF0aC5qb2luKF9fZGlybmFtZSwgJy4vY2xpZW50L2Fzc2V0cycpIH0pO1xuICAgIH0pO1xuXG4gICAgLy8gQ2xpZW50IGFwcCBlbnRyeSBpbmRleC5odG1sIGZpbGUgLSByZWFjdCByb3V0ZXJcbiAgICBhcHAuZ2V0KCcqJywgKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UpOiB2b2lkID0+IHtcbiAgICAgICAgY29uc3QgX19kaXJuYW1lID0gcHJvY2Vzcy5lbnYuUFdEO1xuICAgICAgICByZXMuc2VuZEZpbGUoJ2luZGV4Lmh0bWwnLCB7IHJvb3Q6IHBhdGguam9pbihfX2Rpcm5hbWUsICcuL2NsaWVudC9idWlsZCcpIH0pOyAvLyBSZW5kZXIgY2xpZW50XG4gICAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCByb3V0ZXM7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhdXRoLWhlYWRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJiYWJlbC1wb2x5ZmlsbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJib2R5LXBhcnNlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJidWZmZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZG90ZW52XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzcy1xdWVyeS1pbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaGVyb2t1LWxvZ2dlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb3JnYW5cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzZXF1ZWxpemUtdHlwZXNjcmlwdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9