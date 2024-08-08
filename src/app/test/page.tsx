'use client'
import React, { useEffect, useState } from 'react'
import NoteListCom from '../dashboard/NoteListCom';
import TagList from '../components/TagList/TagList';
import AllTagList from '../components/TagList/AllTagList';

const Dashboard = () => {
    const userEmail = 'email1';
    return (
        <div className="flex min-h-screen">
            <div className="w-full max-w-[150px] p-4 bg-gray-100">
                <AllTagList email={userEmail}/>
                </div>  
                    
                <div className="flex-1 bg-gray-200 p-4"><NoteListCom email={userEmail}/></div>
            </div>
  )
}

export default Dashboard;
