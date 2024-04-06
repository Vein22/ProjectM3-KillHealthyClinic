import { Router } from "express";
import turnsRouter from "./turnsRouter"
import usersRouter from "./usersRouter"
import auth from "../middlewares/auth"

const indexRouter: Router = Router();

indexRouter.use("/users", usersRouter);
indexRouter.use("/turns", turnsRouter);

export default indexRouter;