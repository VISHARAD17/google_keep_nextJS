import { User } from "@prisma/client";
import bcrypt from 'bcrypt'
import { OAuth2Client } from "google-auth-library";
import jwt from 'jsonwebtoken';



const JWT_SECRET = process.env.SECRET_KEY;
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID

const googleClient = new OAuth2Client(GOOGLE_CLIENT_ID);

export const hashPassword = async (password:string):Promise<string> => {
    return bcrypt.hash(password, 10);
}

export const comparePassword = async(password:string, hashedPassword:string): Promise<boolean> => {
    return bcrypt.compare(password, hashedPassword);
}

export const generateToken = (user: User): string => {
    return jwt.sign({userId: user.id}, JWT_SECRET, {expiresIn: '1d'})
}

export const verifyToken = (token:string):{userId:number} => {
    return jwt.verify(token, JWT_SECRET) as {userId: number};
}

export const verifyGoogleToken = async (token:string): Promise<string> => {
    const ticket = await googleClient.verifyIdToken({
        idToken: token,
        audience:GOOGLE_CLIENT_ID
    });
    const payload = ticket.getPayload();
    return payload?.email || "";
}
