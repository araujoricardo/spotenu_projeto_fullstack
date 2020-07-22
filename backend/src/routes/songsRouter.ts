import {Router} from "express";
import { SongsController } from "../controllers/SongsDatabase";


export const songsRouter = Router();

songsRouter.post("/create", new SongsController().createSongs);
songsRouter.get("/all", new SongsController().getAllSongs);