import { GenreDataDTO, GenreInputDTO } from "../dto/GenreDTO";
import { Validator } from "../services/Validator";
import { GenreDatabase } from "../data/GenreDatabase";
import { IdGenerator } from "../services/IdGenerator";


export class GenreBusiness{
    public async createGenre(data: GenreDataDTO):Promise<void>{
        new Validator().admin(data.token);

        const id = new IdGenerator().generate();
        
        const newGenre:GenreInputDTO={
            id: id,
            genre: data.genre
        };

        await new GenreDatabase().createGenre(newGenre);
    };
};