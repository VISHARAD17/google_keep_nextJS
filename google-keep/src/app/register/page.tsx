'use client'

import Link from "next/link";
import { REGISTER_USER } from "../hooks/registerUser";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/navigation";

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setpassword] = useState("");
    const [status, setStatus] = useState("status msg")
    const router = useRouter();
    const [registerUserFunction, {data, loading, error}] = useMutation(REGISTER_USER)    

    const handlRegisterSubmit = async(e:any) => {
        e.preventDefault();
        setStatus("Loading");
        try{
            const res = await registerUserFunction({
                variables:{
                    name:"visharad",
                    email:email,
                    password:password
                }
            })
            if(res.data){
                router.push("/success")
            }
        } catch(error){
            console.log("some error")
        }
    }
    
    return(
        <div>
            <h1>Register</h1>
                <form onSubmit={handlRegisterSubmit}>
                    <input type='text' placeholder="Email" required onChange={e => {setEmail(e.target.value)}} />
                    <input type='text' placeholder="password" required onChange={e => {setpassword(e.target.value)}} />
                    <button  type="submit">register</button>  
                </form>
                <br/>
                <p>{status}</p>
                <Link href={'/login'}>Login with existing account</Link>
            </div>
    )
}

export default Register;
