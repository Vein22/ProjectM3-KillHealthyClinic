"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CredentialModel = exports.TurnModel = exports.UserModel = exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const Credential_1 = require("../entities/Credential");
const Turn_1 = require("../entities/Turn");
const User_1 = require("../entities/User");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "program",
    database: "demo_typeorm",
    // dropSchema: true,
    synchronize: true,
    logging: false,
    entities: [User_1.User, Turn_1.Turn, Credential_1.Credential],
    subscribers: [],
    migrations: [],
});
exports.UserModel = exports.AppDataSource.getRepository(User_1.User);
exports.TurnModel = exports.AppDataSource.getRepository(Turn_1.Turn);
exports.CredentialModel = exports.AppDataSource.getRepository(Credential_1.Credential);
