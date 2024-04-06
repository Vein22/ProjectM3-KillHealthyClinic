import { DataSource } from "typeorm";
import { Credential } from "../entities/Credential";
import { Turn } from "../entities/Turn";
import { User } from "../entities/User";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "program",
    database: "demo_typeorm",
    // dropSchema: true,
    synchronize: true,
    logging: false,
    entities: [User, Turn, Credential],
    subscribers: [],
    migrations: [],
})

export const UserModel = AppDataSource.getRepository(User);
export const TurnModel = AppDataSource.getRepository(Turn);
export const CredentialModel = AppDataSource.getRepository(Credential);
