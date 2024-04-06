import { Request, Response } from "express";
import { User } from "../entities/User";
import { getUsersService, getUserByIdService, createUserService } from "../services/usersServices"


export const getAllUsers = async (req: Request, res: Response) => {
    const users: User[] = await getUsersService();
    res.status(200).json(users);
};

export const getUserById = async (req: Request, res: Response) => {
    const userId = parseInt(req.params.id);
    const user = await getUserByIdService(userId);
    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ message: 'User not found.' }) 
    }
};

export const register = async (req: Request, res: Response) => {
    const {name, email, birthdate, nDni, credentialsId} = req.body;
    const userId = await createUserService({name, email, birthdate, nDni, credentialsId});
    res.status(201).json({message: "Successfully created user.", userId})
};

export const login = async (req: Request, res: Response) => {
    res.send("vamos a logear al usuario");
};

