import { connectToDB } from "../database/connectTodb";

export class InitializationService{
    static async init(){
        console.log(`Connecting to DB`);
        try{
            await connectToDB();
        }catch(err){
            console.log(`Error while connecting to DB : ${err}`);
        }
    }
}