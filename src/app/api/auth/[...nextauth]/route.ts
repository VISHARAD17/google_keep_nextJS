import CredentialsProvider from "next-auth/providers/credentials";
import GithubProvider from 'next-auth/providers/github'
import { Account, User as AuthUser } from "next-auth";
import { PrismaClient } from "@prisma/client"
import NextAuth from "next-auth/next";

export const authOptions = {
    providers:[
        CredentialsProvider({
            id:"credentials",
            name: "Credentials",
            credentials:{
                email: {label: "Email", type:"text"},
                password: {label:"password", type:"text"},
            },
            async authorize(credentials:any): Promise<any>{
                const prisma = new PrismaClient();
                 try{
                    const user = await prisma.user.findUnique({
                        where:{
                            email: credentials.email
                        }
                    })
                    if(user){
                        if(credentials.password == user.password){
                            return {
                                id: user.id,
                                email:user.email,
                                name:user.name
                            }
                        }
                        else{
                            throw new Error('password does not match');
                        }
                    }
                }catch (e){
                    throw new Error(`error while logging in : ${e}`);
                }
            }
        }),
        GithubProvider({
            clientId:process.env.GITHUB_ID?? "",
            clientSecret: process.env.GITHUB_SECRET??""
        })
    ]
}

export const handler = NextAuth(authOptions)
export {handler as GET, handler as POST}
