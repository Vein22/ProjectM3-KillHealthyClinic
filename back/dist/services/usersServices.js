"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserService = exports.getUserByIdService = exports.getUsersService = void 0;
const credentialsServices_1 = require("./credentialsServices");
let usersDB = [];
const getUsersService = () => __awaiter(void 0, void 0, void 0, function* () {
    return usersDB;
});
exports.getUsersService = getUsersService;
const getUserByIdService = (userID) => __awaiter(void 0, void 0, void 0, function* () {
    return usersDB.find(user => user.id === userID) || null;
});
exports.getUserByIdService = getUserByIdService;
const createUserService = (userData) => __awaiter(void 0, void 0, void 0, function* () {
    const nextId = usersDB.length + 1;
    (0, credentialsServices_1.createCredentials)(`user${nextId}`, `password${nextId}`);
    const newUser = {
        id: nextId,
        name: userData.name,
        email: userData.email,
        birthdate: userData.birthdate,
        nDni: userData.nDni,
        credentialsId: userData.credentialsId
    };
    usersDB.push(newUser);
    return newUser;
});
exports.createUserService = createUserService;
