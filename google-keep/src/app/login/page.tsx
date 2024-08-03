'use client'
import { PrismaClient } from "@prisma/client/extension";
import { error } from "console";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import toast, { Toaster } from 'react-hot-toast';


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const session = useSession();
    const router = useRouter();

    useEffect(() => {
        if(session?.status === 'authenticated'){
            console.log("going to dashboard")
            router.replace("/dashboard");
        }
    }, [session, router])

    const handleLoginSubmit = async (e:any) => {
        e.preventDefault();
        const res = await signIn('credentials', {
            redirect:false,
            email,
            password
        })
        toast.success("Login Successfull")
        if(res.status == 200){
            router.replace('/dashboard')
        }
    }
  return (
        <div className="flex h-[650px]">
            <div className="bg-gray-100 p-7 h-[400px] w-[400px] m-auto rounded-md shadow-lg">
                <div className="text-center m-5">
                <span className="text-3xl text-transparent font-bold bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 font-mono">
                    Login
                 </span>
                </div>
                <form onSubmit={handleLoginSubmit} className="max-w-sm mx-auto">
                    <div className="mb-5">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium">Email</label>
                        <input type="text" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="your@gmail.com" required onChange={e => {setEmail(e.target.value)}}/>
                    </div>
                    <div className="mb-5">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium">Password</label>
                        <input type="password" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="your@gmail.com" required onChange={e => {setPassword(e.target.value)}}/>
                    </div>
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
                </form>
                <div className="text-center">
                    New User ? <Link className="underline text-blue-500" href={'/register'}>Register</Link>
                </div>
            </div>
            <Toaster />
        </div>
  )
}

export default Login
