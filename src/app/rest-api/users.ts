export interface Users {
    id: number;
    firstName: string;
    lastName: string;
    age: number;
  }
  
  export interface UserResponse {
    users: Users[];
    total: number;
    skip: number;
    limit: number;
  }