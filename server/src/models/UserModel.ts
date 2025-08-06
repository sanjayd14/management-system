
import { User } from "../entities/UserEntity";
export class UserResponse {
  id: number;
  name: string;
  username: string;
  role:string;
  created_at:Date;

  constructor(user: User) {
    this.id = user.user_id;
    this.name = user.name;
    this.username = user.username;
    this.role = user.role;
    this.created_at = user.created_at;
  }
}
