import { DataSource } from "typeorm";
import { Credential } from "../entities/Credential";
import { Turn } from "../entities/Turn";
import { User } from "../entities/User";
import { HOST,PORTDB, USERNAMEDB, PASSWORD, DATABASE } from "./envs";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: HOST,
    port: Number(PORTDB),
    username: "postgres",
    password: PASSWORD,
    database: DATABASE,
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
