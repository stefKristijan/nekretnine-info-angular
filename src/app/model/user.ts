import { Role } from './role';

export class User{

    id: number;
    uId: string;
    firstName: string;
    lastName: string;
    username:string;
    password:string;
    email: string;
    role: Role;
    enabled: boolean;

}