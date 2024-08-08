'use client'
import { useGetAllNoteByEmail } from '@/hooks/noteHooks';
import NoteCard from './NoteCard';
import { useState } from 'react';
import AddNoteModal from './AddNoteModel';
import AddIcon from '@mui/icons-material/Add';
import toast from 'react-hot-toast';

const NoteListCom = ({ email, sort }) => {
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
      <div className="grid grid-cols-3 gap-2">
        {data?.getAllNotesByEmail.notes.map((note) => (
          <NoteCard key={note.id} note={note} />
        ))}
      </div>


      <div className='text-right m-5'>
        <button
          onClick={() => setIsModalOpen(true)} 
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors duration-300"
        >
          Add <AddIcon/>

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
