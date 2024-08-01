'use client'
import React, { useEffect, useState } from 'react'
import { BookList } from "../ui/components/BookList/BookList";
import { OneBookList } from "../ui/components/BookList/OneBookList";
import { useSession } from 'next-auth/react';
import { redirect, useRouter} from 'next/navigation';
import UserData from '../ui/components/BookList/UserData';
import { getSession } from 'next-auth/react';
import { authOptions } from '../api/auth/[...nextauth]/route';


const Dashboard = () => {
    // should be able to fetch email from session and print it
    // this is not working for some reason   
    // const session = await getServerSession(authOptions);
    // console.log(session)
    // if(!session){
    //     console.log(session);
    //     redirect('/')
    // }
    
    const {data:session, status} = useSession();
    const router = useRouter();
    const [userEmail, setUserEmail] = useState("");
    
    useEffect(() => {
        if(status === 'unauthenticated'){
            console.log(status)
            console.log("going to main page");
            router.replace("/")
        }
        if(session) setUserEmail(session.user.email);
    },[session, router, status]);

    return (
    <div>
        {session && <><BookList/>
        <br/>
        One Book List        
        <UserData email={session.user.email}/>
        <OneBookList/></> }
    </div>
  )
}

export default Dashboard;
