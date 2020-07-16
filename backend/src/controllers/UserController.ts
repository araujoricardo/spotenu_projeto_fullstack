import { Request, Response } from 'express';
import {UserBusiness} from "../business/UserBusiness";
import {SignUpDataDTO} from "../dto/UserDTO";

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
        };


    }
}