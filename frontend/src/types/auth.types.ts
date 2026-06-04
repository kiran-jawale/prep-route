export interface User {
  _id:string;
  userId:string;
  fullName:string;
  email:string;
}

export interface AuthState {
  status:boolean;
  user:User | null;
}