'use client'

import Link from "next/link";
import { REGISTER_USER } from "../../hooks/registerUser";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/navigation";
import toast, { Toaster } from 'react-hot-toast';

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const router = useRouter();
    const [registerUserFunction] = useMutation(REGISTER_USER)    

    const handleRegisterSubmit = async(e:any) => {
        e.preventDefault();
        try{
            const res = await registerUserFunction({
                variables:{
                    name:name,
                    email:email,
                    password:password
                }
            })
            if(res.data){
                console.log("go to login")
                toast.success("register successfully !", {
                    duration: 3000
                })
                router.push("/login")
            }
        } catch(error){
            console.log("some error")
        }
    }
    
    return(
        <div className="flex h-[650px]">
            <div className="bg-gray-100 p-7 h-[500px] w-[450px] m-auto rounded-md shadow-lg">
                <div className="text-center m-5">
                <span className="text-3xl text-transparent font-bold bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 font-mono">
                    Register
                 </span>
                </div>
                <form onSubmit={handleRegisterSubmit} className="max-w-sm mx-auto">
                <div className="mb-5">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium">Name</label>
                        <input type="text" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name" required onChange={e => {setName(e.target.value)}}/>
                    </div>
                    <div className="mb-5">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium">Email</label>
                        <input type="text" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="your@gmail.com" required onChange={e => {setEmail(e.target.value)}}/>
                    </div>
                    <div className="mb-5">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium">Password</label>
                        <input type="password" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="your@gmail.com" required onChange={e => {setPassword(e.target.value)}}/>
                    </div>
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register</button>
                </form>
                <div className="text-center mt-4">
                    Existing User ? <Link className="underline text-blue-500" href={'/login'}>Login</Link>
                </div>
            </div>
            <Toaster />
        </div>
    )
}

export default Register;
