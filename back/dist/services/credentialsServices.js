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
exports.validateCredentials = exports.createCredentials = void 0;
const credentialsDB = [];
const createCredentials = (username, password) => __awaiter(void 0, void 0, void 0, function* () {
    const nextId = credentialsDB.length + 1;
    const newCredential = {
        id: nextId,
        username,
        password
    };
    credentialsDB.push(newCredential);
    return nextId;
});
exports.createCredentials = createCredentials;
const validateCredentials = (username, password) => __awaiter(void 0, void 0, void 0, function* () {
    for (const credential of credentialsDB) {
        if (credential.username === username && credential.password === password) {
            return credential.id;
        }
    }
    return null;
});
exports.validateCredentials = validateCredentials;
