import UserDto from "../dto/UserDto"
import { AppDataSource, CredentialModel, UserModel } from "../config/data-source";
import { User } from "../entities/User";

export const getUsersService = async (): Promise<User[]> => {
    const users = await UserModel.find({
        relations:{
            turns: true
        }
    });
    return users;
};

export const getUserByIdService = async (userID: number): Promise<User | null> => {
    const user = await UserModel.findOneBy({
        id: userID
    });
    return user;
};

export const createUserService = async (userData: UserDto): Promise<User> => {
    const user = await UserModel.create(userData);
    const result = await UserModel.save(user);
    return user;
}


