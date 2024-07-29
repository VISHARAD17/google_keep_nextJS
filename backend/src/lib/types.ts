import { PrismaClient } from "@prisma/client";
import { verifyToken } from "../authentication/auth";

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
    user: User
}

// export const createContext = ({ req }: { req: Request }) : Promise<Context> => {
//     const token = req.headers.authorization?.split(' ')[1] || '';
//     let user = null;
//     try {
//         const decoded = verifyToken(token);
//         user = { id: decoded.userId };
//     } catch (error) {
//         // Token is invalid or expired
//         console.log("token is invalid");
//     }
//     return {prisma:new PrismaClient(), user} as Context;
// }

export const createContext = async ({res, req}) => {
    let user = null;
    const token = req.headers.authorization || '';
    // console.log("token : ",token)
    const decoded = verifyToken(token);
    user = {id:decoded.userId};
    return {prisma:new PrismaClient(), user};
}

