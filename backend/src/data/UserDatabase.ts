import {BaseDatabase} from "./BaseDatabase";
import {SignUpInputDTO, StatusInputDTO} from "../dto/UserDTO";

export class UserDatabase extends BaseDatabase{

    public async createUser(body: SignUpInputDTO):Promise<void>{
        await super.getConnection()
            .insert(body)
            .into(BaseDatabase.TABLE_USER);
    };

    public async getUser(emailOrNickname: string):Promise<any>{
        const user = await super.getConnection().raw(`
            SELECT * FROM ${BaseDatabase.TABLE_USER}
            WHERE email = '${emailOrNickname}' OR nickname = '${emailOrNickname}'
        `);
        return user[0][0];
    };

    public async updateStatus(body: StatusInputDTO):Promise<any>{
        await super.getConnection().raw(`
            UPDATE ${BaseDatabase.TABLE_USER} SET
            status = '${body.status}' WHERE id = '${body.id}'
        `);
    };

    public async getUserById(id : string):Promise<any>{
        const user = await super.getConnection().raw(`
            SELECT * FROM ${BaseDatabase.TABLE_USER}
            WHERE id = '${id}'
        `);

        return user[0][0];
    };
};