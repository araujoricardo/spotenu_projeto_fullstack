import { BaseDatabase } from "./BaseDatabase";
import { GenreInputDTO } from "../dto/GenreDTO";


export class GenreDatabase extends BaseDatabase{

    public async createGenre(body: GenreInputDTO):Promise<void>{
        await super.getConnection()
            .insert(body)
            .into(BaseDatabase.TABLE_GENRE);
    };

    public async getAllGenre():Promise<any>{
        const genres = await super.getConnection()
            .select("*")
            .into(BaseDatabase.TABLE_GENRE);

        return genres;
    };

};