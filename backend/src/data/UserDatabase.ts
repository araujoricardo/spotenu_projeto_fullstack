import {BaseDatabase} from "./BaseDatabase";

export class UserDatabase extends BaseDatabase{

    public async createUser(body: any):Promise<void>{
        await super.getConnection()
            .insert(body)
            .into(BaseDatabase.TABLE_USER);
    };





}

//TO DO: DTO body createUser