import {HashManager} from "../services/HashManager";
import {SignUpDataDTO} from "../dto/UserDTO";
import {IdGenerator} from "../services/IdGenerator";
import {ActiveUser} from "../services/ActiveUser";
import {SignUpInputDTO} from "../dto/UserDTO"
import { Roles } from "../models/Roles";
import { UserDatabase } from "../data/UserDatabase";
import { Authenticator } from "../services/Authenticator";

export class UserBusiness{

    public async signUp(data: SignUpDataDTO){

        const hashedPassword = await new HashManager().hash(data.password)
        const id = new IdGenerator().generate();
        const status = new ActiveUser().active(data.role);

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

        new UserDatabase().createUser(user);

        const token = new Authenticator().generateAccessToken(
            {id: user.id, role: user.role}
        )

        return token;
    };

};