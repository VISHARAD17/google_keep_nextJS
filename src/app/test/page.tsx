'use client'
import React, { useEffect, useState } from 'react'
import NoteListCom from '../dashboard/NoteListCom';

const Dashboard = () => {
    const userEmail = 'email1';
    return (
    <div>
        <NoteListCom email={userEmail}/>
    </div>
  )
}

export default Dashboard;
