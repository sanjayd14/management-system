export interface CreateUserModel {
  name: string;
  username: string;
  password: string;
  role: "admin" | "employee" | "owner";
}