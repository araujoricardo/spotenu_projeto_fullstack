import { BaseDatabase } from "./BaseDatabase";
import { GenreAlbumInputDTO } from "../dto/GenreAlbumDTO";


export class GenreAlbumDatabase extends BaseDatabase{

    public async createNewReference(body: GenreAlbumInputDTO):Promise<void>{
        await super.getConnection()
            .insert(body)
            .into(BaseDatabase.TABLE_GENRE_ALBUM);
    };

};