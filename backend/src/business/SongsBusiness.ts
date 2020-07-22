import { SongsDataDTO, SongsInputDTO } from "../dto/SongsDTO";
import { IdGenerator } from "../services/IdGenerator";
import { Authenticator } from "../services/Authenticator";
import { SongsDatabase } from "../data/SongsDatabase";
import { Validator } from "../services/Validator";


export class SongsBusiness{
    
    public async createSong(data: SongsDataDTO){

        const loggedUser = new Authenticator().getData(data.token); 
        new Validator().band(loggedUser);
        const id = new IdGenerator().generate();
        
        const newSong: SongsInputDTO={
            id: id,
            name: data.name,
            band_id: loggedUser.id
        };

        await new SongsDatabase().createSong(newSong);
    };

};