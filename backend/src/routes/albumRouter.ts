import { AlbumController } from "../controllers/AlbumController";
import { Router } from "express";


export const albumRouter = Router();

albumRouter.post("/create", new AlbumController().createAlbum);