import { BaseDatabase } from "./BaseDatabase";
import { SongsInputDTO } from "../dto/SongsDTO";


export class SongsDatabase extends BaseDatabase{

    public async createSong(body: SongsInputDTO){
        await super.getConnection()
            .insert(body)
            .into(BaseDatabase.TABLE_SONGS)
    };

    public async getAllSongs():Promise<any>{
        const songs = await super.getConnection().raw(`
            SELECT * FROM ${BaseDatabase.TABLE_SONGS}
        `);

        return songs[0][0];
    };
};