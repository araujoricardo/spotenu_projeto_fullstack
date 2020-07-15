import {Roles} from "../models/Roles";
import {Status} from "../models/Status";

export interface SignUpInputDTO{
    id: string,
    name: string,
    nickname: string,
    description: string | null
    email: string,
    password: string,
    role: Roles,
    status: Status
};

export interface SignUpDataDTO{
    name: string,
    nickname: string,
    description: string | null
    email: string,
    password: string,
    role: string,
};