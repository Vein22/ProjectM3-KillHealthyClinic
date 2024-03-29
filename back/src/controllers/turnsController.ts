import { Request, Response } from "express";

export const getAllTurns = async (req: Request, res: Response) => {
    res.send("vamos a obtener todos los turnos");
};
export const getTurnById = async (req: Request, res: Response) => {
    res.send("vamos a obtener un turno por id");
};
export const schedule = async (req: Request, res: Response) => {
    res.send("vamos a agendar un turno");
};
export const cancel = async (req: Request, res: Response) => {
    res.send("vamos a cancelar un turno");
};
