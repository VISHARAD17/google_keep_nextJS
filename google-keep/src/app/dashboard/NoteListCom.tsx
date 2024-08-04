'use client'
import { useGetAllNoteByEmail } from '@/hooks/noteHooks';
import NoteCard from './NoteCard';

const NoteListCom = ({email}) => {
    console.log(`getting data for email ${email}`);
  const { data, error, loading } = useGetAllNoteByEmail({email});

  const handlClick = () => {
    console.log("handle click")
  }

  return (
    <div className="p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {data?.getAllNotesByEmail.map((note) => (
            <NoteCard key={note.id} note={note} />
          ))}
        </div>

      <div className='bg-gray-100'>
        <button onClick={handlClick}>Add</button>
      </div>
      </div>
  )
}

export default NoteListCom