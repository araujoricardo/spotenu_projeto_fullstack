import { Request, Response } from 'express';
import {UserBusiness} from "../business/UserBusiness";
import {SignUpDataDTO, LoginDataDTO, StatusDataDTO} from "../dto/UserDTO";
import { BaseDatabase } from '../data/BaseDatabase';
import { sucessMessage } from '../models/messages';

export class UserController{

    public async signUp(req: Request, res: Response){
        try{
            const data: SignUpDataDTO = {
                name: req.body.name,
                nickname: req.body.nickname,
                description: req.body.description,
                email: req.body.email,
                password: req.body.password,
                role: req.body.role,
                token: req.headers.auth as string
            };

            const token = await new UserBusiness().signUp(data);

            res.status(200).send({token: token});
        }catch(error){
            res.status(400).send({ message: error.message });
        }finally{
            await new BaseDatabase().destroyConnection();
        };
    };

    public async login(req: Request, res: Response){
        try{
            const data: LoginDataDTO = {
                emailOrNickname: req.body.emailOrNickname,
                password: req.body.password
            };

            const token = await new UserBusiness().login(data);

            res.status(200).send({token: token});
        }catch(error){
            res.status(400).send({ message: error.message });
        }finally{
            await new BaseDatabase().destroyConnection();
        };
    };

    public async updateStatus(req: Request, res: Response){
        try{
            const data: StatusDataDTO={
                id: req.body.id,
                status: req.body.status,
                token: req.headers.auth as string
            };

            await new UserBusiness().updateStatus(data);

            res.status(200).send(sucessMessage.updateStatus);
        }catch(error){
            res.status(400).send({ message: error.message });
        }finally{
            await new BaseDatabase().destroyConnection();
        };
    };
};