'use client'
import React, { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react';
import {redirect, useRouter} from 'next/navigation';
import NoteListCom from './NoteListCom';
import AllTagList from '../components/TagList/AllTagList';
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';

const Dashboard = () => {
    // should be able to fetch from server side session for from client side session
    // this is not working for some reason   
    // const session = await getServerSession(authOptions);
    // console.log(session)
    // if(!session){
    //     console.log(session);
    //     console.log('session')
    //     redirect('/');
    // }
    // const userEmail = session.user.email;
    // const sort = 'default';
       
    const {data:session, status} = useSession();
    const router = useRouter();
    const [userEmail, setUserEmail] = useState(""); 
    const [sort, setSort] = useState("default");

    useEffect(() => {
        if(status === 'unauthenticated'){
            console.log("going to main page");
            router.replace("/")
        }
        if(session){ 
            setUserEmail(session.user.email);
        }
    },[session, router, status]);
    
    return (
    <div>
        {session &&

                <> <div className="flex min-h-screen">
            <div className="w-full max-w-[150px] p-4 bg-gray-100">
                <AllTagList email={userEmail}/>
                </div>  
                    
                <div className="flex-1 bg-gray-200 p-4"><NoteListCom sort={sort} email={userEmail}/></div>
            </div>
</> }
    </div>
  )
}

export default Dashboard;
