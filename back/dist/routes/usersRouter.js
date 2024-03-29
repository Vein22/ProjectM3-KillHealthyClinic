"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usersController_1 = require("../controllers/usersController");
const usersRouter = (0, express_1.Router)();
usersRouter.get("/", usersController_1.getAllUsers);
usersRouter.get("/:id", usersController_1.getUserById);
usersRouter.post("/register", usersController_1.register);
exports.default = usersRouter;
