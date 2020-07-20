import { BaseDatabase } from "./BaseDatabase";
import { AlbumInputDTO } from "../dto/AlbumDTO";


export class AlbumDatabase extends BaseDatabase{

    public async createAlbum(body: AlbumInputDTO):Promise<void>{
        await super.getConnection()
            .insert(body)
            .into(BaseDatabase.TABLE_ALBUM);
    };

    
};