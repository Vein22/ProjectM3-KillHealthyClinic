import { Request, Response } from "express";
import { User } from "../entities/User";
import { createCredentials, validateCredentials } from "../services/credentialsServices";
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
    try {
        const { name, email, birthdate, nDni, username, password } = req.body;

        if (!name || !email || !birthdate || !nDni || !username || !password) {
            return res.status(400).json({ message: "All data are required." });
        }
        const user = await createUserService({ name, email, birthdate, nDni, username, password });

        const credentialsId = await createCredentials({username, password});

        return res.status(201).json({ message: "User and credentials created successfully.", user, credentialsId });
    } catch (error) {
        console.error("Error registering user:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

export const login = async (req: Request, res: Response) => {
    const { username, password } = req.body;

    const userId = await validateCredentials({username, password});

    if (userId) {
        const user = await getUserByIdService(userId);
        if (user) {
            res.status(200).json({ login: true, user });
        } else {
            res.status(500).json({ message: "Internal server error." });
        }
    } else {
        res.status(400).json({ login: false, message: "Invalid username or password." });
    }
};


