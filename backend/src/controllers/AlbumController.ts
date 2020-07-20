import { BaseDatabase } from "../data/BaseDatabase";
import { Request, Response } from 'express';
import { AlbumDataDTO } from "../dto/AlbumDTO";
import { AlbumBusiness } from "../business/AlbumBusiness";
import { sucessMessage } from "../models/messages";

export class AlbumController{

    public async createAlbum(req: Request, res: Response){
        try{
            const data: AlbumDataDTO ={
                name: req.body.name,
                token: req.headers.auth as string
            };

            await new AlbumBusiness().createAlbum(data);

            res.status(200).send(sucessMessage.createAlbum);
        }catch(error){
            res.status(400).send({ message: error.message });
        }finally{
            await new BaseDatabase().destroyConnection();
        };
    };

};