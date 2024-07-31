'use client'
import React, { useEffect, useState } from 'react'
import { BookList } from "../ui/components/BookList/BookList";
import { OneBookList } from "../ui/components/BookList/OneBookList";
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useGetOneUser } from '../hooks/getOneUser';
import UserData from '../ui/components/BookList/UserData';


const Dashboard = () => {
    // should be able to fetch email from session and print it
    // this is not working for some reason   
    // const session = await getServerSession();
    // console.log(session)
    // if(!session){
    //     console.log(session);
    //     redirect('/')
    // }
    
    const {data:session} = useSession();
    const router = useRouter();
    const [userEmail, setUserEmail] = useState("");
    
    useEffect(() => {
        if(!session){
            router.replace('/')
        }
        else{
            setUserEmail(session.user.email)

        }
    }, [session, router])

    return (
    <div>
            {session && (<><BookList/>
        <br/>
        One Book List for user email : {userEmail}           
        <UserData email={userEmail}/>
        <OneBookList/></>)}
    </div>
  )
}

export default Dashboard
