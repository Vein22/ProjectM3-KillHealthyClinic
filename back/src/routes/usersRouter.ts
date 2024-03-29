import { Router } from "express";
import { register, getAllUsers, getUserById} from "../controllers/usersController"

const usersRouter: Router = Router()

usersRouter.get("/", getAllUsers);

usersRouter.get("/:id", getUserById);

usersRouter.post("/register", register);

export default usersRouter;



