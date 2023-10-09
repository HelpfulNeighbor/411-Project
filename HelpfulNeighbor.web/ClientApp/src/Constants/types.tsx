export type ApiResponse<T> = {
    data: T;
    errors: Error[];
    hasErrors: boolean;
};

export type Error = {
    property: string;
    message: string;    
};

export type AnyObject = {
    [index: string]: any;
  };

  export type Role = "Basic" | "Admin" ;

  export type User = {
    id: number,
    firstName: string,
    lastName: string,
    username: string,
    email: string,
    roles: Role[],
}
  
  export type UserDto = {
    id: number;
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    roles: Role[];
  };

  export type LoginDto = {
    usrname: string
    password: string
}

  export type CreateUserDto = {
    firstName: string,
    lastName: string,
    username: string;
    password: string;
    email: string;
    roles: string[];
}

export type UpdateUserDto = {
    firstName: string,
    lastName: string,
    username: string,
    email: string;
}