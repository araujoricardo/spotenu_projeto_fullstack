import { failureMessage } from "../models/messages";
import { Roles } from "../models/Roles";
import { Status } from "../models/Status";
import { Authenticator } from "./Authenticator";
import { AuthenticatorData } from "../models/AuthenticatorData";
import { UserDatabase } from "../data/UserDatabase";
import { GenreDatabase } from "../data/GenreDatabase";


export class Validator{
    public email(email: string):void{

        if(email.includes("@") && email.includes(".com")){
            return;
        };

        throw new Error(failureMessage.email);
    };

    public role(role:string):void{

        if( Roles[role as Roles] === undefined){
            throw new Error(failureMessage.role);
        };
    };

    public status(status:string):void{
        if(Status[status as Status] === undefined){
            throw new Error(failureMessage.status);
        };
    };

    public admin(token:string):void{
        const loggedUser = new Authenticator().getData(token);

        if(loggedUser.role !== Roles.admin){
            throw new Error(failureMessage.admin);
        };
    };

    public band(user:AuthenticatorData):void{
        
        if(user.role !== Roles.band){
            throw new Error(failureMessage.band);
        };
    };

    public async genres(genres: string[]):Promise<void>{

        if(genres[0]===undefined){
            throw new Error(failureMessage.noGenre);
        };

        const dbGenres = await new GenreDatabase().getAllGenre();

        for(let i=0;i<genres.length; i++){
            
            let exist = false;
            for(let j=0;j<dbGenres.length;j++){
                
                if(dbGenres[j].id === genres[i]){
                    exist = true;
                    break;
                };

            };

            if(exist === false){
                throw new Error(failureMessage.genre);
            };
            
        };
    }
};