import {Router} from "express";
import {UserController} from "../controllers/UserController";

export const authRouter = Router();

authRouter.post("/signup", new UserController().signUp);
