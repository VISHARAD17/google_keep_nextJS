'use client'
import { useGetAllNoteByEmail } from '@/hooks/noteHooks';
import NoteCard from './NoteCard';
import { useState } from 'react';
import AddNoteModal from './AddNoteModel';
import { useGetOneUserByEmail } from './mutations';

const NoteListCom = ({ email }) => {
  console.log(`getting data for email ${email}`);
  const {data} = useGetAllNoteByEmail({ email });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const userId = data?.getAllNotesByEmail.user.id;

  const handleAddNote = (title:string, content:string) => {
    console.log('Adding note:', { title, content });
    setIsModalOpen(false);
  };

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {data?.getAllNotesByEmail.notes.map((note) => (
          <NoteCard key={note.id} note={note} />
        ))}
      </div>


      <div className='text-right m-5'>
        <button
          onClick={() => setIsModalOpen(true)} 
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors duration-300"
        >
          Add
        </button>
      </div>

      <AddNoteModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAdd={handleAddNote}
        userId ={userId}
      />
    </div>
  )
}

export default NoteListCom
