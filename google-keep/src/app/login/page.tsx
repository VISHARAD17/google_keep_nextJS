'use client'
import { PrismaClient } from "@prisma/client/extension";
import { error } from "console";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setpassword] = useState("");
    const session = useSession();
    const router = useRouter();

    useEffect(() => {
        if(session?.status === 'authenticated'){
            console.log("going to dashboard")
            router.replace("/dashboard");
        }
    }, [session, router])

    const handlRegisterSubmit = async (e:any) => {
        e.preventDefault();
        e.preventDefault();
        const res = await signIn('credentials', {
            redirect:false,
            email,
            password
        })
        if(res.status == 200){
            router.replace('/dashboard')
        }
    }
  return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handlRegisterSubmit}>
                <input type='text' placeholder="Email" required onChange={e => {setEmail(e.target.value)}} />
                <input type='text' placeholder="password" required onChange={e => {setpassword(e.target.value)}} />
                <button  type="submit">login</button>  
            </form>
            <br/>
            <Link href={'/register'}>register user</Link>
        </div>
  )
}

export default Login
