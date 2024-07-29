import { mutations } from "../apis/resolvers/mutaions";
import { comparePassword, generateToken, hashPassword, verifyGoogleToken } from "./auth";
import { Context } from "../lib/types";
import { GraphQLError, GraphQLID } from "graphql";
import { PrismaClient } from "@prisma/client";
import { decode } from "jsonwebtoken";

const prisma = new PrismaClient();
export const AuthResolvers  = {
    mutations: {

        // sign in 
        signUp: async(_:unknown, args:{name:string, email:string, password:string}) => {
            const {name, email, password} = args;
            const existingUser = await prisma.user.findUnique({where: {email}})

            if(existingUser){
                throw new GraphQLError("user already exists plz user another email", 
                    { extensions: { code:'FORBIDDEN' }}); 
            }

            const hashedPassword = await hashPassword(password);
            const user = await prisma.user.create({
                data: {name, email, password:hashedPassword}
            });

            const token = generateToken(user);
            console.log("decoded code: ", decode(token))
            return {token, user};
        },

        signIn: async(_:unknown, args:{email:string, password:string}) => {
            const {email, password} = args;
            const user = await prisma.user.findUnique({where: {email:email}});
            if(!user){
                throw new GraphQLError("Invalid Credentials", 
                    {extensions: {code: 'FORBIDDEN'}});
            }
            const isValidPassword = await comparePassword(password, user.password);
            if(!isValidPassword){
                console.log("invalid password");
                throw new GraphQLError("wrong password", {extensions:{code: 'BAD_REQUEST'}});
            }
            console.log("valid password")
            const token = generateToken(user);
            return {token, user};
        },


        googleSignIn: async(_:unknown, args:{ token: string }) => {
            const { token } = args;
            const password = "googleSignIn";
            const email = await verifyGoogleToken(token);
            if (!email) {
                throw new GraphQLError("invalid google token", 
                    { extensions: { code:'FORBIDDEN' }}); 
            }

            let user = await prisma.user.findUnique({ where: { email } });
            if (!user) {
                user = await prisma.user.create({
                    data: {email:email, googleId:email, password:password},
                });
            }

            const jwtToken = generateToken(user);
            return { token: jwtToken, user };
        },
    }
}
