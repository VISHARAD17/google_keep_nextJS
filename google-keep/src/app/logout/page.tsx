'use client'
import { useGetAllNotes } from '@/hooks/noteHooks';
import NoteCard from '../dashboard/NoteCard';
import { useState } from 'react';

export default function Logout(){
  const { data, error, loading } = useGetAllNotes({ id: 2 });
  
  const handlClick = () => {
    console.log("add new Note")
  }
    return (
      <div className="p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {data?.getAllNoteForUser.map((note) => (
            <NoteCard key={note.id} note={note} />
          ))}
        </div>

      <div className='bg-gray-100'>
        <button onClick={handlClick}>Add</button>
      </div>
      </div>
    );
}
