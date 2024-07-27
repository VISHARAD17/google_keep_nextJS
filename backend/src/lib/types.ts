import { PrismaClient } from "@prisma/client";

export interface Tag {
    id:number;
    name:string;
    userId:number;
}

export interface User {
    id:number;
    email:string;
    name?:string;
}

export interface Book {
    id: number;
    name: string;
    author: string;
}

export interface Context {
    prisma: PrismaClient;
    user?: User
}
