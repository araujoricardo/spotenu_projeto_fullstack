import {Roles} from "../models/Roles";
import {Status} from "../models/Status";
import { UserDatabase } from "../data/UserDatabase";
import { failureMessage } from "../models/messages";

export class ActiveUser{

    public defineDefaultStatus(role:string):Status{
        
        switch(Roles[role as Roles]){
            case `${Roles.band}`:{
                return Status.waiting;
            };
            default:{
                return Status.active;
            };
        };
    };

    public async checkItsActive(id: string):Promise<void>{
        const user = await new UserDatabase().getUserById(id);

        if(user.status !== Status.active){
            throw new Error(failureMessage.active);
        };
    };
};