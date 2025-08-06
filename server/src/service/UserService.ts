import { UserResponse } from "../models/UserModel";
import { User } from "../entities/UserEntity"
import { CreateUserModel } from "../models/CreateUserModel";
export class UserService{

    static async getallusers(){
       try{
        const users = await User.find();
        return users.map(user=>new UserResponse(user));
    }
    catch(error){
        console.log(`Error fetching User Details : ${error}`);
        //exception to be added
    }
        
    }

    static async getbyuserid(user_id:number){
        const user = await User.createQueryBuilder().select().where("user_id =:user_id",{ user_id: user_id }).getOne();;
            if (!user) {
             return null;//exception to be added
    }
    return new UserResponse(user);
    }

    static async createuser(user_details:CreateUserModel){
        const user = User.create({
        name: user_details.name,
        username: user_details.username,
        password: user_details.password,
        role: user_details.role
        });

        const saved_user = await user.save();
        return new UserResponse(saved_user);
        
    }
}