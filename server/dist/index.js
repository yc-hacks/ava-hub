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
const episode_1 = __webpack_require__(/*! ../../models/episode */ "./server/src/models/episode.ts");
exports.getUser = (req, res) => {
    const { id } = req.params;
    return episode_1.default.findById(id)
        .then((user) => res.status(200).send(user))
        .catch((error) => res.status(400).send(error));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NyYy9hcHAudHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NyYy9jb25maWcvc2VjdXJpdHkudHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NyYy9jb250cm9sbGVycy91c2VyL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NlcnZlci9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NyYy9tb2RlbHMvZXBpc29kZS50cyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvc3JjL21vZGVscy9nZW5yZS50cyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvc3JjL21vZGVscy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvc3JjL21vZGVscy9wb2RjYXN0LnRzIiwid2VicGFjazovLy8uL3NlcnZlci9zcmMvcm91dGVzL2V4YW1wbGVSb3V0ZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NyYy9yb3V0ZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXV0aC1oZWFkZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiYWJlbC1wb2x5ZmlsbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImJvZHktcGFyc2VyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYnVmZmVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZG90ZW52XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXhwcmVzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3MtcXVlcnktaW50XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaGVyb2t1LWxvZ2dlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vcmdhblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInBhdGhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzZXF1ZWxpemUtdHlwZXNjcmlwdFwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQSw4REFBbUM7QUFDbkMsbUdBQXlDO0FBQ3pDLHFGQUFrQztBQUNsQyxxRkFBOEI7QUFFOUIsMkRBQWtDO0FBQ2xDLE1BQU0sVUFBVSxHQUFHLG1CQUFPLENBQUMsZ0NBQWEsQ0FBQyxDQUFDO0FBQzFDLHFEQUE4QjtBQUc5QiwyREFBa0M7QUFDbEMsTUFBTSxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRS9CLE1BQU0sU0FBUyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDO0FBRWxDLE1BQU0sR0FBRyxHQUFHLE9BQU8sRUFBRSxDQUFDO0FBR3RCLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBb0IsRUFBRSxHQUFxQixFQUFFLElBQTBCLEVBQVEsRUFBRTtJQUMzRixHQUFHLENBQUMsTUFBTSxDQUFDLDZCQUE2QixFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQy9DLEdBQUcsQ0FBQyxNQUFNLENBQUMsOEJBQThCLEVBQUUsaUNBQWlDLENBQUMsQ0FBQztJQUM5RSxHQUFHLENBQUMsTUFBTSxDQUFDLGtDQUFrQyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ3ZELEdBQUcsQ0FBQyxNQUFNLENBQUMsNkJBQTZCLEVBQUUsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7SUFDbkUsR0FBRyxDQUFDLE1BQU0sQ0FDTiw4QkFBOEIsRUFDOUIsMEdBQTBHLENBQzdHLENBQUM7SUFFRixJQUFJLFNBQVMsSUFBSSxHQUFHLENBQUMsTUFBTSxFQUFFO1FBQ3pCLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDakI7U0FBTTtRQUNILElBQUksRUFBRSxDQUFDO0tBQ1Y7QUFDTCxDQUFDLENBQUMsQ0FBQztBQUdILGtCQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDZCxnQkFBVSxFQUFFLENBQUM7QUFHYixHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0FBSXZCLEdBQUcsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztBQUM1RCxHQUFHLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFHbEUsSUFBSSxXQUFXLEdBQUcsbUJBQU8sQ0FBQyw0Q0FBbUIsQ0FBQyxDQUFDO0FBQy9DLEdBQUcsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7QUFDM0IsR0FBRyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO0FBRXZCLEdBQUcsQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFHL0UsZ0JBQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUdaLEdBQUcsQ0FBQyxHQUFHLENBQ0gsR0FBRyxFQUNILENBQUMsR0FBb0IsRUFBRSxHQUFxQixFQUFvQixFQUFFLENBQzlELEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ2pCLE9BQU8sRUFBRSw0Q0FBNEM7Q0FDeEQsQ0FBQyxDQUNULENBQUM7QUFFRixrQkFBZSxHQUFHLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEVuQiw0RUFBNkM7QUFDN0MsNkRBQWdDO0FBRWhDLHlFQUF3QztBQUd4QyxNQUFNLFFBQVEsR0FBRztJQUNiLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsS0FBSztDQUNSLENBQUM7QUFHRixNQUFNLGFBQWEsR0FBRyxDQUFDLDhCQUE4QixDQUFDLENBQUM7QUFDdkQsTUFBTSxTQUFTLEdBQUcsSUFBSSxNQUFNLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUczRCxNQUFNLFVBQVUsR0FBRyxDQUFDLEdBQUcsRUFBRSxjQUFjLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztBQUc5RCxNQUFNLFNBQVMsR0FBRyxTQUFTLENBQUM7QUFHNUIsTUFBTSxvQkFBb0IsR0FBRyxDQUFDLEdBQXFCLEVBQVEsRUFBRTtJQUN6RCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDO0FBQy9ELENBQUMsQ0FBQztBQUVGLE1BQU0sUUFBUSxHQUFHLENBQUMsR0FBRyxFQUFRLEVBQUU7SUFFM0IsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQW9CLEVBQUUsR0FBcUIsRUFBRSxJQUEwQixFQUFRLEVBQUU7UUFFdEYsTUFBTSxXQUFXLEdBQUcsVUFBVSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDN0QsSUFBSSxDQUFDLFdBQVcsSUFBSSxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsRUFBRTtZQUVqRCxNQUFNLEVBQUUsR0FBVyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUM7Z0JBQzlDLEdBQUcsQ0FBQyxVQUFVLENBQUMsYUFBYTtnQkFDNUIsR0FBRyxDQUFDLEVBQUUsQ0FBVyxDQUFDO1lBQ3RCLE1BQU0sT0FBTyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDdEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDeEIsSUFBSSxRQUFRLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO2dCQUMzQixPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxxQkFBcUIsQ0FBQyxDQUFDO2dCQUN2QyxNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7Z0JBQzFDLElBQUksRUFBRSxDQUFDO2FBQ1Y7aUJBQU0sSUFBSSxPQUFPLElBQUksU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRTtnQkFDM0MsTUFBTSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO2dCQUN6RCxJQUFJLEVBQUUsQ0FBQzthQUNWO2lCQUFNO2dCQUVILE1BQU0sVUFBVSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDO29CQUMxQyxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUM7b0JBQzdCLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDO2dCQUduQyxJQUFJLENBQUMsVUFBVSxFQUFFO29CQUViLEdBQUcsQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEVBQUUsc0NBQXNDLENBQUMsQ0FBQztvQkFDcEUsTUFBTSxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsRUFBRTt3QkFDOUIsRUFBRSxFQUFFLEVBQUU7d0JBQ04sT0FBTyxFQUFFLE9BQU87d0JBQ2hCLEdBQUcsRUFBRSxHQUFHLENBQUMsV0FBVztxQkFDdkIsQ0FBQyxDQUFDO29CQUNILE9BQU8sb0JBQW9CLENBQUMsR0FBRyxDQUFDLENBQUM7aUJBQ3BDO2dCQUdELE1BQU0sSUFBSSxHQUFHLGFBQWEsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBRzdDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEdBQUcsSUFBSSxlQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUczRSxJQUFJLEVBQUUsS0FBSyxPQUFPLElBQUksRUFBRSxLQUFLLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFO29CQUNwRCxNQUFNLENBQUMsS0FBSyxDQUFDLDBCQUEwQixFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztvQkFDekUsT0FBTyxvQkFBb0IsQ0FBQyxHQUFHLENBQUMsQ0FBQztpQkFDcEM7Z0JBRUQsTUFBTSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7Z0JBQ2xFLElBQUksRUFBRSxDQUFDO2FBQ1Y7U0FDSjthQUFNO1lBRUgsTUFBTSxDQUFDLElBQUksQ0FBQywrQkFBK0IsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztZQUN2RSxJQUFJLEVBQUUsQ0FBQztTQUNWO0lBQ0wsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUM7QUFFRixrQkFBZSxRQUFRLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ3RGeEIsb0dBQXdDO0FBTTNCLGVBQU8sR0FBRyxDQUFDLEdBQW1CLEVBQUUsR0FBcUIsRUFBTyxFQUFFO0lBQ3ZFLE1BQU0sRUFBRSxFQUFFLEVBQUUsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDO0lBQzFCLE9BQU8saUJBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDO1NBQ25CLElBQUksQ0FBQyxDQUFDLElBQVUsRUFBb0IsRUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2xFLEtBQUssQ0FBQyxDQUFDLEtBQVksRUFBb0IsRUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7QUFDaEYsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNYRixzRUFBd0I7QUFFeEIsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLElBQUksQ0FBQztBQUNwRCxhQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztBQUl0QixhQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSakIsdUdBUzhCO0FBQzlCLHlGQUFnQztBQUdoQyxJQUFNLE9BQU8sR0FBYixNQUFNLE9BQVEsU0FBUSw0QkFBYztDQWlDbkM7QUE5Qkc7SUFGQyxnQ0FBUyxDQUFDLEtBQUssQ0FBQztJQUNoQiw2QkFBTTs7c0NBQ087QUFHZDtJQURDLDZCQUFNOzs0Q0FDYTtBQUdwQjtJQURDLDZCQUFNOzhCQUNDLElBQUk7dUNBQUM7QUFHYjtJQURDLDZCQUFNOztxQ0FDTTtBQUdiO0lBREMsNkJBQU07OzBDQUNXO0FBS2xCO0lBRkMsaUNBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxpQkFBTyxDQUFDO0lBQ3pCLDZCQUFNOzswQ0FDVztBQUdsQjtJQURDLGdDQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsaUJBQU8sQ0FBQzs4QkFDaEIsaUJBQU87d0NBQUM7QUFHakI7SUFEQyw2QkFBTTs7MkNBQ1k7QUFHbkI7SUFEQyxnQ0FBUzs4QkFDQyxJQUFJOzBDQUFDO0FBR2hCO0lBREMsZ0NBQVM7OEJBQ0MsSUFBSTswQ0FBQztBQWhDZCxPQUFPO0lBRFosNEJBQUssQ0FBQyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsQ0FBQztHQUMxQixPQUFPLENBaUNaO0FBRUQsa0JBQWUsT0FBTyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRHZCLHVHQVE4QjtBQUM5Qix5RkFBZ0M7QUFHaEMsSUFBTSxLQUFLLEdBQVgsTUFBTSxLQUFNLFNBQVEsNEJBQVk7Q0FnQi9CO0FBYkc7SUFGQyxnQ0FBUyxDQUFDLEtBQUssQ0FBQztJQUNoQiw2QkFBTTs7bUNBQ007QUFHYjtJQURDLDZCQUFNOzswQ0FDYTtBQUdwQjtJQURDLDhCQUFPLENBQUMsR0FBRyxFQUFFLENBQUMsaUJBQU8sQ0FBQzs7dUNBQ0g7QUFHcEI7SUFEQyxnQ0FBUzs4QkFDQyxJQUFJO3dDQUFDO0FBR2hCO0lBREMsZ0NBQVM7OEJBQ0MsSUFBSTt3Q0FBQztBQWZkLEtBQUs7SUFEViw0QkFBSyxDQUFDLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxDQUFDO0dBQ3hCLEtBQUssQ0FnQlY7QUFFRCxrQkFBZSxLQUFLLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQzlCckIsdUdBQWlEO0FBQ2pELHlGQUFnQztBQUNoQyxtRkFBNEI7QUFDNUIseUZBQWdDO0FBRWhDLHlFQUF5QztBQUV6Qyx1R0FBcUQ7QUFTckQsa0JBQWUsR0FBUyxFQUFFO0lBQ3RCLElBQUksR0FBRyxHQUFHLGFBQW9CLElBQUksS0FBYSxDQUFDO0lBUWhELElBQUksRUFBRSxHQUFRLEVBQUUsQ0FBQztJQUtqQixJQUFJLFNBQVMsR0FBUSxFQUFFLENBQUM7SUFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFvQixDQUFDLENBQUM7SUFDbEMsTUFBTSxDQUFDLElBQUksQ0FBQyx5QkFBeUIsYUFBb0IsRUFBRSxDQUFDLENBQUM7SUFDN0QsSUFBSSxLQUFvQyxFQUFFLEVBTXpDO1NBQU07UUFDSCxJQUFJLE1BQU0sR0FBRyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUNsRCxNQUFNLENBQUMsSUFBSSxDQUFDLDRCQUE0QixFQUFFLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztRQUN0RCxTQUFTLEdBQUcsSUFBSSxnQ0FBUyxtQkFDbEIsTUFBTSxFQUlYLENBQUM7S0FDTjtJQUVELFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxpQkFBTyxFQUFFLGlCQUFPLEVBQUUsZUFBSyxDQUFDLENBQUMsQ0FBQztJQUsvQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7SUFJaEMsRUFBRSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7SUFDekIsRUFBRSxDQUFDLFNBQVMsR0FBRyxnQ0FBUyxDQUFDO0FBQzdCLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOURGLHVHQVU4QjtBQUM5Qix5RkFBZ0M7QUFDaEMsbUZBQTRCO0FBRzVCLElBQU0sT0FBTyxHQUFiLE1BQU0sT0FBUSxTQUFRLDRCQUFjO0NBZ0NuQztBQTdCRztJQUZDLGdDQUFTLENBQUMsS0FBSyxDQUFDO0lBQ2hCLDZCQUFNOztxQ0FDTTtBQUliO0lBRkMsZ0NBQVMsQ0FBQyxLQUFLLENBQUM7SUFDaEIsNkJBQU07O3VDQUNRO0FBR2Y7SUFEQyw2QkFBTTs7NENBQ2E7QUFHcEI7SUFEQyw2QkFBTTs7c0NBQ087QUFLZDtJQUZDLGlDQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsZUFBSyxDQUFDO0lBQ3ZCLDZCQUFNOzt3Q0FDUztBQUdoQjtJQURDLGdDQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsZUFBSyxDQUFDOzhCQUNoQixlQUFLO3NDQUFDO0FBSWI7SUFEQyw4QkFBTyxDQUFDLEdBQUcsRUFBRSxDQUFDLGlCQUFPLENBQUM7O3lDQUNIO0FBR3BCO0lBREMsZ0NBQVM7OEJBQ0MsSUFBSTswQ0FBQztBQUdoQjtJQURDLGdDQUFTOzhCQUNDLElBQUk7MENBQUM7QUEvQmQsT0FBTztJQURaLDRCQUFLLENBQUMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLENBQUM7R0FDMUIsT0FBTyxDQWdDWjtBQUVELGtCQUFlLE9BQU8sQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FDaER2Qix3R0FBOEM7QUFFOUMsa0JBQWUsQ0FBQyxHQUF3QixFQUFRLEVBQUU7SUFDOUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsY0FBTyxDQUFDLENBQUM7QUFDdEMsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNIRiw4REFBbUM7QUFDbkMscURBQTZCO0FBQzdCLDJHQUE0QztBQUc1QyxNQUFNLE1BQU0sR0FBRyxDQUFDLEdBQXdCLEVBQVEsRUFBRTtJQUU5Qyx1QkFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBR25CLEdBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7SUFFMUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxHQUFvQixFQUFFLEdBQXFCLEVBQVEsRUFBRTtRQUMxRSxNQUFNLFNBQVMsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQztRQUNsQyxHQUFHLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxpQkFBaUIsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNuRixDQUFDLENBQUMsQ0FBQztJQUdILEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBb0IsRUFBRSxHQUFxQixFQUFRLEVBQUU7UUFDL0QsTUFBTSxTQUFTLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUM7UUFDbEMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsZ0JBQWdCLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDakYsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUM7QUFFRixrQkFBZSxNQUFNLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQnRCLHdDOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLG9DOzs7Ozs7Ozs7OztBQ0FBLDhDOzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLGlDOzs7Ozs7Ozs7OztBQ0FBLGlEIiwiZmlsZSI6ImRpc3QvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgKiBhcyBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IHNlY3VyaXR5IGZyb20gJy4vY29uZmlnL3NlY3VyaXR5JztcbmltcG9ydCBpbml0aWFsaXplIGZyb20gJy4vbW9kZWxzJztcbmltcG9ydCByb3V0ZXMgZnJvbSAnLi9yb3V0ZXMnO1xuXG5pbXBvcnQgbG9nZ2VyID0gcmVxdWlyZSgnbW9yZ2FuJyk7XG5jb25zdCBib2R5UGFyc2VyID0gcmVxdWlyZSgnYm9keS1wYXJzZXInKTtcbmltcG9ydCBwYXRoID0gcmVxdWlyZSgncGF0aCcpO1xuXG4vLyBDb25maWd1cmUgZG90ZW52IHRvIGxvYWQgaW4gdGhlIC5lbnYgZmlsZVxuaW1wb3J0IGRvdGVudiA9IHJlcXVpcmUoJ2RvdGVudicpO1xuY29uc3QgcmVzdWx0ID0gZG90ZW52LmNvbmZpZygpO1xuXG5jb25zdCBfX2Rpcm5hbWUgPSBwcm9jZXNzLmVudi5QV0Q7IC8vIENvdWxkIGJyZWFrIG9uIHByb2RcblxuY29uc3QgYXBwID0gZXhwcmVzcygpOyAvLyBTZXR1cCBleHByZXNzIGFwcFxuXG4vLyBBbGxvdyBjcm9zcyBvcmlnaW4gcmVxdWVzdHMgd2l0aCBhdXRob3JpemF0aW9uIChmb3IgQVBJIHB1cnBvc2VzKVxuYXBwLmFsbCgnKicsIChyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlLCBuZXh0OiBleHByZXNzLk5leHRGdW5jdGlvbik6IHZvaWQgPT4ge1xuICAgIHJlcy5oZWFkZXIoJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbicsICcqJyk7XG4gICAgcmVzLmhlYWRlcignQWNjZXNzLUNvbnRyb2wtQWxsb3ctTWV0aG9kcycsICdQVVQsIEdFVCwgUE9TVCwgREVMRVRFLCBPUFRJT05TJyk7XG4gICAgcmVzLmhlYWRlcignQWNjZXNzLUNvbnRyb2wtQWxsb3ctQ3JlZGVudGlhbHMnLCAndHJ1ZScpO1xuICAgIHJlcy5oZWFkZXIoJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbicsIGAke3JlcS5oZWFkZXJzLm9yaWdpbn1gKTtcbiAgICByZXMuaGVhZGVyKFxuICAgICAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctSGVhZGVycycsXG4gICAgICAgICdhY2NlcHQsIGNvbnRlbnQtdHlwZSwgeC1wYXJzZS1hcHBsaWNhdGlvbi1pZCwgeC1wYXJzZS1yZXN0LWFwaS1rZXksIHgtcGFyc2Utc2Vzc2lvbi10b2tlbiwgQVVUSE9SSVpBVElPTicsXG4gICAgKTtcbiAgICAvLyBJbnRlcmNlcHQgT1BUSU9OUyBtZXRob2RcbiAgICBpZiAoJ09QVElPTlMnID09IHJlcS5tZXRob2QpIHtcbiAgICAgICAgcmVzLnNlbmQoMjAwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBuZXh0KCk7XG4gICAgfVxufSk7XG5cbi8vIFNldHVwIGF1dGhlbnRpY2F0aW9uIGFuZCBzZWN1cml0eVxuc2VjdXJpdHkoYXBwKTtcbmluaXRpYWxpemUoKTtcblxuLy8gTG9nIHJlcXVlc3RzIHRvIHRoZSBjb25zb2xlLlxuYXBwLnVzZShsb2dnZXIoJ2RldicpKTtcblxuLy8gUGFyc2UgaW5jb21pbmcgcmVxdWVzdHMgZGF0YSAoaHR0cHM6Ly9naXRodWIuY29tL2V4cHJlc3Nqcy9ib2R5LXBhcnNlcilcbi8vICArIGluY3JlYXNpbmcgYm9keSByZXF1ZXN0IGxpbWl0IHNpemVcbmFwcC51c2UoYm9keVBhcnNlci5qc29uKHsgbGltaXQ6ICcxNW1iJywgZXh0ZW5kZWQ6IHRydWUgfSkpO1xuYXBwLnVzZShib2R5UGFyc2VyLnVybGVuY29kZWQoeyBsaW1pdDogJzE1bWInLCBleHRlbmRlZDogdHJ1ZSB9KSk7XG5cbi8vIFBhcnNlIHF1ZXJpZXMgaW50byBudW1iZXJzLCBub3Qgc3RyaW5nc1xudmFyIHF1ZXJ5UGFyc2VyID0gcmVxdWlyZSgnZXhwcmVzcy1xdWVyeS1pbnQnKTtcbmFwcC51c2UoYm9keVBhcnNlci5qc29uKCkpO1xuYXBwLnVzZShxdWVyeVBhcnNlcigpKTtcblxuYXBwLnVzZSgnL3NjcmlwdHMnLCBleHByZXNzLnN0YXRpYyhwYXRoLmpvaW4oX19kaXJuYW1lLCAnLi4vLi4vY2xpZW50L2Rpc3QnKSkpO1xuXG4vLyBSZXF1aXJlIHJvdXRlcyBhbmQgc2ltdWx0YW5lb3VzbHkgYXR0YWNoIGFwcFxucm91dGVzKGFwcCk7XG5cbi8vIENhdGNoIGFsbCBpZiB0aGUgcm91dGVzIGRvZXNuJ3QgZmluZCBhIHZhbGlkIFVSTFxuYXBwLmdldChcbiAgICAnKicsXG4gICAgKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UpOiBleHByZXNzLlJlc3BvbnNlID0+XG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHtcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdGb3Igc29tZSByZWFzb24sIG5vbmUgb2YgdGhlIHJvdXRlcyBoaXQuLi4nLFxuICAgICAgICB9KSxcbik7XG5cbmV4cG9ydCBkZWZhdWx0IGFwcDtcbiIsImltcG9ydCAqIGFzIGF1dGhvcml6YXRpb24gZnJvbSAnYXV0aC1oZWFkZXInOyAvLyBGb3IgcGFyc2luZyBhdXRoZW50aWNhdGlvblxuaW1wb3J0IHsgQnVmZmVyIH0gZnJvbSAnYnVmZmVyJztcbmltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgKiBhcyBsb2dnZXIgZnJvbSAnaGVyb2t1LWxvZ2dlcic7IC8vIEZvciBsb2dnaW5nIHRvIHRoZSBsb2cgaGVyb2t1IGxvZyBmaWxlXG5cbi8vIFdoaXRlbGlzdGVkIElQc1xuY29uc3QgdmFsaWRJUHMgPSBbXG4gICAgJzo6ZmZmZjoxMjcuMC4wLjEnLCAvLyBMb2NhbCBob3N0XG4gICAgJzEyNy4wLjAuMScsIC8vIElQdjQgLSBsb2NhbGhvc3QgKD8pXG4gICAgJzo6MScsIC8vIElQdjZcbl07XG5cbi8vIFdoaXRlbGlzdGVkIHVybHNcbmNvbnN0IHZhbGlkUmVmZXJlcnMgPSBbJyhodHRwcz86Ly8pP2xvY2FsaG9zdDozMDAwLionXTtcbmNvbnN0IHZhbGlkVVJMcyA9IG5ldyBSZWdFeHAodmFsaWRSZWZlcmVycy5qb2luKCd8JyksICdpJyk7IC8vIENvbnZlcnQgdG8gcmVndWxhciBleHByZXNzaW9uXG5cbi8vIFdoaXRlbGlzdGVkIGFzc2V0cyAtIGFscmVhZHkgbm90IGluIHRoZSBibGFja2xpc3Qgc28gbm90IGVudGlyZWx5IG5lY2Nlc3NhcnkgYW55bW9yZVxuY29uc3QgdmFsaWRQYWdlcyA9IFsnLycsICcvZmF2aWNvbi5pY28nLCAnL3NjcmlwdHMvaW5kZXguanMnXTtcblxuLy8gQW55IHJvdXRlIGluIHRoZSBibGFja2xpc3Qgd2lsbCByZXF1aXJlIGF1dGhlbnRpY2F0aW9uXG5jb25zdCBibGFja2xpc3QgPSAvXFwvYXBpLiovOyAvLyBKdXN0IEFQSXNcblxuLy8gSGFuZGxlIDQwMSBlcnJvciBjb2RlIC0gVW5hdXRob3JpemVkXG5jb25zdCB1bmF1dGhvcml6ZWRSZXNwb25zZSA9IChyZXM6IGV4cHJlc3MuUmVzcG9uc2UpOiB2b2lkID0+IHtcbiAgICByZXMuc3RhdHVzKDQwMSkuc2VuZCgnUmVxdWVzdCBmYWlsZWQ6IEJhZCBhdXRoZW50aWNhdGlvbicpO1xufTtcblxuY29uc3Qgc2VjdXJpdHkgPSAoYXBwKTogdm9pZCA9PiB7XG4gICAgLy8gU2tpcCB3aGl0ZWxpc3RlZCBkb21haW5zXG4gICAgYXBwLnVzZSgocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSwgbmV4dDogZXhwcmVzcy5OZXh0RnVuY3Rpb24pOiB2b2lkID0+IHtcbiAgICAgICAgLy8gUmVxdWlyZSBhdXRoZW50aWNhdGlvbiBpZiBub3QgaW4gdGhlIHdoaXRlbGlzdCBvciBpcyBpbiBibGFja2xpc3RcbiAgICAgICAgY29uc3QgaW5XaGl0ZWxpc3QgPSB2YWxpZFBhZ2VzLmluZGV4T2YocmVxLm9yaWdpbmFsVXJsKSA+IC0xO1xuICAgICAgICBpZiAoIWluV2hpdGVsaXN0IHx8IGJsYWNrbGlzdC50ZXN0KHJlcS5vcmlnaW5hbFVybCkpIHtcbiAgICAgICAgICAgIC8vIEdldCB0aGUgSVAgYWRkcmVzc1xuICAgICAgICAgICAgY29uc3QgaXA6IHN0cmluZyA9IChyZXEuaGVhZGVyc1sneC1mb3J3YXJkZWQtZm9yJ10gfHxcbiAgICAgICAgICAgICAgICByZXEuY29ubmVjdGlvbi5yZW1vdGVBZGRyZXNzIHx8XG4gICAgICAgICAgICAgICAgcmVxLmlwKSBhcyBzdHJpbmc7XG4gICAgICAgICAgICBjb25zdCByZWZlcmVyID0gcmVxLmhlYWRlcignUmVmZXJlcicpOyAvLyBJZiB0aGUgcmVxdWVzdCBpcyBiZWluZyBzZW50IGJ5IGEgd2Vic2l0ZVxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0lQOiAnLCBpcCk7XG4gICAgICAgICAgICBpZiAodmFsaWRJUHMuaW5kZXhPZihpcCkgPiAtMSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGlwLCAnaXMgYSB3aGl0ZWxpc3RlZCBJUCcpO1xuICAgICAgICAgICAgICAgIGxvZ2dlci5pbmZvKCdXaGl0ZWxpc3RlZCBJUCcsIHsgaXA6IGlwIH0pO1xuICAgICAgICAgICAgICAgIG5leHQoKTsgLy8gUmVxdWVzdCB2YWxpZFxuICAgICAgICAgICAgfSBlbHNlIGlmIChyZWZlcmVyICYmIHZhbGlkVVJMcy50ZXN0KHJlZmVyZXIpKSB7XG4gICAgICAgICAgICAgICAgbG9nZ2VyLmluZm8oJ1doaXRlbGlzdGVkIFJlZmVyZXInLCB7IHJlZmVyZXI6IHJlZmVyZXIgfSk7XG4gICAgICAgICAgICAgICAgbmV4dCgpOyAvLyBSZXF1ZXN0IHZhbGlkXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIGxvZ2dlci5pbmZvKFwiQ2hlY2tpbmcgYXV0aG9yaXphdGlvbi4uLlwiKVxuICAgICAgICAgICAgICAgIGNvbnN0IGF1dGhIZWFkZXIgPSByZXEuaGVhZGVyWydhdXRob3JpemF0aW9uJ11cbiAgICAgICAgICAgICAgICAgICAgPyByZXEuaGVhZGVyWydhdXRob3JpemF0aW9uJ11cbiAgICAgICAgICAgICAgICAgICAgOiByZXEuaGVhZGVyc1snYXV0aG9yaXphdGlvbiddO1xuXG4gICAgICAgICAgICAgICAgLy8gRmFpbCBpZiBubyBiYXNpYyBhdXRoZW50aWNhdGlvbiBwcm92aWRlZFxuICAgICAgICAgICAgICAgIGlmICghYXV0aEhlYWRlcikge1xuICAgICAgICAgICAgICAgICAgICAvLyBObyBhdXRob3JpemF0aW9uXG4gICAgICAgICAgICAgICAgICAgIHJlcy5zZXQoJ1dXVy1BdXRoZW50aWNhdGUnLCAnQmFzaWMgcmVhbG09XCJBdXRob3JpemF0aW9uIFJlcXVpcmVkXCInKTsgLy8gUHJvbXB0IGNoYWxsZW5nZSBwYXNzd29yZFxuICAgICAgICAgICAgICAgICAgICBsb2dnZXIuZXJyb3IoJ05vIEF1dGhlbnRpY2F0aW9uJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXA6IGlwLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmZXJlcjogcmVmZXJlcixcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogcmVxLm9yaWdpbmFsVXJsLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVuYXV0aG9yaXplZFJlc3BvbnNlKHJlcyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gUmV0cmVpdmUgYXV0aG9yaXphdGlvbiB0b2tlblxuICAgICAgICAgICAgICAgIGNvbnN0IGF1dGggPSBhdXRob3JpemF0aW9uLnBhcnNlKGF1dGhIZWFkZXIpO1xuXG4gICAgICAgICAgICAgICAgLy8gR2V0IHRoZSBiYXNpYyBhdXRoIGNvbXBvbmVudFxuICAgICAgICAgICAgICAgIGNvbnN0IFt1biwgcHddID0gbmV3IEJ1ZmZlcihhdXRoLnRva2VuLCAnYmFzZTY0JykudG9TdHJpbmcoKS5zcGxpdCgnOicsIDIpO1xuXG4gICAgICAgICAgICAgICAgLy8gVmVyaWZ5IGF1dGhlbnRpY2F0aW9uLlxuICAgICAgICAgICAgICAgIGlmICh1biAhPT0gJ2FkbWluJyB8fCBwdyAhPT0gcHJvY2Vzcy5lbnYuQURNSU5fQVBJX0tFWSkge1xuICAgICAgICAgICAgICAgICAgICBsb2dnZXIuZXJyb3IoJ1VuYXV0aG9yaXplZCBDcmVkZW50aWFscycsIHsgdXNlcm5hbWU6IHVuLCBwYXNzd29yZDogcHcgfSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB1bmF1dGhvcml6ZWRSZXNwb25zZShyZXMpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGxvZ2dlci5pbmZvKCdVc2VyIEF1dGhlbnRpY2F0ZWQnLCB7IHVzZXJuYW1lOiB1biwgcGFzc3dvcmQ6IHB3IH0pO1xuICAgICAgICAgICAgICAgIG5leHQoKTsgLy8gUmVxdWVzdCB2YWxpZFxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gU2tpcCBhdXRoZW50aWNhdGlvblxuICAgICAgICAgICAgbG9nZ2VyLmluZm8oJ1doaXRlbGlzdCBvciBub3QgaW4gYmxhY2tsaXN0JywgeyB1cmw6IHJlcS5vcmlnaW5hbFVybCB9KTtcbiAgICAgICAgICAgIG5leHQoKTtcbiAgICAgICAgfVxuICAgIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgc2VjdXJpdHk7XG4iLCJpbXBvcnQgKiBhcyBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IFVzZXIgZnJvbSAnLi4vLi4vbW9kZWxzL2VwaXNvZGUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFVzZXJHZXRSZXF1ZXN0IGV4dGVuZHMgZXhwcmVzcy5SZXF1ZXN0IHtcbiAgICBpZDogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0VXNlciA9IChyZXE6IFVzZXJHZXRSZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UpOiBhbnkgPT4ge1xuICAgIGNvbnN0IHsgaWQgfSA9IHJlcS5wYXJhbXM7XG4gICAgcmV0dXJuIFVzZXIuZmluZEJ5SWQoaWQpXG4gICAgICAgIC50aGVuKCh1c2VyOiBVc2VyKTogZXhwcmVzcy5SZXNwb25zZSA9PiByZXMuc3RhdHVzKDIwMCkuc2VuZCh1c2VyKSlcbiAgICAgICAgLmNhdGNoKChlcnJvcjogRXJyb3IpOiBleHByZXNzLlJlc3BvbnNlID0+IHJlcy5zdGF0dXMoNDAwKS5zZW5kKGVycm9yKSk7IC8vIEVycm9yXG59O1xuIiwiLy8gQXBwbGljYXRpb24gZW50cnksIHNldHRpbmcgdXAgc2VydmVyXG5pbXBvcnQgYXBwIGZyb20gJy4vYXBwJzsgLy8gVGhlIGV4cHJlc3MgYXBwIHdlIGp1c3QgY3JlYXRlZFxuXG5jb25zdCBwb3J0ID0gcGFyc2VJbnQocHJvY2Vzcy5lbnYuUE9SVCwgMTApIHx8IDUwMDA7IC8vIFVzZSBwb3J0IDUwMDBcbmFwcC5zZXQoJ3BvcnQnLCBwb3J0KTtcblxuLy8gMC4wLjAuMCBtYWtlcyBpdCBhdmFpbGFibGUgb24geW91ciBsb2NhbCBuZXR3b3JrXG4vLyBhcHAubGlzdGVuKHBvcnQsICcwLjAuMC4wJyk7XG5hcHAubGlzdGVuKHBvcnQpO1xuIiwiaW1wb3J0IHtcbiAgICBBbGxvd051bGwsXG4gICAgQmVsb25nc1RvLFxuICAgIENvbHVtbixcbiAgICBDcmVhdGVkQXQsXG4gICAgRm9yZWlnbktleSxcbiAgICBNb2RlbCxcbiAgICBUYWJsZSxcbiAgICBVcGRhdGVkQXQsXG59IGZyb20gJ3NlcXVlbGl6ZS10eXBlc2NyaXB0JztcbmltcG9ydCBQb2RjYXN0IGZyb20gJy4vcG9kY2FzdCc7XG5cbkBUYWJsZSh7IHRhYmxlTmFtZTogJ0VwaXNvZGUnIH0pXG5jbGFzcyBFcGlzb2RlIGV4dGVuZHMgTW9kZWw8RXBpc29kZT4ge1xuICAgIEBBbGxvd051bGwoZmFsc2UpXG4gICAgQENvbHVtblxuICAgIHRpdGxlOiBzdHJpbmc7XG5cbiAgICBAQ29sdW1uXG4gICAgZGVzY3JpcHRpb246IHN0cmluZztcblxuICAgIEBDb2x1bW5cbiAgICBwdWJEYXQ6IERhdGU7XG5cbiAgICBAQ29sdW1uXG4gICAgbGluazogc3RyaW5nO1xuXG4gICAgQENvbHVtblxuICAgIGF1ZGlvTGluazogc3RyaW5nO1xuXG4gICAgLy8gTUFSSzogT25lIHRvIE1hbnkgUG9kY2FzdFxuICAgIEBGb3JlaWduS2V5KCgpID0+IFBvZGNhc3QpXG4gICAgQENvbHVtblxuICAgIHBvZGNhc3RJZDogbnVtYmVyO1xuXG4gICAgQEJlbG9uZ3NUbygoKSA9PiBQb2RjYXN0KVxuICAgIHBvZGNhc3Q6IFBvZGNhc3Q7XG5cbiAgICBAQ29sdW1uXG4gICAgdHJhbnNjcmlwdDogc3RyaW5nO1xuXG4gICAgQENyZWF0ZWRBdFxuICAgIGNyZWF0ZWRBdDogRGF0ZTtcblxuICAgIEBVcGRhdGVkQXRcbiAgICB1cGRhdGVkQXQ6IERhdGU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVwaXNvZGU7XG4iLCJpbXBvcnQge1xuICAgIEFsbG93TnVsbCxcbiAgICBDb2x1bW4sXG4gICAgQ3JlYXRlZEF0LFxuICAgIEhhc01hbnksXG4gICAgTW9kZWwsXG4gICAgVGFibGUsXG4gICAgVXBkYXRlZEF0LFxufSBmcm9tICdzZXF1ZWxpemUtdHlwZXNjcmlwdCc7XG5pbXBvcnQgUG9kY2FzdCBmcm9tICcuL3BvZGNhc3QnO1xuXG5AVGFibGUoeyB0YWJsZU5hbWU6ICdHZW5yZScgfSlcbmNsYXNzIEdlbnJlIGV4dGVuZHMgTW9kZWw8R2VucmU+IHtcbiAgICBAQWxsb3dOdWxsKGZhbHNlKVxuICAgIEBDb2x1bW5cbiAgICBuYW1lOiBzdHJpbmc7XG5cbiAgICBAQ29sdW1uXG4gICAgZGVzY3JpcHRpb246IHN0cmluZztcblxuICAgIEBIYXNNYW55KCgpID0+IFBvZGNhc3QpXG4gICAgcG9kY2FzdHM6IFBvZGNhc3RbXTtcblxuICAgIEBDcmVhdGVkQXRcbiAgICBjcmVhdGVkQXQ6IERhdGU7XG5cbiAgICBAVXBkYXRlZEF0XG4gICAgdXBkYXRlZEF0OiBEYXRlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBHZW5yZTtcbiIsImltcG9ydCB7IFNlcXVlbGl6ZSB9IGZyb20gJ3NlcXVlbGl6ZS10eXBlc2NyaXB0JztcbmltcG9ydCBFcGlzb2RlIGZyb20gJy4vZXBpc29kZSc7XG5pbXBvcnQgR2VucmUgZnJvbSAnLi9nZW5yZSc7XG5pbXBvcnQgUG9kY2FzdCBmcm9tICcuL3BvZGNhc3QnO1xuXG5pbXBvcnQgbG9nZ2VyID0gcmVxdWlyZSgnaGVyb2t1LWxvZ2dlcicpOyAvLyBGb3IgbG9nZ2luZyB0byB0aGUgbG9nIGhlcm9rdSBsb2cgZmlsZVxuXG5pbXBvcnQgY29uZmlnRmlsZSA9IHJlcXVpcmUoJy4uL2NvbmZpZy9jb25maWcuanNvbicpO1xuXG5kZWNsYXJlIHZhciBwcm9jZXNzOiB7XG4gICAgZW52OiB7XG4gICAgICAgIE5PREVfRU5WOiBzdHJpbmc7XG4gICAgICAgIERBVEFCQVNFX1VSTDogc3RyaW5nO1xuICAgIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCAoKTogdm9pZCA9PiB7XG4gICAgdmFyIGVudiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WIHx8ICdkZXZlbG9wbWVudCc7IC8vIERldGVybWluZSBpZiB1c2luZyBkZXZlbG9wbWVudFxuICAgIC8vIGNvbnN0IF9fZGlybmFtZSA9IHByb2Nlc3MuZW52LlBXRDsgLy8gQ291bGQgYnJlYWsgb24gcHJvZFxuICAgIC8vIGNvbnN0IGN1cnJlbnREaXIgPSBwYXRoLmpvaW4oX19kaXJuYW1lLCAnLi9zZXJ2ZXIvc3JjL21vZGVscycpO1xuXG4gICAgLy8gUmVndWxhciBgbW9kdWxlLmZpbGVuYW1lYCBpcyB1bmRlZmluZWQgaW4gbG9jYWwgZGV2XG4gICAgLy8gY29uc3QgZmlsZW5hbWUgPSBtb2R1bGUuZmlsZW5hbWUgIT09IHVuZGVmaW5lZCA/IG1vZHVsZS5maWxlbmFtZSA6ICdpbmRleC50cyc7XG4gICAgLy8gdmFyIGJhc2VuYW1lID0gcGF0aC5iYXNlbmFtZShmaWxlbmFtZSk7XG5cbiAgICB2YXIgZGI6IGFueSA9IHt9O1xuXG4gICAgLy8gSSB1c2UgdGhlIG5vZGUtY29uZmlnIHBhY2thZ2UgdG8gbWFuYWdlIHRoZSBEQiBjb25maWcgeW91IGNhbiBjaG9vc2VcbiAgICAvLyB0byBzdGljayB3aXRoIHRoZSBvcmlnaW5hbCB2ZXJzaW9uLiBBbmQgSSByZW1vdmVkIGVudmlyb25tZW50IHZhcmlhYmxlXG4gICAgLy8gc3VwcG9ydCBiZWNhdXNlIEkgZG9uJ3QgbmVlZCBpdC5cbiAgICBsZXQgc2VxdWVsaXplOiBhbnkgPSB7fTtcbiAgICBjb25zb2xlLmxvZyhwcm9jZXNzLmVudi5OT0RFX0VOVik7IC8vIFRPRE86IEZvciBzb21lIHJlYXNvbiwgaW4gcHJvZHVjdGlvbiwgdGhpcyByZWFkcyBhcyAnZGV2ZWxvcG1lbnQnXG4gICAgbG9nZ2VyLmluZm8oYHByb2Nlc3MuZW52Lk5PREVfRU5WOiAke3Byb2Nlc3MuZW52Lk5PREVfRU5WfWApO1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgLy8gRnJvbSB0aGUgZW52aXJvbm1lbnQsIGV4dHJhY3QgdGhlIGtleSB3aXRoIHRoZSBuYW1lIHByb3ZpZGVkIGluIHRoZSBjb25maWcgYXMgdXNlX2Vudl92YXJpYWJsZVxuICAgICAgICAvLyBhbmQgdXNlIHRoYXQgdG8gZXN0YWJsaXNoIGEgY29ubmVjdGlvbiB0byBvdXIgZGF0YWJhc2UuXG4gICAgICAgIGNvbnNvbGUubG9nKCdVc2luZyBkYXRhYmFzZSBVUkw6JywgcHJvY2Vzcy5lbnYuREFUQUJBU0VfVVJMKTtcbiAgICAgICAgbG9nZ2VyLmluZm8oJ1VzaW5nIGRhdGFiYXNlIFVSTDonLCB7IHVybDogcHJvY2Vzcy5lbnYuREFUQUJBU0VfVVJMIH0pO1xuICAgICAgICBzZXF1ZWxpemUgPSBuZXcgU2VxdWVsaXplKHByb2Nlc3MuZW52LkRBVEFCQVNFX1VSTCk7IC8vIEVzdGFibGlzaCBjb25uZWN0aW9uIHVzaW5nIGVudmlyb25tZW50IHZhcmlhYmxlc1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBjb25maWcgPSBjb25maWdGaWxlW2Vudl07IC8vIElmIGxvY2FsLCB1c2UgY29uZmlnXG4gICAgICAgIGNvbnNvbGUubG9nKCdVc2luZyBsb2NhbCBjb25maWd1cmF0aW9uOicsIGNvbmZpZyk7XG4gICAgICAgIGxvZ2dlci5pbmZvKCdVc2luZyBsb2NhbCBjb25maWd1cmF0aW9uOicsIHsgY29uZmlnIH0pO1xuICAgICAgICBzZXF1ZWxpemUgPSBuZXcgU2VxdWVsaXplKHtcbiAgICAgICAgICAgIC4uLmNvbmZpZyxcbiAgICAgICAgICAgIC8vIGRhdGFiYXNlOiBjb25maWcuZGF0YWJhc2UsXG4gICAgICAgICAgICAvLyB1c2VybmFtZTogY29uZmlnLnVzZXJuYW1lLFxuICAgICAgICAgICAgLy8gcGFzc3dvcmQ6IGNvbmZpZy5wYXNzd29yZCxcbiAgICAgICAgfSk7IC8vIENvbm5lY3RcbiAgICB9XG5cbiAgICBzZXF1ZWxpemUuYWRkTW9kZWxzKFtQb2RjYXN0LCBFcGlzb2RlLCBHZW5yZV0pO1xuICAgIC8vIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PSAncHJvZHVjdGlvbicpIHtcbiAgICAvLyAgICAgc2VxdWVsaXplLnN5bmMoKTsgLy8gRG9uJ3QgY29ycnVwdCBwcm9kdWN0aW9uIGRhdGFcbiAgICAvLyB9IGVsc2Uge1xuICAgIC8vIHNlcXVlbGl6ZS5zeW5jKHsgZm9yY2U6IHRydWUgfSk7IC8vIFRPRE86IFJlbW92ZSBiZWZvcmUgbGl2ZVxuICAgIHNlcXVlbGl6ZS5zeW5jKHsgYWx0ZXI6IHRydWUgfSk7XG4gICAgLy8gc2VxdWVsaXplLnN5bmMoKTtcbiAgICAvLyB9XG5cbiAgICBkYi5zZXF1ZWxpemUgPSBzZXF1ZWxpemU7XG4gICAgZGIuU2VxdWVsaXplID0gU2VxdWVsaXplO1xufTtcbiIsImltcG9ydCB7XG4gICAgQWxsb3dOdWxsLFxuICAgIEJlbG9uZ3NUbyxcbiAgICBDb2x1bW4sXG4gICAgQ3JlYXRlZEF0LFxuICAgIEZvcmVpZ25LZXksXG4gICAgSGFzTWFueSxcbiAgICBNb2RlbCxcbiAgICBUYWJsZSxcbiAgICBVcGRhdGVkQXQsXG59IGZyb20gJ3NlcXVlbGl6ZS10eXBlc2NyaXB0JztcbmltcG9ydCBFcGlzb2RlIGZyb20gJy4vZXBpc29kZSc7XG5pbXBvcnQgR2VucmUgZnJvbSAnLi9nZW5yZSc7XG5cbkBUYWJsZSh7IHRhYmxlTmFtZTogJ1BvZGNhc3QnIH0pXG5jbGFzcyBQb2RjYXN0IGV4dGVuZHMgTW9kZWw8UG9kY2FzdD4ge1xuICAgIEBBbGxvd051bGwoZmFsc2UpXG4gICAgQENvbHVtblxuICAgIG5hbWU6IHN0cmluZztcblxuICAgIEBBbGxvd051bGwoZmFsc2UpXG4gICAgQENvbHVtblxuICAgIGF1dGhvcjogc3RyaW5nO1xuXG4gICAgQENvbHVtblxuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG5cbiAgICBAQ29sdW1uXG4gICAgaW1hZ2U6IHN0cmluZztcblxuICAgIC8vIE1BUks6IEdlbnJlXG4gICAgQEZvcmVpZ25LZXkoKCkgPT4gR2VucmUpXG4gICAgQENvbHVtblxuICAgIGdlbnJlSWQ6IG51bWJlcjtcblxuICAgIEBCZWxvbmdzVG8oKCkgPT4gR2VucmUpXG4gICAgZ2VucmU6IEdlbnJlO1xuXG4gICAgLy8gTUFSSzogRXBpc29kZVxuICAgIEBIYXNNYW55KCgpID0+IEVwaXNvZGUpXG4gICAgZXBpc29kZXM6IEVwaXNvZGVbXTtcblxuICAgIEBDcmVhdGVkQXRcbiAgICBjcmVhdGVkQXQ6IERhdGU7XG5cbiAgICBAVXBkYXRlZEF0XG4gICAgdXBkYXRlZEF0OiBEYXRlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBQb2RjYXN0O1xuIiwiaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbmltcG9ydCB7IGdldFVzZXIgfSBmcm9tICcuLi9jb250cm9sbGVycy91c2VyJztcblxuZXhwb3J0IGRlZmF1bHQgKGFwcDogZXhwcmVzcy5BcHBsaWNhdGlvbik6IHZvaWQgPT4ge1xuICAgIGFwcC5nZXQoJy9hcGkvdXNlci86aWQnLCBnZXRVc2VyKTtcbn07XG4iLCIvLyBzZXJ2ZXIvcm91dGVzL2luZGV4LmpzXG4vLyBBUEkgcm91dGUgdGhhdCBtYXBzIGZ1bmN0aW9uYWxpdHlcbmltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgKiBhcyBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IEV4YW1wbGVSb3V0ZXMgZnJvbSAnLi9leGFtcGxlUm91dGVzJztcblxuLy8gUmVxdWlyZXMgYW4gYXBwIGFzIGFuIGlucHV0IHNvIGNhbiBkaXJlY3QgdGhlIHVzZXIgYWNjb3JkaW5nbHlcbmNvbnN0IHJvdXRlcyA9IChhcHA6IGV4cHJlc3MuQXBwbGljYXRpb24pOiB2b2lkID0+IHtcbiAgICAvLyBNb2R1bGFyIHJvdXRlc1xuICAgIEV4YW1wbGVSb3V0ZXMoYXBwKTtcblxuICAgIC8vIFNlcnZlIHN0YXRpYyBmaWxlc1xuICAgIGFwcC51c2UoZXhwcmVzcy5zdGF0aWMoJy4vY2xpZW50L2J1aWxkJykpO1xuXG4gICAgYXBwLmdldCgnL2Zhdmljb24ucG5nJywgKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UpOiB2b2lkID0+IHtcbiAgICAgICAgY29uc3QgX19kaXJuYW1lID0gcHJvY2Vzcy5lbnYuUFdEO1xuICAgICAgICByZXMuc2VuZEZpbGUoJ2Zhdmljb24ucG5nJywgeyByb290OiBwYXRoLmpvaW4oX19kaXJuYW1lLCAnLi9jbGllbnQvYXNzZXRzJykgfSk7XG4gICAgfSk7XG5cbiAgICAvLyBDbGllbnQgYXBwIGVudHJ5IGluZGV4Lmh0bWwgZmlsZSAtIHJlYWN0IHJvdXRlclxuICAgIGFwcC5nZXQoJyonLCAocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSk6IHZvaWQgPT4ge1xuICAgICAgICBjb25zdCBfX2Rpcm5hbWUgPSBwcm9jZXNzLmVudi5QV0Q7XG4gICAgICAgIHJlcy5zZW5kRmlsZSgnaW5kZXguaHRtbCcsIHsgcm9vdDogcGF0aC5qb2luKF9fZGlybmFtZSwgJy4vY2xpZW50L2J1aWxkJykgfSk7IC8vIFJlbmRlciBjbGllbnRcbiAgICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJvdXRlcztcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF1dGgtaGVhZGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJhYmVsLXBvbHlmaWxsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJvZHktcGFyc2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJ1ZmZlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJkb3RlbnZcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzLXF1ZXJ5LWludFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJoZXJva3UtbG9nZ2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vcmdhblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNlcXVlbGl6ZS10eXBlc2NyaXB0XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=