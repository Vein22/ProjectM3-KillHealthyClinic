import { Router } from "express";
import turnsRouter from "./turnsRouter"
import usersRouter from "./usersRouter"
import auth from "../middlewares/auth"

const indexRouter: Router = Router();

indexRouter.use("/users", auth, usersRouter);
indexRouter.use("/turns", auth, turnsRouter);

export default indexRouter;