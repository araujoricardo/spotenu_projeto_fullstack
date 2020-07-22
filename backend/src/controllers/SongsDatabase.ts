import { Request, Response } from 'express';
import { BaseDatabase } from '../data/BaseDatabase';
import { SongsDataDTO } from '../dto/SongsDTO';
import { SongsBusiness } from '../business/SongsBusiness';
import { sucessMessage } from '../models/messages';
import { SongsDatabase } from '../data/SongsDatabase';


export class SongsController{

    public async createSongs(req: Request, res: Response){
        try{
            const data: SongsDataDTO = {
                name: req.body.name,
                token: req.headers.auth as string
            };

            await new SongsBusiness().createSong(data);

            res.status(200).send(sucessMessage.createSong);
        }catch(error){
            res.status(400).send({ message: error.message });
        }finally{
            await new BaseDatabase().destroyConnection();
        };
    };

    public async getAllSongs(req: Request, res: Response){
        try{

            const songs = await new SongsDatabase().getAllSongs();

            res.status(200).send(songs);
        }catch(error){
            res.status(400).send({ message: error.message });
        }finally{
            await new BaseDatabase().destroyConnection();
        };
    };


};