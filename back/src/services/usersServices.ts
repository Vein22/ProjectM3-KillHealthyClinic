import IUser from "../interfaces/IUser";
import UserDto from "../dto/UserDto"
import { createCredentials } from "./credentialsServices";

let usersDB: IUser[] = [];

export const getUsersService = async (): Promise<IUser[]> => {
    return usersDB
};

export const getUserByIdService = async (userID: number): Promise<IUser | null> => {
    return usersDB.find(user => user.id === userID) || null;
};

export const createUserService = async (userData: UserDto): Promise<IUser> => {
    const nextId = usersDB.length + 1;

   createCredentials(`user${nextId}`, `password${nextId}`);

    const newUser: IUser = {
        id: nextId, 
        name: userData.name,
        email: userData.email,
        birthdate: userData.birthdate,
        nDni: userData.nDni,
        credentialsId: userData.credentialsId
    };

    usersDB.push(newUser);

    return newUser;
}
