import {Router} from "express";
import { userRouter } from "./userRouter";
import {genreRouter} from "./genreRouter";
import { albumRouter } from "./albumRouter";

const routes = Router();
routes.use("/user", userRouter);
routes.use("/genre", genreRouter);
routes.use("/album", albumRouter);

export default routes;