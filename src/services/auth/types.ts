export interface IAuthenticateUser {
    email: string;
    password: string;
  }
  
  export interface IAuthenticateUserResponse {
    user: {
      id: number;
      name: string;
      email: string;
      password: string;
      created_at: string;
      updated_at: string | null;
      deleted_at: string | null;
    };
    token: string;
  }
  