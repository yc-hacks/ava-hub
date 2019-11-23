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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NyYy9hcHAudHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NyYy9jb250cm9sbGVycy91c2VyL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NlcnZlci9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NyYy9tb2RlbHMvZXBpc29kZS50cyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvc3JjL21vZGVscy9nZW5yZS50cyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvc3JjL21vZGVscy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvc3JjL21vZGVscy9wb2RjYXN0LnRzIiwid2VicGFjazovLy8uL3NlcnZlci9zcmMvcm91dGVzL2V4YW1wbGVSb3V0ZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NyYy9yb3V0ZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYmFiZWwtcG9seWZpbGxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJib2R5LXBhcnNlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImRvdGVudlwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHByZXNzLXF1ZXJ5LWludFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImhlcm9rdS1sb2dnZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb3JnYW5cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXRoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic2VxdWVsaXplLXR5cGVzY3JpcHRcIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNsRkEsOERBQW1DO0FBQ25DLHFGQUFrQztBQUNsQyxxRkFBOEI7QUFFOUIsMkRBQWtDO0FBQ2xDLE1BQU0sVUFBVSxHQUFHLG1CQUFPLENBQUMsZ0NBQWEsQ0FBQyxDQUFDO0FBQzFDLHFEQUE4QjtBQUc5QiwyREFBa0M7QUFDbEMsTUFBTSxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRS9CLE1BQU0sU0FBUyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDO0FBRWxDLE1BQU0sR0FBRyxHQUFHLE9BQU8sRUFBRSxDQUFDO0FBR3RCLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBb0IsRUFBRSxHQUFxQixFQUFFLElBQTBCLEVBQVEsRUFBRTtJQUMzRixHQUFHLENBQUMsTUFBTSxDQUFDLDZCQUE2QixFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQy9DLEdBQUcsQ0FBQyxNQUFNLENBQUMsOEJBQThCLEVBQUUsaUNBQWlDLENBQUMsQ0FBQztJQUM5RSxHQUFHLENBQUMsTUFBTSxDQUFDLGtDQUFrQyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ3ZELEdBQUcsQ0FBQyxNQUFNLENBQUMsNkJBQTZCLEVBQUUsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7SUFDbkUsR0FBRyxDQUFDLE1BQU0sQ0FDTiw4QkFBOEIsRUFDOUIsMEdBQTBHLENBQzdHLENBQUM7SUFFRixJQUFJLFNBQVMsSUFBSSxHQUFHLENBQUMsTUFBTSxFQUFFO1FBQ3pCLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDakI7U0FBTTtRQUNILElBQUksRUFBRSxDQUFDO0tBQ1Y7QUFDTCxDQUFDLENBQUMsQ0FBQztBQUlILGdCQUFVLEVBQUUsQ0FBQztBQUdiLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7QUFJdkIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQzVELEdBQUcsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztBQUdsRSxJQUFJLFdBQVcsR0FBRyxtQkFBTyxDQUFDLDRDQUFtQixDQUFDLENBQUM7QUFDL0MsR0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUMzQixHQUFHLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7QUFFdkIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUcvRSxnQkFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBR1osR0FBRyxDQUFDLEdBQUcsQ0FDSCxHQUFHLEVBQ0gsQ0FBQyxHQUFvQixFQUFFLEdBQXFCLEVBQW9CLEVBQUUsQ0FDOUQsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDakIsT0FBTyxFQUFFLDRDQUE0QztDQUN4RCxDQUFDLENBQ1QsQ0FBQztBQUVGLGtCQUFlLEdBQUcsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRW5CLHlFQUF3QztBQUN4QyxvR0FBd0M7QUFNM0IsZUFBTyxHQUFHLENBQUMsR0FBbUIsRUFBRSxHQUFxQixFQUFPLEVBQUU7SUFDdkUsTUFBTSxFQUFFLEVBQUUsRUFBRSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUM7SUFDMUIsT0FBTyxpQkFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUM7U0FDbkIsSUFBSSxDQUFDLENBQUMsSUFBVSxFQUFvQixFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDbEUsS0FBSyxDQUFDLENBQUMsS0FBWSxFQUFvQixFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztBQUNoRixDQUFDLENBQUM7QUFFVyxnQkFBUSxHQUFHLENBQUMsR0FBbUIsRUFBRSxHQUFxQixFQUFPLEVBQUU7SUFDeEUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDckIsT0FBTztRQUNILElBQUksRUFBRSxPQUFPO0tBQ2hCLENBQUM7QUFDTixDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ25CRixzRUFBd0I7QUFFeEIsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLElBQUksQ0FBQztBQUNwRCxhQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztBQUl0QixhQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSakIsdUdBUzhCO0FBQzlCLHlGQUFnQztBQUdoQyxJQUFNLE9BQU8sR0FBYixNQUFNLE9BQVEsU0FBUSw0QkFBYztDQWlDbkM7QUE5Qkc7SUFGQyxnQ0FBUyxDQUFDLEtBQUssQ0FBQztJQUNoQiw2QkFBTTs7c0NBQ087QUFHZDtJQURDLDZCQUFNOzs0Q0FDYTtBQUdwQjtJQURDLDZCQUFNOzhCQUNDLElBQUk7dUNBQUM7QUFHYjtJQURDLDZCQUFNOztxQ0FDTTtBQUdiO0lBREMsNkJBQU07OzBDQUNXO0FBS2xCO0lBRkMsaUNBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxpQkFBTyxDQUFDO0lBQ3pCLDZCQUFNOzswQ0FDVztBQUdsQjtJQURDLGdDQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsaUJBQU8sQ0FBQzs4QkFDaEIsaUJBQU87d0NBQUM7QUFHakI7SUFEQyw2QkFBTTs7MkNBQ1k7QUFHbkI7SUFEQyxnQ0FBUzs4QkFDQyxJQUFJOzBDQUFDO0FBR2hCO0lBREMsZ0NBQVM7OEJBQ0MsSUFBSTswQ0FBQztBQWhDZCxPQUFPO0lBRFosNEJBQUssQ0FBQyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsQ0FBQztHQUMxQixPQUFPLENBaUNaO0FBRUQsa0JBQWUsT0FBTyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRHZCLHVHQVE4QjtBQUM5Qix5RkFBZ0M7QUFHaEMsSUFBTSxLQUFLLEdBQVgsTUFBTSxLQUFNLFNBQVEsNEJBQVk7Q0FnQi9CO0FBYkc7SUFGQyxnQ0FBUyxDQUFDLEtBQUssQ0FBQztJQUNoQiw2QkFBTTs7bUNBQ007QUFHYjtJQURDLDZCQUFNOzswQ0FDYTtBQUdwQjtJQURDLDhCQUFPLENBQUMsR0FBRyxFQUFFLENBQUMsaUJBQU8sQ0FBQzs7dUNBQ0g7QUFHcEI7SUFEQyxnQ0FBUzs4QkFDQyxJQUFJO3dDQUFDO0FBR2hCO0lBREMsZ0NBQVM7OEJBQ0MsSUFBSTt3Q0FBQztBQWZkLEtBQUs7SUFEViw0QkFBSyxDQUFDLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxDQUFDO0dBQ3hCLEtBQUssQ0FnQlY7QUFFRCxrQkFBZSxLQUFLLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQzlCckIsdUdBQWlEO0FBQ2pELHlGQUFnQztBQUNoQyxtRkFBNEI7QUFDNUIseUZBQWdDO0FBRWhDLHlFQUF5QztBQUV6Qyx1R0FBcUQ7QUFTckQsa0JBQWUsR0FBUyxFQUFFO0lBQ3RCLElBQUksR0FBRyxHQUFHLGFBQW9CLElBQUksS0FBYSxDQUFDO0lBUWhELElBQUksRUFBRSxHQUFRLEVBQUUsQ0FBQztJQUtqQixJQUFJLFNBQVMsR0FBUSxFQUFFLENBQUM7SUFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFvQixDQUFDLENBQUM7SUFDbEMsTUFBTSxDQUFDLElBQUksQ0FBQyx5QkFBeUIsYUFBb0IsRUFBRSxDQUFDLENBQUM7SUFDN0QsSUFBSSxLQUFvQyxFQUFFLEVBTXpDO1NBQU07UUFDSCxJQUFJLE1BQU0sR0FBRyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUNsRCxNQUFNLENBQUMsSUFBSSxDQUFDLDRCQUE0QixFQUFFLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztRQUN0RCxTQUFTLEdBQUcsSUFBSSxnQ0FBUyxtQkFDbEIsTUFBTSxFQUlYLENBQUM7S0FDTjtJQUVELFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxpQkFBTyxFQUFFLGlCQUFPLEVBQUUsZUFBSyxDQUFDLENBQUMsQ0FBQztJQUsvQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7SUFJaEMsRUFBRSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7SUFDekIsRUFBRSxDQUFDLFNBQVMsR0FBRyxnQ0FBUyxDQUFDO0FBQzdCLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOURGLHVHQVU4QjtBQUM5Qix5RkFBZ0M7QUFDaEMsbUZBQTRCO0FBRzVCLElBQU0sT0FBTyxHQUFiLE1BQU0sT0FBUSxTQUFRLDRCQUFjO0NBZ0NuQztBQTdCRztJQUZDLGdDQUFTLENBQUMsS0FBSyxDQUFDO0lBQ2hCLDZCQUFNOztxQ0FDTTtBQUliO0lBRkMsZ0NBQVMsQ0FBQyxLQUFLLENBQUM7SUFDaEIsNkJBQU07O3VDQUNRO0FBR2Y7SUFEQyw2QkFBTTs7NENBQ2E7QUFHcEI7SUFEQyw2QkFBTTs7c0NBQ087QUFLZDtJQUZDLGlDQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsZUFBSyxDQUFDO0lBQ3ZCLDZCQUFNOzt3Q0FDUztBQUdoQjtJQURDLGdDQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsZUFBSyxDQUFDOzhCQUNoQixlQUFLO3NDQUFDO0FBSWI7SUFEQyw4QkFBTyxDQUFDLEdBQUcsRUFBRSxDQUFDLGlCQUFPLENBQUM7O3lDQUNIO0FBR3BCO0lBREMsZ0NBQVM7OEJBQ0MsSUFBSTswQ0FBQztBQUdoQjtJQURDLGdDQUFTOzhCQUNDLElBQUk7MENBQUM7QUEvQmQsT0FBTztJQURaLDRCQUFLLENBQUMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLENBQUM7R0FDMUIsT0FBTyxDQWdDWjtBQUVELGtCQUFlLE9BQU8sQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FDaER2Qix3R0FBd0Q7QUFFeEQsa0JBQWUsQ0FBQyxHQUF3QixFQUFRLEVBQUU7SUFDOUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsY0FBTyxDQUFDLENBQUM7SUFFbEMsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsZUFBUSxDQUFDLENBQUM7QUFDcEMsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNMRiw4REFBbUM7QUFDbkMscURBQTZCO0FBQzdCLDJHQUE0QztBQUc1QyxNQUFNLE1BQU0sR0FBRyxDQUFDLEdBQXdCLEVBQVEsRUFBRTtJQUU5Qyx1QkFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBR25CLEdBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7SUFFMUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxHQUFvQixFQUFFLEdBQXFCLEVBQVEsRUFBRTtRQUMxRSxNQUFNLFNBQVMsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQztRQUNsQyxHQUFHLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxpQkFBaUIsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNuRixDQUFDLENBQUMsQ0FBQztJQUdILEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBb0IsRUFBRSxHQUFxQixFQUFRLEVBQUU7UUFDL0QsTUFBTSxTQUFTLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUM7UUFDbEMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsZ0JBQWdCLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDakYsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUM7QUFFRixrQkFBZSxNQUFNLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQnRCLDJDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLG9DOzs7Ozs7Ozs7OztBQ0FBLDhDOzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLGlDOzs7Ozs7Ozs7OztBQ0FBLGlEIiwiZmlsZSI6ImRpc3QvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgKiBhcyBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IGluaXRpYWxpemUgZnJvbSAnLi9tb2RlbHMnO1xuaW1wb3J0IHJvdXRlcyBmcm9tICcuL3JvdXRlcyc7XG5cbmltcG9ydCBsb2dnZXIgPSByZXF1aXJlKCdtb3JnYW4nKTtcbmNvbnN0IGJvZHlQYXJzZXIgPSByZXF1aXJlKCdib2R5LXBhcnNlcicpO1xuaW1wb3J0IHBhdGggPSByZXF1aXJlKCdwYXRoJyk7XG5cbi8vIENvbmZpZ3VyZSBkb3RlbnYgdG8gbG9hZCBpbiB0aGUgLmVudiBmaWxlXG5pbXBvcnQgZG90ZW52ID0gcmVxdWlyZSgnZG90ZW52Jyk7XG5jb25zdCByZXN1bHQgPSBkb3RlbnYuY29uZmlnKCk7XG5cbmNvbnN0IF9fZGlybmFtZSA9IHByb2Nlc3MuZW52LlBXRDsgLy8gQ291bGQgYnJlYWsgb24gcHJvZFxuXG5jb25zdCBhcHAgPSBleHByZXNzKCk7IC8vIFNldHVwIGV4cHJlc3MgYXBwXG5cbi8vIEFsbG93IGNyb3NzIG9yaWdpbiByZXF1ZXN0cyB3aXRoIGF1dGhvcml6YXRpb24gKGZvciBBUEkgcHVycG9zZXMpXG5hcHAuYWxsKCcqJywgKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UsIG5leHQ6IGV4cHJlc3MuTmV4dEZ1bmN0aW9uKTogdm9pZCA9PiB7XG4gICAgcmVzLmhlYWRlcignQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJywgJyonKTtcbiAgICByZXMuaGVhZGVyKCdBY2Nlc3MtQ29udHJvbC1BbGxvdy1NZXRob2RzJywgJ1BVVCwgR0VULCBQT1NULCBERUxFVEUsIE9QVElPTlMnKTtcbiAgICByZXMuaGVhZGVyKCdBY2Nlc3MtQ29udHJvbC1BbGxvdy1DcmVkZW50aWFscycsICd0cnVlJyk7XG4gICAgcmVzLmhlYWRlcignQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJywgYCR7cmVxLmhlYWRlcnMub3JpZ2lufWApO1xuICAgIHJlcy5oZWFkZXIoXG4gICAgICAgICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1IZWFkZXJzJyxcbiAgICAgICAgJ2FjY2VwdCwgY29udGVudC10eXBlLCB4LXBhcnNlLWFwcGxpY2F0aW9uLWlkLCB4LXBhcnNlLXJlc3QtYXBpLWtleSwgeC1wYXJzZS1zZXNzaW9uLXRva2VuLCBBVVRIT1JJWkFUSU9OJyxcbiAgICApO1xuICAgIC8vIEludGVyY2VwdCBPUFRJT05TIG1ldGhvZFxuICAgIGlmICgnT1BUSU9OUycgPT0gcmVxLm1ldGhvZCkge1xuICAgICAgICByZXMuc2VuZCgyMDApO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG5leHQoKTtcbiAgICB9XG59KTtcblxuLy8gU2V0dXAgYXV0aGVudGljYXRpb24gYW5kIHNlY3VyaXR5XG4vLyBzZWN1cml0eShhcHApO1xuaW5pdGlhbGl6ZSgpO1xuXG4vLyBMb2cgcmVxdWVzdHMgdG8gdGhlIGNvbnNvbGUuXG5hcHAudXNlKGxvZ2dlcignZGV2JykpO1xuXG4vLyBQYXJzZSBpbmNvbWluZyByZXF1ZXN0cyBkYXRhIChodHRwczovL2dpdGh1Yi5jb20vZXhwcmVzc2pzL2JvZHktcGFyc2VyKVxuLy8gICsgaW5jcmVhc2luZyBib2R5IHJlcXVlc3QgbGltaXQgc2l6ZVxuYXBwLnVzZShib2R5UGFyc2VyLmpzb24oeyBsaW1pdDogJzE1bWInLCBleHRlbmRlZDogdHJ1ZSB9KSk7XG5hcHAudXNlKGJvZHlQYXJzZXIudXJsZW5jb2RlZCh7IGxpbWl0OiAnMTVtYicsIGV4dGVuZGVkOiB0cnVlIH0pKTtcblxuLy8gUGFyc2UgcXVlcmllcyBpbnRvIG51bWJlcnMsIG5vdCBzdHJpbmdzXG52YXIgcXVlcnlQYXJzZXIgPSByZXF1aXJlKCdleHByZXNzLXF1ZXJ5LWludCcpO1xuYXBwLnVzZShib2R5UGFyc2VyLmpzb24oKSk7XG5hcHAudXNlKHF1ZXJ5UGFyc2VyKCkpO1xuXG5hcHAudXNlKCcvc2NyaXB0cycsIGV4cHJlc3Muc3RhdGljKHBhdGguam9pbihfX2Rpcm5hbWUsICcuLi8uLi9jbGllbnQvZGlzdCcpKSk7XG5cbi8vIFJlcXVpcmUgcm91dGVzIGFuZCBzaW11bHRhbmVvdXNseSBhdHRhY2ggYXBwXG5yb3V0ZXMoYXBwKTtcblxuLy8gQ2F0Y2ggYWxsIGlmIHRoZSByb3V0ZXMgZG9lc24ndCBmaW5kIGEgdmFsaWQgVVJMXG5hcHAuZ2V0KFxuICAgICcqJyxcbiAgICAocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSk6IGV4cHJlc3MuUmVzcG9uc2UgPT5cbiAgICAgICAgcmVzLnN0YXR1cygyMDApLnNlbmQoe1xuICAgICAgICAgICAgbWVzc2FnZTogJ0ZvciBzb21lIHJlYXNvbiwgbm9uZSBvZiB0aGUgcm91dGVzIGhpdC4uLicsXG4gICAgICAgIH0pLFxuKTtcblxuZXhwb3J0IGRlZmF1bHQgYXBwO1xuIiwiaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbmltcG9ydCAqIGFzIGxvZ2dlciBmcm9tICdoZXJva3UtbG9nZ2VyJzsgLy8gRm9yIGxvZ2dpbmcgdG8gdGhlIGxvZyBoZXJva3UgbG9nIGZpbGVcbmltcG9ydCBVc2VyIGZyb20gJy4uLy4uL21vZGVscy9lcGlzb2RlJztcblxuZXhwb3J0IGludGVyZmFjZSBVc2VyR2V0UmVxdWVzdCBleHRlbmRzIGV4cHJlc3MuUmVxdWVzdCB7XG4gICAgaWQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IGdldFVzZXIgPSAocmVxOiBVc2VyR2V0UmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlKTogYW55ID0+IHtcbiAgICBjb25zdCB7IGlkIH0gPSByZXEucGFyYW1zO1xuICAgIHJldHVybiBVc2VyLmZpbmRCeUlkKGlkKVxuICAgICAgICAudGhlbigodXNlcjogVXNlcik6IGV4cHJlc3MuUmVzcG9uc2UgPT4gcmVzLnN0YXR1cygyMDApLnNlbmQodXNlcikpXG4gICAgICAgIC5jYXRjaCgoZXJyb3I6IEVycm9yKTogZXhwcmVzcy5SZXNwb25zZSA9PiByZXMuc3RhdHVzKDQwMCkuc2VuZChlcnJvcikpOyAvLyBFcnJvclxufTtcblxuZXhwb3J0IGNvbnN0IHRlc3ROZXN0ID0gKHJlcTogVXNlckdldFJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSk6IGFueSA9PiB7XG4gICAgbG9nZ2VyLmxvZyhyZXEuYm9keSk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdGVzdDogJ0hlbGxvJyxcbiAgICB9O1xufTtcbiIsIi8vIEFwcGxpY2F0aW9uIGVudHJ5LCBzZXR0aW5nIHVwIHNlcnZlclxuaW1wb3J0IGFwcCBmcm9tICcuL2FwcCc7IC8vIFRoZSBleHByZXNzIGFwcCB3ZSBqdXN0IGNyZWF0ZWRcblxuY29uc3QgcG9ydCA9IHBhcnNlSW50KHByb2Nlc3MuZW52LlBPUlQsIDEwKSB8fCA1MDAwOyAvLyBVc2UgcG9ydCA1MDAwXG5hcHAuc2V0KCdwb3J0JywgcG9ydCk7XG5cbi8vIDAuMC4wLjAgbWFrZXMgaXQgYXZhaWxhYmxlIG9uIHlvdXIgbG9jYWwgbmV0d29ya1xuLy8gYXBwLmxpc3Rlbihwb3J0LCAnMC4wLjAuMCcpO1xuYXBwLmxpc3Rlbihwb3J0KTtcbiIsImltcG9ydCB7XG4gICAgQWxsb3dOdWxsLFxuICAgIEJlbG9uZ3NUbyxcbiAgICBDb2x1bW4sXG4gICAgQ3JlYXRlZEF0LFxuICAgIEZvcmVpZ25LZXksXG4gICAgTW9kZWwsXG4gICAgVGFibGUsXG4gICAgVXBkYXRlZEF0LFxufSBmcm9tICdzZXF1ZWxpemUtdHlwZXNjcmlwdCc7XG5pbXBvcnQgUG9kY2FzdCBmcm9tICcuL3BvZGNhc3QnO1xuXG5AVGFibGUoeyB0YWJsZU5hbWU6ICdFcGlzb2RlJyB9KVxuY2xhc3MgRXBpc29kZSBleHRlbmRzIE1vZGVsPEVwaXNvZGU+IHtcbiAgICBAQWxsb3dOdWxsKGZhbHNlKVxuICAgIEBDb2x1bW5cbiAgICB0aXRsZTogc3RyaW5nO1xuXG4gICAgQENvbHVtblxuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG5cbiAgICBAQ29sdW1uXG4gICAgcHViRGF0OiBEYXRlO1xuXG4gICAgQENvbHVtblxuICAgIGxpbms6IHN0cmluZztcblxuICAgIEBDb2x1bW5cbiAgICBhdWRpb0xpbms6IHN0cmluZztcblxuICAgIC8vIE1BUks6IE9uZSB0byBNYW55IFBvZGNhc3RcbiAgICBARm9yZWlnbktleSgoKSA9PiBQb2RjYXN0KVxuICAgIEBDb2x1bW5cbiAgICBwb2RjYXN0SWQ6IG51bWJlcjtcblxuICAgIEBCZWxvbmdzVG8oKCkgPT4gUG9kY2FzdClcbiAgICBwb2RjYXN0OiBQb2RjYXN0O1xuXG4gICAgQENvbHVtblxuICAgIHRyYW5zY3JpcHQ6IHN0cmluZztcblxuICAgIEBDcmVhdGVkQXRcbiAgICBjcmVhdGVkQXQ6IERhdGU7XG5cbiAgICBAVXBkYXRlZEF0XG4gICAgdXBkYXRlZEF0OiBEYXRlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBFcGlzb2RlO1xuIiwiaW1wb3J0IHtcbiAgICBBbGxvd051bGwsXG4gICAgQ29sdW1uLFxuICAgIENyZWF0ZWRBdCxcbiAgICBIYXNNYW55LFxuICAgIE1vZGVsLFxuICAgIFRhYmxlLFxuICAgIFVwZGF0ZWRBdCxcbn0gZnJvbSAnc2VxdWVsaXplLXR5cGVzY3JpcHQnO1xuaW1wb3J0IFBvZGNhc3QgZnJvbSAnLi9wb2RjYXN0JztcblxuQFRhYmxlKHsgdGFibGVOYW1lOiAnR2VucmUnIH0pXG5jbGFzcyBHZW5yZSBleHRlbmRzIE1vZGVsPEdlbnJlPiB7XG4gICAgQEFsbG93TnVsbChmYWxzZSlcbiAgICBAQ29sdW1uXG4gICAgbmFtZTogc3RyaW5nO1xuXG4gICAgQENvbHVtblxuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG5cbiAgICBASGFzTWFueSgoKSA9PiBQb2RjYXN0KVxuICAgIHBvZGNhc3RzOiBQb2RjYXN0W107XG5cbiAgICBAQ3JlYXRlZEF0XG4gICAgY3JlYXRlZEF0OiBEYXRlO1xuXG4gICAgQFVwZGF0ZWRBdFxuICAgIHVwZGF0ZWRBdDogRGF0ZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgR2VucmU7XG4iLCJpbXBvcnQgeyBTZXF1ZWxpemUgfSBmcm9tICdzZXF1ZWxpemUtdHlwZXNjcmlwdCc7XG5pbXBvcnQgRXBpc29kZSBmcm9tICcuL2VwaXNvZGUnO1xuaW1wb3J0IEdlbnJlIGZyb20gJy4vZ2VucmUnO1xuaW1wb3J0IFBvZGNhc3QgZnJvbSAnLi9wb2RjYXN0JztcblxuaW1wb3J0IGxvZ2dlciA9IHJlcXVpcmUoJ2hlcm9rdS1sb2dnZXInKTsgLy8gRm9yIGxvZ2dpbmcgdG8gdGhlIGxvZyBoZXJva3UgbG9nIGZpbGVcblxuaW1wb3J0IGNvbmZpZ0ZpbGUgPSByZXF1aXJlKCcuLi9jb25maWcvY29uZmlnLmpzb24nKTtcblxuZGVjbGFyZSB2YXIgcHJvY2Vzczoge1xuICAgIGVudjoge1xuICAgICAgICBOT0RFX0VOVjogc3RyaW5nO1xuICAgICAgICBEQVRBQkFTRV9VUkw6IHN0cmluZztcbiAgICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgKCk6IHZvaWQgPT4ge1xuICAgIHZhciBlbnYgPSBwcm9jZXNzLmVudi5OT0RFX0VOViB8fCAnZGV2ZWxvcG1lbnQnOyAvLyBEZXRlcm1pbmUgaWYgdXNpbmcgZGV2ZWxvcG1lbnRcbiAgICAvLyBjb25zdCBfX2Rpcm5hbWUgPSBwcm9jZXNzLmVudi5QV0Q7IC8vIENvdWxkIGJyZWFrIG9uIHByb2RcbiAgICAvLyBjb25zdCBjdXJyZW50RGlyID0gcGF0aC5qb2luKF9fZGlybmFtZSwgJy4vc2VydmVyL3NyYy9tb2RlbHMnKTtcblxuICAgIC8vIFJlZ3VsYXIgYG1vZHVsZS5maWxlbmFtZWAgaXMgdW5kZWZpbmVkIGluIGxvY2FsIGRldlxuICAgIC8vIGNvbnN0IGZpbGVuYW1lID0gbW9kdWxlLmZpbGVuYW1lICE9PSB1bmRlZmluZWQgPyBtb2R1bGUuZmlsZW5hbWUgOiAnaW5kZXgudHMnO1xuICAgIC8vIHZhciBiYXNlbmFtZSA9IHBhdGguYmFzZW5hbWUoZmlsZW5hbWUpO1xuXG4gICAgdmFyIGRiOiBhbnkgPSB7fTtcblxuICAgIC8vIEkgdXNlIHRoZSBub2RlLWNvbmZpZyBwYWNrYWdlIHRvIG1hbmFnZSB0aGUgREIgY29uZmlnIHlvdSBjYW4gY2hvb3NlXG4gICAgLy8gdG8gc3RpY2sgd2l0aCB0aGUgb3JpZ2luYWwgdmVyc2lvbi4gQW5kIEkgcmVtb3ZlZCBlbnZpcm9ubWVudCB2YXJpYWJsZVxuICAgIC8vIHN1cHBvcnQgYmVjYXVzZSBJIGRvbid0IG5lZWQgaXQuXG4gICAgbGV0IHNlcXVlbGl6ZTogYW55ID0ge307XG4gICAgY29uc29sZS5sb2cocHJvY2Vzcy5lbnYuTk9ERV9FTlYpOyAvLyBUT0RPOiBGb3Igc29tZSByZWFzb24sIGluIHByb2R1Y3Rpb24sIHRoaXMgcmVhZHMgYXMgJ2RldmVsb3BtZW50J1xuICAgIGxvZ2dlci5pbmZvKGBwcm9jZXNzLmVudi5OT0RFX0VOVjogJHtwcm9jZXNzLmVudi5OT0RFX0VOVn1gKTtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIC8vIEZyb20gdGhlIGVudmlyb25tZW50LCBleHRyYWN0IHRoZSBrZXkgd2l0aCB0aGUgbmFtZSBwcm92aWRlZCBpbiB0aGUgY29uZmlnIGFzIHVzZV9lbnZfdmFyaWFibGVcbiAgICAgICAgLy8gYW5kIHVzZSB0aGF0IHRvIGVzdGFibGlzaCBhIGNvbm5lY3Rpb24gdG8gb3VyIGRhdGFiYXNlLlxuICAgICAgICBjb25zb2xlLmxvZygnVXNpbmcgZGF0YWJhc2UgVVJMOicsIHByb2Nlc3MuZW52LkRBVEFCQVNFX1VSTCk7XG4gICAgICAgIGxvZ2dlci5pbmZvKCdVc2luZyBkYXRhYmFzZSBVUkw6JywgeyB1cmw6IHByb2Nlc3MuZW52LkRBVEFCQVNFX1VSTCB9KTtcbiAgICAgICAgc2VxdWVsaXplID0gbmV3IFNlcXVlbGl6ZShwcm9jZXNzLmVudi5EQVRBQkFTRV9VUkwpOyAvLyBFc3RhYmxpc2ggY29ubmVjdGlvbiB1c2luZyBlbnZpcm9ubWVudCB2YXJpYWJsZXNcbiAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgY29uZmlnID0gY29uZmlnRmlsZVtlbnZdOyAvLyBJZiBsb2NhbCwgdXNlIGNvbmZpZ1xuICAgICAgICBjb25zb2xlLmxvZygnVXNpbmcgbG9jYWwgY29uZmlndXJhdGlvbjonLCBjb25maWcpO1xuICAgICAgICBsb2dnZXIuaW5mbygnVXNpbmcgbG9jYWwgY29uZmlndXJhdGlvbjonLCB7IGNvbmZpZyB9KTtcbiAgICAgICAgc2VxdWVsaXplID0gbmV3IFNlcXVlbGl6ZSh7XG4gICAgICAgICAgICAuLi5jb25maWcsXG4gICAgICAgICAgICAvLyBkYXRhYmFzZTogY29uZmlnLmRhdGFiYXNlLFxuICAgICAgICAgICAgLy8gdXNlcm5hbWU6IGNvbmZpZy51c2VybmFtZSxcbiAgICAgICAgICAgIC8vIHBhc3N3b3JkOiBjb25maWcucGFzc3dvcmQsXG4gICAgICAgIH0pOyAvLyBDb25uZWN0XG4gICAgfVxuXG4gICAgc2VxdWVsaXplLmFkZE1vZGVscyhbUG9kY2FzdCwgRXBpc29kZSwgR2VucmVdKTtcbiAgICAvLyBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgLy8gICAgIHNlcXVlbGl6ZS5zeW5jKCk7IC8vIERvbid0IGNvcnJ1cHQgcHJvZHVjdGlvbiBkYXRhXG4gICAgLy8gfSBlbHNlIHtcbiAgICAvLyBzZXF1ZWxpemUuc3luYyh7IGZvcmNlOiB0cnVlIH0pOyAvLyBUT0RPOiBSZW1vdmUgYmVmb3JlIGxpdmVcbiAgICBzZXF1ZWxpemUuc3luYyh7IGFsdGVyOiB0cnVlIH0pO1xuICAgIC8vIHNlcXVlbGl6ZS5zeW5jKCk7XG4gICAgLy8gfVxuXG4gICAgZGIuc2VxdWVsaXplID0gc2VxdWVsaXplO1xuICAgIGRiLlNlcXVlbGl6ZSA9IFNlcXVlbGl6ZTtcbn07XG4iLCJpbXBvcnQge1xuICAgIEFsbG93TnVsbCxcbiAgICBCZWxvbmdzVG8sXG4gICAgQ29sdW1uLFxuICAgIENyZWF0ZWRBdCxcbiAgICBGb3JlaWduS2V5LFxuICAgIEhhc01hbnksXG4gICAgTW9kZWwsXG4gICAgVGFibGUsXG4gICAgVXBkYXRlZEF0LFxufSBmcm9tICdzZXF1ZWxpemUtdHlwZXNjcmlwdCc7XG5pbXBvcnQgRXBpc29kZSBmcm9tICcuL2VwaXNvZGUnO1xuaW1wb3J0IEdlbnJlIGZyb20gJy4vZ2VucmUnO1xuXG5AVGFibGUoeyB0YWJsZU5hbWU6ICdQb2RjYXN0JyB9KVxuY2xhc3MgUG9kY2FzdCBleHRlbmRzIE1vZGVsPFBvZGNhc3Q+IHtcbiAgICBAQWxsb3dOdWxsKGZhbHNlKVxuICAgIEBDb2x1bW5cbiAgICBuYW1lOiBzdHJpbmc7XG5cbiAgICBAQWxsb3dOdWxsKGZhbHNlKVxuICAgIEBDb2x1bW5cbiAgICBhdXRob3I6IHN0cmluZztcblxuICAgIEBDb2x1bW5cbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuXG4gICAgQENvbHVtblxuICAgIGltYWdlOiBzdHJpbmc7XG5cbiAgICAvLyBNQVJLOiBHZW5yZVxuICAgIEBGb3JlaWduS2V5KCgpID0+IEdlbnJlKVxuICAgIEBDb2x1bW5cbiAgICBnZW5yZUlkOiBudW1iZXI7XG5cbiAgICBAQmVsb25nc1RvKCgpID0+IEdlbnJlKVxuICAgIGdlbnJlOiBHZW5yZTtcblxuICAgIC8vIE1BUks6IEVwaXNvZGVcbiAgICBASGFzTWFueSgoKSA9PiBFcGlzb2RlKVxuICAgIGVwaXNvZGVzOiBFcGlzb2RlW107XG5cbiAgICBAQ3JlYXRlZEF0XG4gICAgY3JlYXRlZEF0OiBEYXRlO1xuXG4gICAgQFVwZGF0ZWRBdFxuICAgIHVwZGF0ZWRBdDogRGF0ZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9kY2FzdDtcbiIsImltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgeyBnZXRVc2VyLCB0ZXN0TmVzdCB9IGZyb20gJy4uL2NvbnRyb2xsZXJzL3VzZXInO1xuXG5leHBvcnQgZGVmYXVsdCAoYXBwOiBleHByZXNzLkFwcGxpY2F0aW9uKTogdm9pZCA9PiB7XG4gICAgYXBwLmdldCgnL2FwaS91c2VyLzppZCcsIGdldFVzZXIpO1xuXG4gICAgYXBwLnBvc3QoJy9hcGkvbmVzdCcsIHRlc3ROZXN0KTtcbn07XG4iLCIvLyBzZXJ2ZXIvcm91dGVzL2luZGV4LmpzXG4vLyBBUEkgcm91dGUgdGhhdCBtYXBzIGZ1bmN0aW9uYWxpdHlcbmltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgKiBhcyBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IEV4YW1wbGVSb3V0ZXMgZnJvbSAnLi9leGFtcGxlUm91dGVzJztcblxuLy8gUmVxdWlyZXMgYW4gYXBwIGFzIGFuIGlucHV0IHNvIGNhbiBkaXJlY3QgdGhlIHVzZXIgYWNjb3JkaW5nbHlcbmNvbnN0IHJvdXRlcyA9IChhcHA6IGV4cHJlc3MuQXBwbGljYXRpb24pOiB2b2lkID0+IHtcbiAgICAvLyBNb2R1bGFyIHJvdXRlc1xuICAgIEV4YW1wbGVSb3V0ZXMoYXBwKTtcblxuICAgIC8vIFNlcnZlIHN0YXRpYyBmaWxlc1xuICAgIGFwcC51c2UoZXhwcmVzcy5zdGF0aWMoJy4vY2xpZW50L2J1aWxkJykpO1xuXG4gICAgYXBwLmdldCgnL2Zhdmljb24ucG5nJywgKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UpOiB2b2lkID0+IHtcbiAgICAgICAgY29uc3QgX19kaXJuYW1lID0gcHJvY2Vzcy5lbnYuUFdEO1xuICAgICAgICByZXMuc2VuZEZpbGUoJ2Zhdmljb24ucG5nJywgeyByb290OiBwYXRoLmpvaW4oX19kaXJuYW1lLCAnLi9jbGllbnQvYXNzZXRzJykgfSk7XG4gICAgfSk7XG5cbiAgICAvLyBDbGllbnQgYXBwIGVudHJ5IGluZGV4Lmh0bWwgZmlsZSAtIHJlYWN0IHJvdXRlclxuICAgIGFwcC5nZXQoJyonLCAocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSk6IHZvaWQgPT4ge1xuICAgICAgICBjb25zdCBfX2Rpcm5hbWUgPSBwcm9jZXNzLmVudi5QV0Q7XG4gICAgICAgIHJlcy5zZW5kRmlsZSgnaW5kZXguaHRtbCcsIHsgcm9vdDogcGF0aC5qb2luKF9fZGlybmFtZSwgJy4vY2xpZW50L2J1aWxkJykgfSk7IC8vIFJlbmRlciBjbGllbnRcbiAgICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJvdXRlcztcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJhYmVsLXBvbHlmaWxsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJvZHktcGFyc2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImRvdGVudlwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3MtcXVlcnktaW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImhlcm9rdS1sb2dnZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9yZ2FuXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2VxdWVsaXplLXR5cGVzY3JpcHRcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==