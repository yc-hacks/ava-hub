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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NyYy9hcHAudHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NyYy9jb250cm9sbGVycy91c2VyL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NlcnZlci9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NyYy9tb2RlbHMvZXBpc29kZS50cyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvc3JjL21vZGVscy9nZW5yZS50cyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvc3JjL21vZGVscy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvc3JjL21vZGVscy9wb2RjYXN0LnRzIiwid2VicGFjazovLy8uL3NlcnZlci9zcmMvbW9kZWxzL3VzZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NyYy9yb3V0ZXMvZXhhbXBsZVJvdXRlcy50cyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvc3JjL3JvdXRlcy9pbmRleC50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiYWJlbC1wb2x5ZmlsbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImJvZHktcGFyc2VyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZG90ZW52XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXhwcmVzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3MtcXVlcnktaW50XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaGVyb2t1LWxvZ2dlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vcmdhblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInBhdGhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzZXF1ZWxpemUtdHlwZXNjcmlwdFwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FB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QU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDO1FBQ2xDLEdBQUcsQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLGdCQUFnQixDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2pGLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDO0FBRUYsa0JBQWUsTUFBTSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUJ0QiwyQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxvQzs7Ozs7Ozs7Ozs7QUNBQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxpQzs7Ozs7Ozs7Ozs7QUNBQSxpRCIsImZpbGUiOiJkaXN0L2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbmltcG9ydCBpbml0aWFsaXplIGZyb20gJy4vbW9kZWxzJztcbmltcG9ydCByb3V0ZXMgZnJvbSAnLi9yb3V0ZXMnO1xuXG5pbXBvcnQgbG9nZ2VyID0gcmVxdWlyZSgnbW9yZ2FuJyk7XG5jb25zdCBib2R5UGFyc2VyID0gcmVxdWlyZSgnYm9keS1wYXJzZXInKTtcbmltcG9ydCBwYXRoID0gcmVxdWlyZSgncGF0aCcpO1xuXG4vLyBDb25maWd1cmUgZG90ZW52IHRvIGxvYWQgaW4gdGhlIC5lbnYgZmlsZVxuaW1wb3J0IGRvdGVudiA9IHJlcXVpcmUoJ2RvdGVudicpO1xuY29uc3QgcmVzdWx0ID0gZG90ZW52LmNvbmZpZygpO1xuXG5jb25zdCBfX2Rpcm5hbWUgPSBwcm9jZXNzLmVudi5QV0Q7IC8vIENvdWxkIGJyZWFrIG9uIHByb2RcblxuY29uc3QgYXBwID0gZXhwcmVzcygpOyAvLyBTZXR1cCBleHByZXNzIGFwcFxuXG4vLyBBbGxvdyBjcm9zcyBvcmlnaW4gcmVxdWVzdHMgd2l0aCBhdXRob3JpemF0aW9uIChmb3IgQVBJIHB1cnBvc2VzKVxuYXBwLmFsbCgnKicsIChyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlLCBuZXh0OiBleHByZXNzLk5leHRGdW5jdGlvbik6IHZvaWQgPT4ge1xuICAgIHJlcy5oZWFkZXIoJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbicsICcqJyk7XG4gICAgcmVzLmhlYWRlcignQWNjZXNzLUNvbnRyb2wtQWxsb3ctTWV0aG9kcycsICdQVVQsIEdFVCwgUE9TVCwgREVMRVRFLCBPUFRJT05TJyk7XG4gICAgcmVzLmhlYWRlcignQWNjZXNzLUNvbnRyb2wtQWxsb3ctQ3JlZGVudGlhbHMnLCAndHJ1ZScpO1xuICAgIHJlcy5oZWFkZXIoJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbicsIGAke3JlcS5oZWFkZXJzLm9yaWdpbn1gKTtcbiAgICByZXMuaGVhZGVyKFxuICAgICAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctSGVhZGVycycsXG4gICAgICAgICdhY2NlcHQsIGNvbnRlbnQtdHlwZSwgeC1wYXJzZS1hcHBsaWNhdGlvbi1pZCwgeC1wYXJzZS1yZXN0LWFwaS1rZXksIHgtcGFyc2Utc2Vzc2lvbi10b2tlbiwgQVVUSE9SSVpBVElPTicsXG4gICAgKTtcbiAgICAvLyBJbnRlcmNlcHQgT1BUSU9OUyBtZXRob2RcbiAgICBpZiAoJ09QVElPTlMnID09IHJlcS5tZXRob2QpIHtcbiAgICAgICAgcmVzLnNlbmQoMjAwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBuZXh0KCk7XG4gICAgfVxufSk7XG5cbi8vIFNldHVwIGF1dGhlbnRpY2F0aW9uIGFuZCBzZWN1cml0eVxuLy8gc2VjdXJpdHkoYXBwKTtcbmluaXRpYWxpemUoKTtcblxuLy8gTG9nIHJlcXVlc3RzIHRvIHRoZSBjb25zb2xlLlxuYXBwLnVzZShsb2dnZXIoJ2RldicpKTtcblxuLy8gUGFyc2UgaW5jb21pbmcgcmVxdWVzdHMgZGF0YSAoaHR0cHM6Ly9naXRodWIuY29tL2V4cHJlc3Nqcy9ib2R5LXBhcnNlcilcbi8vICArIGluY3JlYXNpbmcgYm9keSByZXF1ZXN0IGxpbWl0IHNpemVcbmFwcC51c2UoYm9keVBhcnNlci5qc29uKHsgbGltaXQ6ICcxNW1iJywgZXh0ZW5kZWQ6IHRydWUgfSkpO1xuYXBwLnVzZShib2R5UGFyc2VyLnVybGVuY29kZWQoeyBsaW1pdDogJzE1bWInLCBleHRlbmRlZDogdHJ1ZSB9KSk7XG5cbi8vIFBhcnNlIHF1ZXJpZXMgaW50byBudW1iZXJzLCBub3Qgc3RyaW5nc1xudmFyIHF1ZXJ5UGFyc2VyID0gcmVxdWlyZSgnZXhwcmVzcy1xdWVyeS1pbnQnKTtcbmFwcC51c2UoYm9keVBhcnNlci5qc29uKCkpO1xuYXBwLnVzZShxdWVyeVBhcnNlcigpKTtcblxuYXBwLnVzZSgnL3NjcmlwdHMnLCBleHByZXNzLnN0YXRpYyhwYXRoLmpvaW4oX19kaXJuYW1lLCAnLi4vLi4vY2xpZW50L2Rpc3QnKSkpO1xuXG4vLyBSZXF1aXJlIHJvdXRlcyBhbmQgc2ltdWx0YW5lb3VzbHkgYXR0YWNoIGFwcFxucm91dGVzKGFwcCk7XG5cbi8vIENhdGNoIGFsbCBpZiB0aGUgcm91dGVzIGRvZXNuJ3QgZmluZCBhIHZhbGlkIFVSTFxuYXBwLmdldChcbiAgICAnKicsXG4gICAgKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UpOiBleHByZXNzLlJlc3BvbnNlID0+XG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHtcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdGb3Igc29tZSByZWFzb24sIG5vbmUgb2YgdGhlIHJvdXRlcyBoaXQuLi4nLFxuICAgICAgICB9KSxcbik7XG5cbmV4cG9ydCBkZWZhdWx0IGFwcDtcbiIsImltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgKiBhcyBsb2dnZXIgZnJvbSAnaGVyb2t1LWxvZ2dlcic7IC8vIEZvciBsb2dnaW5nIHRvIHRoZSBsb2cgaGVyb2t1IGxvZyBmaWxlXG5pbXBvcnQgVXNlciBmcm9tICcuLi8uLi9tb2RlbHMvZXBpc29kZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXNlckdldFJlcXVlc3QgZXh0ZW5kcyBleHByZXNzLlJlcXVlc3Qge1xuICAgIGlkOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRVc2VyID0gKHJlcTogVXNlckdldFJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSk6IGFueSA9PiB7XG4gICAgY29uc3QgeyBpZCB9ID0gcmVxLnBhcmFtcztcbiAgICByZXR1cm4gVXNlci5maW5kQnlJZChpZClcbiAgICAgICAgLnRoZW4oKHVzZXI6IFVzZXIpOiBleHByZXNzLlJlc3BvbnNlID0+IHJlcy5zdGF0dXMoMjAwKS5zZW5kKHVzZXIpKVxuICAgICAgICAuY2F0Y2goKGVycm9yOiBFcnJvcik6IGV4cHJlc3MuUmVzcG9uc2UgPT4gcmVzLnN0YXR1cyg0MDApLnNlbmQoZXJyb3IpKTsgLy8gRXJyb3Jcbn07XG5cbmV4cG9ydCBjb25zdCB0ZXN0TmVzdCA9IChyZXE6IFVzZXJHZXRSZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UpOiBhbnkgPT4ge1xuICAgIGxvZ2dlci5sb2cocmVxLmJvZHkpO1xuICAgIHJldHVybiB7XG4gICAgICAgIHRlc3Q6ICdIZWxsbycsXG4gICAgfTtcbn07XG4iLCIvLyBBcHBsaWNhdGlvbiBlbnRyeSwgc2V0dGluZyB1cCBzZXJ2ZXJcbmltcG9ydCBhcHAgZnJvbSAnLi9hcHAnOyAvLyBUaGUgZXhwcmVzcyBhcHAgd2UganVzdCBjcmVhdGVkXG5cbmNvbnN0IHBvcnQgPSBwYXJzZUludChwcm9jZXNzLmVudi5QT1JULCAxMCkgfHwgNTAwMDsgLy8gVXNlIHBvcnQgNTAwMFxuYXBwLnNldCgncG9ydCcsIHBvcnQpO1xuXG4vLyAwLjAuMC4wIG1ha2VzIGl0IGF2YWlsYWJsZSBvbiB5b3VyIGxvY2FsIG5ldHdvcmtcbi8vIGFwcC5saXN0ZW4ocG9ydCwgJzAuMC4wLjAnKTtcbmFwcC5saXN0ZW4ocG9ydCk7XG4iLCJpbXBvcnQge1xuICAgIEFsbG93TnVsbCxcbiAgICBCZWxvbmdzVG8sXG4gICAgQ29sdW1uLFxuICAgIENyZWF0ZWRBdCxcbiAgICBGb3JlaWduS2V5LFxuICAgIE1vZGVsLFxuICAgIFRhYmxlLFxuICAgIFVwZGF0ZWRBdCxcbn0gZnJvbSAnc2VxdWVsaXplLXR5cGVzY3JpcHQnO1xuaW1wb3J0IFBvZGNhc3QgZnJvbSAnLi9wb2RjYXN0JztcblxuQFRhYmxlKHsgdGFibGVOYW1lOiAnRXBpc29kZScgfSlcbmNsYXNzIEVwaXNvZGUgZXh0ZW5kcyBNb2RlbDxFcGlzb2RlPiB7XG4gICAgQEFsbG93TnVsbChmYWxzZSlcbiAgICBAQ29sdW1uXG4gICAgdGl0bGU6IHN0cmluZztcblxuICAgIEBDb2x1bW5cbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuXG4gICAgQENvbHVtblxuICAgIHB1YkRhdDogRGF0ZTtcblxuICAgIEBDb2x1bW5cbiAgICBsaW5rOiBzdHJpbmc7XG5cbiAgICBAQ29sdW1uXG4gICAgYXVkaW9MaW5rOiBzdHJpbmc7XG5cbiAgICAvLyBNQVJLOiBPbmUgdG8gTWFueSBQb2RjYXN0XG4gICAgQEZvcmVpZ25LZXkoKCkgPT4gUG9kY2FzdClcbiAgICBAQ29sdW1uXG4gICAgcG9kY2FzdElkOiBudW1iZXI7XG5cbiAgICBAQmVsb25nc1RvKCgpID0+IFBvZGNhc3QpXG4gICAgcG9kY2FzdDogUG9kY2FzdDtcblxuICAgIEBDb2x1bW5cbiAgICB0cmFuc2NyaXB0OiBzdHJpbmc7XG5cbiAgICBAQ3JlYXRlZEF0XG4gICAgY3JlYXRlZEF0OiBEYXRlO1xuXG4gICAgQFVwZGF0ZWRBdFxuICAgIHVwZGF0ZWRBdDogRGF0ZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRXBpc29kZTtcbiIsImltcG9ydCB7XG4gICAgQWxsb3dOdWxsLFxuICAgIENvbHVtbixcbiAgICBDcmVhdGVkQXQsXG4gICAgSGFzTWFueSxcbiAgICBNb2RlbCxcbiAgICBUYWJsZSxcbiAgICBVcGRhdGVkQXQsXG59IGZyb20gJ3NlcXVlbGl6ZS10eXBlc2NyaXB0JztcbmltcG9ydCBQb2RjYXN0IGZyb20gJy4vcG9kY2FzdCc7XG5cbkBUYWJsZSh7IHRhYmxlTmFtZTogJ0dlbnJlJyB9KVxuY2xhc3MgR2VucmUgZXh0ZW5kcyBNb2RlbDxHZW5yZT4ge1xuICAgIEBBbGxvd051bGwoZmFsc2UpXG4gICAgQENvbHVtblxuICAgIG5hbWU6IHN0cmluZztcblxuICAgIEBDb2x1bW5cbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuXG4gICAgQEhhc01hbnkoKCkgPT4gUG9kY2FzdClcbiAgICBwb2RjYXN0czogUG9kY2FzdFtdO1xuXG4gICAgQENyZWF0ZWRBdFxuICAgIGNyZWF0ZWRBdDogRGF0ZTtcblxuICAgIEBVcGRhdGVkQXRcbiAgICB1cGRhdGVkQXQ6IERhdGU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdlbnJlO1xuIiwiaW1wb3J0IHsgU2VxdWVsaXplIH0gZnJvbSAnc2VxdWVsaXplLXR5cGVzY3JpcHQnO1xuaW1wb3J0IEVwaXNvZGUgZnJvbSAnLi9lcGlzb2RlJztcbmltcG9ydCBHZW5yZSBmcm9tICcuL2dlbnJlJztcbmltcG9ydCBQb2RjYXN0IGZyb20gJy4vcG9kY2FzdCc7XG5pbXBvcnQgVXNlciBmcm9tICcuL3VzZXInO1xuXG5pbXBvcnQgbG9nZ2VyID0gcmVxdWlyZSgnaGVyb2t1LWxvZ2dlcicpOyAvLyBGb3IgbG9nZ2luZyB0byB0aGUgbG9nIGhlcm9rdSBsb2cgZmlsZVxuXG5pbXBvcnQgY29uZmlnRmlsZSA9IHJlcXVpcmUoJy4uL2NvbmZpZy9jb25maWcuanNvbicpO1xuXG5kZWNsYXJlIHZhciBwcm9jZXNzOiB7XG4gICAgZW52OiB7XG4gICAgICAgIE5PREVfRU5WOiBzdHJpbmc7XG4gICAgICAgIERBVEFCQVNFX1VSTDogc3RyaW5nO1xuICAgIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCAoKTogdm9pZCA9PiB7XG4gICAgdmFyIGVudiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WIHx8ICdkZXZlbG9wbWVudCc7IC8vIERldGVybWluZSBpZiB1c2luZyBkZXZlbG9wbWVudFxuICAgIC8vIGNvbnN0IF9fZGlybmFtZSA9IHByb2Nlc3MuZW52LlBXRDsgLy8gQ291bGQgYnJlYWsgb24gcHJvZFxuICAgIC8vIGNvbnN0IGN1cnJlbnREaXIgPSBwYXRoLmpvaW4oX19kaXJuYW1lLCAnLi9zZXJ2ZXIvc3JjL21vZGVscycpO1xuXG4gICAgLy8gUmVndWxhciBgbW9kdWxlLmZpbGVuYW1lYCBpcyB1bmRlZmluZWQgaW4gbG9jYWwgZGV2XG4gICAgLy8gY29uc3QgZmlsZW5hbWUgPSBtb2R1bGUuZmlsZW5hbWUgIT09IHVuZGVmaW5lZCA/IG1vZHVsZS5maWxlbmFtZSA6ICdpbmRleC50cyc7XG4gICAgLy8gdmFyIGJhc2VuYW1lID0gcGF0aC5iYXNlbmFtZShmaWxlbmFtZSk7XG5cbiAgICB2YXIgZGI6IGFueSA9IHt9O1xuXG4gICAgLy8gSSB1c2UgdGhlIG5vZGUtY29uZmlnIHBhY2thZ2UgdG8gbWFuYWdlIHRoZSBEQiBjb25maWcgeW91IGNhbiBjaG9vc2VcbiAgICAvLyB0byBzdGljayB3aXRoIHRoZSBvcmlnaW5hbCB2ZXJzaW9uLiBBbmQgSSByZW1vdmVkIGVudmlyb25tZW50IHZhcmlhYmxlXG4gICAgLy8gc3VwcG9ydCBiZWNhdXNlIEkgZG9uJ3QgbmVlZCBpdC5cbiAgICBsZXQgc2VxdWVsaXplOiBhbnkgPSB7fTtcbiAgICBjb25zb2xlLmxvZyhwcm9jZXNzLmVudi5OT0RFX0VOVik7IC8vIFRPRE86IEZvciBzb21lIHJlYXNvbiwgaW4gcHJvZHVjdGlvbiwgdGhpcyByZWFkcyBhcyAnZGV2ZWxvcG1lbnQnXG4gICAgbG9nZ2VyLmluZm8oYHByb2Nlc3MuZW52Lk5PREVfRU5WOiAke3Byb2Nlc3MuZW52Lk5PREVfRU5WfWApO1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgLy8gRnJvbSB0aGUgZW52aXJvbm1lbnQsIGV4dHJhY3QgdGhlIGtleSB3aXRoIHRoZSBuYW1lIHByb3ZpZGVkIGluIHRoZSBjb25maWcgYXMgdXNlX2Vudl92YXJpYWJsZVxuICAgICAgICAvLyBhbmQgdXNlIHRoYXQgdG8gZXN0YWJsaXNoIGEgY29ubmVjdGlvbiB0byBvdXIgZGF0YWJhc2UuXG4gICAgICAgIGNvbnNvbGUubG9nKCdVc2luZyBkYXRhYmFzZSBVUkw6JywgcHJvY2Vzcy5lbnYuREFUQUJBU0VfVVJMKTtcbiAgICAgICAgbG9nZ2VyLmluZm8oJ1VzaW5nIGRhdGFiYXNlIFVSTDonLCB7IHVybDogcHJvY2Vzcy5lbnYuREFUQUJBU0VfVVJMIH0pO1xuICAgICAgICBzZXF1ZWxpemUgPSBuZXcgU2VxdWVsaXplKHByb2Nlc3MuZW52LkRBVEFCQVNFX1VSTCk7IC8vIEVzdGFibGlzaCBjb25uZWN0aW9uIHVzaW5nIGVudmlyb25tZW50IHZhcmlhYmxlc1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBjb25maWcgPSBjb25maWdGaWxlW2Vudl07IC8vIElmIGxvY2FsLCB1c2UgY29uZmlnXG4gICAgICAgIGNvbnNvbGUubG9nKCdVc2luZyBsb2NhbCBjb25maWd1cmF0aW9uOicsIGNvbmZpZyk7XG4gICAgICAgIGxvZ2dlci5pbmZvKCdVc2luZyBsb2NhbCBjb25maWd1cmF0aW9uOicsIHsgY29uZmlnIH0pO1xuICAgICAgICBzZXF1ZWxpemUgPSBuZXcgU2VxdWVsaXplKHtcbiAgICAgICAgICAgIC4uLmNvbmZpZyxcbiAgICAgICAgICAgIC8vIGRhdGFiYXNlOiBjb25maWcuZGF0YWJhc2UsXG4gICAgICAgICAgICAvLyB1c2VybmFtZTogY29uZmlnLnVzZXJuYW1lLFxuICAgICAgICAgICAgLy8gcGFzc3dvcmQ6IGNvbmZpZy5wYXNzd29yZCxcbiAgICAgICAgfSk7IC8vIENvbm5lY3RcbiAgICB9XG5cbiAgICBzZXF1ZWxpemUuYWRkTW9kZWxzKFtQb2RjYXN0LCBFcGlzb2RlLCBHZW5yZSwgVXNlcl0pO1xuICAgIC8vIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PSAncHJvZHVjdGlvbicpIHtcbiAgICAvLyAgICAgc2VxdWVsaXplLnN5bmMoKTsgLy8gRG9uJ3QgY29ycnVwdCBwcm9kdWN0aW9uIGRhdGFcbiAgICAvLyB9IGVsc2Uge1xuICAgIC8vIHNlcXVlbGl6ZS5zeW5jKHsgZm9yY2U6IHRydWUgfSk7IC8vIFRPRE86IFJlbW92ZSBiZWZvcmUgbGl2ZVxuICAgIHNlcXVlbGl6ZS5zeW5jKHsgYWx0ZXI6IHRydWUgfSk7XG4gICAgLy8gc2VxdWVsaXplLnN5bmMoKTtcbiAgICAvLyB9XG5cbiAgICBkYi5zZXF1ZWxpemUgPSBzZXF1ZWxpemU7XG4gICAgZGIuU2VxdWVsaXplID0gU2VxdWVsaXplO1xufTtcbiIsImltcG9ydCB7XG4gICAgQWxsb3dOdWxsLFxuICAgIEJlbG9uZ3NUbyxcbiAgICBDb2x1bW4sXG4gICAgQ3JlYXRlZEF0LFxuICAgIEZvcmVpZ25LZXksXG4gICAgSGFzTWFueSxcbiAgICBNb2RlbCxcbiAgICBUYWJsZSxcbiAgICBVcGRhdGVkQXQsXG59IGZyb20gJ3NlcXVlbGl6ZS10eXBlc2NyaXB0JztcbmltcG9ydCBFcGlzb2RlIGZyb20gJy4vZXBpc29kZSc7XG5pbXBvcnQgR2VucmUgZnJvbSAnLi9nZW5yZSc7XG5cbkBUYWJsZSh7IHRhYmxlTmFtZTogJ1BvZGNhc3QnIH0pXG5jbGFzcyBQb2RjYXN0IGV4dGVuZHMgTW9kZWw8UG9kY2FzdD4ge1xuICAgIEBBbGxvd051bGwoZmFsc2UpXG4gICAgQENvbHVtblxuICAgIG5hbWU6IHN0cmluZztcblxuICAgIEBBbGxvd051bGwoZmFsc2UpXG4gICAgQENvbHVtblxuICAgIGF1dGhvcjogc3RyaW5nO1xuXG4gICAgQENvbHVtblxuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG5cbiAgICBAQ29sdW1uXG4gICAgaW1hZ2U6IHN0cmluZztcblxuICAgIC8vIE1BUks6IEdlbnJlXG4gICAgQEZvcmVpZ25LZXkoKCkgPT4gR2VucmUpXG4gICAgQENvbHVtblxuICAgIGdlbnJlSWQ6IG51bWJlcjtcblxuICAgIEBCZWxvbmdzVG8oKCkgPT4gR2VucmUpXG4gICAgZ2VucmU6IEdlbnJlO1xuXG4gICAgLy8gTUFSSzogRXBpc29kZVxuICAgIEBIYXNNYW55KCgpID0+IEVwaXNvZGUpXG4gICAgZXBpc29kZXM6IEVwaXNvZGVbXTtcblxuICAgIEBDcmVhdGVkQXRcbiAgICBjcmVhdGVkQXQ6IERhdGU7XG5cbiAgICBAVXBkYXRlZEF0XG4gICAgdXBkYXRlZEF0OiBEYXRlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBQb2RjYXN0O1xuIiwiaW1wb3J0IHsgQWxsb3dOdWxsLCBDb2x1bW4sIENyZWF0ZWRBdCwgTW9kZWwsIFRhYmxlLCBVcGRhdGVkQXQgfSBmcm9tICdzZXF1ZWxpemUtdHlwZXNjcmlwdCc7XG5cbkBUYWJsZSh7IHRhYmxlTmFtZTogJ1VzZXInIH0pXG5jbGFzcyBVc2VyIGV4dGVuZHMgTW9kZWw8VXNlcj4ge1xuICAgIEBBbGxvd051bGwoZmFsc2UpXG4gICAgQENvbHVtblxuICAgIHVzZXJuYW1lOiBzdHJpbmc7XG5cbiAgICBAQWxsb3dOdWxsKGZhbHNlKVxuICAgIEBDb2x1bW5cbiAgICBwYXNzd29yZDogc3RyaW5nO1xuXG4gICAgQEFsbG93TnVsbChmYWxzZSlcbiAgICBAQ29sdW1uXG4gICAgZmlyc3ROYW1lOiBzdHJpbmc7XG5cbiAgICBAQWxsb3dOdWxsKGZhbHNlKVxuICAgIEBDb2x1bW5cbiAgICBsYXN0TmFtZTogc3RyaW5nO1xuXG4gICAgQENyZWF0ZWRBdFxuICAgIGNyZWF0ZWRBdDogRGF0ZTtcblxuICAgIEBVcGRhdGVkQXRcbiAgICB1cGRhdGVkQXQ6IERhdGU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXI7XG4iLCJpbXBvcnQgKiBhcyBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IHsgZ2V0VXNlciwgdGVzdE5lc3QgfSBmcm9tICcuLi9jb250cm9sbGVycy91c2VyJztcblxuZXhwb3J0IGRlZmF1bHQgKGFwcDogZXhwcmVzcy5BcHBsaWNhdGlvbik6IHZvaWQgPT4ge1xuICAgIGFwcC5nZXQoJy9hcGkvdXNlci86aWQnLCBnZXRVc2VyKTtcblxuICAgIGFwcC5wb3N0KCcvYXBpL25lc3QnLCB0ZXN0TmVzdCk7XG59O1xuIiwiLy8gc2VydmVyL3JvdXRlcy9pbmRleC5qc1xuLy8gQVBJIHJvdXRlIHRoYXQgbWFwcyBmdW5jdGlvbmFsaXR5XG5pbXBvcnQgKiBhcyBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0ICogYXMgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCBFeGFtcGxlUm91dGVzIGZyb20gJy4vZXhhbXBsZVJvdXRlcyc7XG5cbi8vIFJlcXVpcmVzIGFuIGFwcCBhcyBhbiBpbnB1dCBzbyBjYW4gZGlyZWN0IHRoZSB1c2VyIGFjY29yZGluZ2x5XG5jb25zdCByb3V0ZXMgPSAoYXBwOiBleHByZXNzLkFwcGxpY2F0aW9uKTogdm9pZCA9PiB7XG4gICAgLy8gTW9kdWxhciByb3V0ZXNcbiAgICBFeGFtcGxlUm91dGVzKGFwcCk7XG5cbiAgICAvLyBTZXJ2ZSBzdGF0aWMgZmlsZXNcbiAgICBhcHAudXNlKGV4cHJlc3Muc3RhdGljKCcuL2NsaWVudC9idWlsZCcpKTtcblxuICAgIGFwcC5nZXQoJy9mYXZpY29uLnBuZycsIChyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlKTogdm9pZCA9PiB7XG4gICAgICAgIGNvbnN0IF9fZGlybmFtZSA9IHByb2Nlc3MuZW52LlBXRDtcbiAgICAgICAgcmVzLnNlbmRGaWxlKCdmYXZpY29uLnBuZycsIHsgcm9vdDogcGF0aC5qb2luKF9fZGlybmFtZSwgJy4vY2xpZW50L2Fzc2V0cycpIH0pO1xuICAgIH0pO1xuXG4gICAgLy8gQ2xpZW50IGFwcCBlbnRyeSBpbmRleC5odG1sIGZpbGUgLSByZWFjdCByb3V0ZXJcbiAgICBhcHAuZ2V0KCcqJywgKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UpOiB2b2lkID0+IHtcbiAgICAgICAgY29uc3QgX19kaXJuYW1lID0gcHJvY2Vzcy5lbnYuUFdEO1xuICAgICAgICByZXMuc2VuZEZpbGUoJ2luZGV4Lmh0bWwnLCB7IHJvb3Q6IHBhdGguam9pbihfX2Rpcm5hbWUsICcuL2NsaWVudC9idWlsZCcpIH0pOyAvLyBSZW5kZXIgY2xpZW50XG4gICAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCByb3V0ZXM7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJiYWJlbC1wb2x5ZmlsbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJib2R5LXBhcnNlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJkb3RlbnZcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzLXF1ZXJ5LWludFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJoZXJva3UtbG9nZ2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vcmdhblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNlcXVlbGl6ZS10eXBlc2NyaXB0XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=