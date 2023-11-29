
export type User = {
    id: number;
    firstName: string; 
    lastName: string;
    username: string;
    email: string;
}

export type AuthData = User | null;

export type UserGetDto = {
    id: number;
    firstName: string; 
    lastName: string;
    username: string;
    email: string;
}

export type UserRegistrationDto = {
    firstName: string; 
    lastName: string;
    username: string;
    password: string;
    email: string;
}

export type AccountLoginRequestDto = {
    username: string;
    password: string;
}