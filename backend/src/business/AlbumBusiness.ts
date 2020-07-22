import { AlbumDataDTO, AlbumInputDTO } from "../dto/AlbumDTO";
import { IdGenerator } from "../services/IdGenerator";
import { AlbumDatabase } from "../data/AlbumDatabase";
import { Validator } from "../services/Validator";
import { Authenticator } from "../services/Authenticator";
import { ActiveUser } from "../services/ActiveUser";
import { GenreAlbumDatabase } from "../data/GenreAlbumDatabase";
import { GenreAlbumInputDTO } from "../dto/GenreAlbumDTO";


export class AlbumBusiness{

    public async createAlbum(data:AlbumDataDTO):Promise<void>{
        const id = new IdGenerator().generate();

        const loggedUser = new Authenticator().getData(data.token);

        const validator = new Validator();
        validator.band(loggedUser);
        await validator.genres(data.genres);

        await new ActiveUser().checkItsActive(loggedUser.id);

        const newAlbum:AlbumInputDTO={
            id: id,
            name: data.name,
            band_id: loggedUser.id
        };

        await new AlbumDatabase().createAlbum(newAlbum);

        const genres = new GenreAlbumDatabase;

        for(let i=0; i<data.genres.length; i++){

            const newReferences: GenreAlbumInputDTO = {
                genre_id: data.genres[i],
                album_id: id
            };

            await genres.createNewReference(newReferences);
        };
    };

};