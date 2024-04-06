import { Request, Response } from "express";
import { Turn } from "../entities/Turn";
import { getTurnsService, getTurnByIdService, createTurnService, cancelTurnByIdService } from "../services/turnsServices"

export const getAllTurns = async (req: Request, res: Response) => {
    const turns: Turn[] = await getTurnsService();
    res.status(200).json(turns);
};

export const getTurnById = async (req: Request, res: Response) => {
    const turnId = parseInt(req.params.id);
    const turn = await getTurnByIdService(turnId);
    if (turn) {
        res.json(turn);
    } else {
        res.status(404).json({ message: 'Turn not found.' }) 
    }
};

export const schedule = async (req: Request, res: Response) => {
    const {date, time, userId, status} = req.body;
    const turnId = await createTurnService({date, time, userId, status});
    res.status(201).json({message: "Successfully created turn.", turnId})
};

export const cancel = async (req: Request, res: Response) => {
    const turnId = parseInt(req.params.id);
    await cancelTurnByIdService(turnId);
    res.status(200).json({ message: "Turn cancelled successfully.", turnId});
};
