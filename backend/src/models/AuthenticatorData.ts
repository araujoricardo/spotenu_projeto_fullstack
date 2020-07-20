import { Roles } from "./Roles";

export interface AuthenticatorData{
    id: string;
    device?: string;
    role: Roles
};