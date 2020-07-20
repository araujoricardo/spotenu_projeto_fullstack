import {Router} from "express";
import {UserController} from "../controllers/UserController";

export const userRouter = Router();

userRouter.post("/signup", new UserController().signUp);
userRouter.get("/login", new UserController().login);
userRouter.post("/updatestatus", new UserController().updateStatus);
