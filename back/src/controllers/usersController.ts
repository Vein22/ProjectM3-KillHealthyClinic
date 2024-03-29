import { Request, Response } from "express";

export const getAllUsers = async (req: Request, res: Response) => {
    res.send("vamos a obtener todos los usuarios");
};
export const getUserById = async (req: Request, res: Response) => {
    res.send("vamos a obtener un usuario por id");
};
export const register = async (req: Request, res: Response) => {
    res.send("vamos a crer un nuevo usuario");
};
