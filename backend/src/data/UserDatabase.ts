import {BaseDatabase} from "./BaseDatabase";
import {SignUpInputDTO} from "../dto/UserDTO";

export class UserDatabase extends BaseDatabase{

    public async createUser(body: SignUpInputDTO):Promise<void>{
        await super.getConnection()
            .insert(body)
            .into(BaseDatabase.TABLE_USER);
    };
};