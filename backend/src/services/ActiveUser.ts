import {Roles} from "../models/Roles";
import {Status} from "../models/Status";
import {failureMessage} from "../models/messages"
import { Authenticator } from "./Authenticator";

export class ActiveUser{

    public validateRole(role:string):Status{
        
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

    public validadeNewAdmin(token:string):void{

        const loggedUser = new Authenticator().getData(token);

        if(loggedUser.role !== Roles.admin){
            throw new Error(failureMessage.admin);
        };
    };
};