import { Router } from "express";
import { GenreController } from "../controllers/GenreController";

export const genreRouter = Router();

genreRouter.post("/create", new GenreController().createGenre);
genreRouter.get("/all", new GenreController().getAllGenre);