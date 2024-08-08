'use client'
import React, { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react';
import {useRouter} from 'next/navigation';
import NoteListCom from './NoteListCom';
import AllTagList from '../components/TagList/AllTagList';

const Dashboard = () => {
    // should be able to fetch from server side session for from client side session
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
                    
                <div className="flex-1 bg-gray-200 p-4"><NoteListCom email={userEmail}/></div>
            </div>
</> }
    </div>
  )
}

export default Dashboard;
