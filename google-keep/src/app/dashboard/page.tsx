'use client'
import React, { useEffect, useState } from 'react'
import { BookList } from "../ui/components/BookList/BookList";
import { OneBookList } from "../ui/components/BookList/OneBookList";
import { useSession } from 'next-auth/react';
import {useRouter} from 'next/navigation';
import UserData from '../ui/components/BookList/UserData';
import NoteList from '../components/NoteList';
import { useGetAllNotes } from '@/hooks/getAllNote';
import { useGetOneUser } from '@/hooks/getOneUser';
import { useGetUserByEmail } from '@/hooks/registerUser';
import NoteListCom from './NoteListCom';

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
    // const {data, error, loading} = useGetUserByEmail({email:userEmail});
    const [userId, setUserId] = useState(null);

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
        {session && <NoteListCom email={userEmail}/> }
    </div>
  )
}

export default Dashboard;
