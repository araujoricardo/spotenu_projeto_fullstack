import * as jwt from "jsonwebtoken";
import { Roles } from "../models/Roles";

export class Authenticator{
    private static ACCESS_EXPIRES_IN = "1d";

    public generateAccessToken(data: AuthenticatorData):string{
        return jwt.sign(data, process.env.JWT_KEY as string,{
            expiresIn: Authenticator.ACCESS_EXPIRES_IN,
        });
    };

    public getData (token: string): AuthenticatorData {
        const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
        const result = {
            id: payload.id,
            role: payload.role
        };
        return result;
    };
};

export interface AuthenticatorData{
    id: string;
    device?: string;
    role: Roles
};