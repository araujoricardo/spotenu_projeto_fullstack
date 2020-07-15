import {Roles} from "../models/Roles";
import {Status} from "../models/Status";
import {failureMessage} from "../models/messages"

export class ActiveUser{

    public active(role:string){
        
        if( Roles[role as Roles] === undefined){
            throw new Error(failureMessage.role);
        };

        switch(Roles[role as Roles]){
            case `${Roles.band}`:{
                return Status.waiting;
            };
            default:{
                return Status.active;
            };
        };
    };
};