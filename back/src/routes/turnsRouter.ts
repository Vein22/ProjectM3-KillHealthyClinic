import { Router } from "express";
import { cancel, schedule, getAllTurns, getTurnById } from "../controllers/turnsController"

const turnsRouter: Router = Router();

turnsRouter.get("/", getAllTurns);

turnsRouter.get("/:id", getTurnById);

turnsRouter.post("/schedule", schedule);

turnsRouter.delete("/cancel/:id", cancel);

export default turnsRouter;


