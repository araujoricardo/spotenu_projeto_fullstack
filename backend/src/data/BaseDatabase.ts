import knex from "knex";
import Knex from "knex";

export class BaseDatabase{

    protected static TABLE_USER: string = "s20_users";
    protected static TABLE_GENRE: string = "s20_genre";
    protected static TABLE_ALBUM: string = "s20_album";
    protected static TABLE_GENRE_ALBUM: string = "s20_genre_album";
    private static connection: Knex | null = null;

    protected getConnection(): knex{
        if(!BaseDatabase.connection){
            BaseDatabase.connection = knex({
                client: "mysql",
                connection:{
                    host: process.env.DB_HOST,
                    port: Number(process.env.DB_PORT),
                    user: process.env.DB_USER,
                    password: process.env.DB_PASSWORD,
                    database: process.env.DB_DATABASE_NAME
                }
            });
        };
        return BaseDatabase.connection;
    };

    public async destroyConnection():Promise<void>{
        if(BaseDatabase.connection){
            await BaseDatabase.connection.destroy();
            BaseDatabase.connection = null;
        };
    };
};