"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const turnsRouter_1 = __importDefault(require("./turnsRouter"));
const usersRouter_1 = __importDefault(require("./usersRouter"));
const auth_1 = __importDefault(require("../middlewares/auth"));
const indexRouter = (0, express_1.Router)();
indexRouter.use("/users", auth_1.default, usersRouter_1.default);
indexRouter.use("/turns", auth_1.default, turnsRouter_1.default);
exports.default = indexRouter;
