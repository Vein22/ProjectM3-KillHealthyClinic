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

    if (!date || !time || !userId) {
        return res.status(400).json({ message: "Invalid request data. Make sure to provide all required fields." });
    }
    const finalStatus = status && status.toLowerCase() === "active" ? "active" : "cancelled";
    if (status && finalStatus !== "active") {
        return res.status(400).json({ message: "Invalid status value. Status must be 'Active'." });
    }

    const turnId = await createTurnService({date, time, userId, status: finalStatus});
    res.status(201).json({message: "Successfully created turn.", turnId})
};

export const cancel = async (req: Request, res: Response) => {
    try {
        const turnId = parseInt(req.params.id); 
        await cancelTurnByIdService(turnId); 
        res.status(200).json({ message: "Turn canceled successfully." });
    } catch (error) {
        console.error('Error canceling Turn:', error);
        res.status(500).json({ message: 'Error canceling Turn' });
    }
};