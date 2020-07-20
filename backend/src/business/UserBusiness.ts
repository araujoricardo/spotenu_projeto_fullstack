import {HashManager} from "../services/HashManager";
import {SignUpDataDTO, LoginDataDTO, StatusDataDTO, StatusInputDTO} from "../dto/UserDTO";
import {IdGenerator} from "../services/IdGenerator";
import {ActiveUser} from "../services/ActiveUser";
import {SignUpInputDTO} from "../dto/UserDTO"
import { Roles } from "../models/Roles";
import { UserDatabase } from "../data/UserDatabase";
import { Authenticator } from "../services/Authenticator";
import { failureMessage } from "../models/messages";
import { Validator } from "../services/Validator";
import { Status } from "../models/Status";

export class UserBusiness{

    public async signUp(data: SignUpDataDTO):Promise<string>{

        const hashedPassword = await new HashManager().hash(data.password);
        const id = new IdGenerator().generate();

        const active = new ActiveUser;
        const status = active.defineDefaultStatus(data.role);

        const user: SignUpInputDTO={
            id: id,
            name: data.name,
            nickname: data.nickname,
            description: data.description,
            email: data.email,
            password: hashedPassword,
            role: data.role as Roles,
            status: status
        };

        const validator = new Validator;
        validator.email(user.email);
        validator.role(user.role);

        if(user.role === Roles.admin){
            validator.admin(data.token as string);
        };

        if(user.role !== Roles.band && user.description !==undefined){
            throw new Error(failureMessage.description);
        };
      
        await new UserDatabase().createUser(user);

        const token = new Authenticator().generateAccessToken(
            {id: user.id, role: user.role}
        );

        return token;
    };


    public async login(data: LoginDataDTO):Promise<string>{

        const loggedUser = await new UserDatabase().getUser(data.emailOrNickname);

        if(!loggedUser){
            throw new Error(failureMessage.login);
        };

        const authorization = await new HashManager().compare(
            data.password, loggedUser.password
        );

        if(!authorization){
            throw new Error(failureMessage.wrongPassword);
        };

        const token = new Authenticator().generateAccessToken(
            {id: loggedUser.id, role: loggedUser.role}
        );
        
        return token;
    };


    public async updateStatus(data: StatusDataDTO){

        new Validator().admin(data.token);

        new Validator().status(data.status);

        const newStatus: StatusInputDTO = {
            id: data.id,
            status: data.status as Status
        };

        await new UserDatabase().updateStatus(newStatus);
    };

};