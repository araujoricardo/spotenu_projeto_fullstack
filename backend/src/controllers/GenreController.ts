import { Request, Response } from 'express';
import { BaseDatabase } from '../data/BaseDatabase';
import { GenreDataDTO } from '../dto/GenreDTO';
import { GenreBusiness } from '../business/GenreBusiness';
import { sucessMessage } from '../models/messages';
import { GenreDatabase } from '../data/GenreDatabase';


export class GenreController{

    public async createGenre(req: Request, res: Response){
        try{
            const data: GenreDataDTO = {
                genre: req.body.genre,
                token: req.headers.auth as string
            };
        
            await new GenreBusiness().createGenre(data);

            res.status(200).send(sucessMessage.createGenre);
        }catch(error){
            res.status(400).send({ message: error.message });
        }finally{
            await new BaseDatabase().destroyConnection();
        };
    };


    public async getAllGenre(req: Request, res: Response){
        try{
            const genres = await new GenreDatabase().getAllGenre();

            res.status(200).send(genres);
        }catch(error){
            res.status(400).send({ message: error.message });
        }finally{
            await new BaseDatabase().destroyConnection();
        };
    };
};