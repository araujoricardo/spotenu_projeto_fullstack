import { AlbumDataDTO, AlbumInputDTO } from "../dto/AlbumDTO";
import { IdGenerator } from "../services/IdGenerator";
import { AlbumDatabase } from "../data/AlbumDatabase";
import { Validator } from "../services/Validator";
import { Authenticator } from "../services/Authenticator";
import { ActiveUser } from "../services/ActiveUser";


export class AlbumBusiness{

    public async createAlbum(data:AlbumDataDTO):Promise<void>{
        const id = new IdGenerator().generate();

        const loggedUser = new Authenticator().getData(data.token);

        new Validator().band(loggedUser);

        await new ActiveUser().checkItsActive(loggedUser.id);

        const newAlbum:AlbumInputDTO={
            id: id,
            name: data.name,
            band_id: loggedUser.id
        };

        await new AlbumDatabase().createAlbum(newAlbum);
    };

};