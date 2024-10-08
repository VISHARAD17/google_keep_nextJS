'use client'
import { useGetAllNoteByEmail } from '@/hooks/noteHooks';
import NoteCard from './NoteCard';
import { useEffect, useState } from 'react';
import AddNoteModal from './AddNoteModel';
import AddIcon from '@mui/icons-material/Add';

const NoteListCom = ({ email, sort }) => {
    console.log(`getting data for email ${email}`);
    const {data} = useGetAllNoteByEmail({ email });
    const [noteData, setNoteData] = useState(data?.getAllNotesByEmail.notes || []);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const userId = data?.getAllNotesByEmail.user.id;

    const handleAddNote = (title:string, content:string) => {
        console.log('Adding note:', { title, content });
        setNoteData((prevNotes) => [...prevNotes, {title:title, content:content}]);
        setIsModalOpen(false);
    };

    useEffect(() => {
        if(data){
            setNoteData(data.getAllNotesByEmail.notes)
        }
    },[data]);


    const handleUpdateNote = (updatedNote) => {
    setNoteData((prevNotes) =>
        prevNotes.map((note) => (note.id === updatedNote.id ? updatedNote : note))
    );
};

const handleDeleteNote = (noteId) => {
    setNoteData((prevNotes) => prevNotes.filter((note) => note.id !== noteId));
};


    return (
        <div className="p-4">
            <div className="grid grid-cols-3 gap-2">
                {noteData.map((note:any) => (
                <NoteCard key={note.id} 
                        note={note} 
                        onDelete={handleDeleteNote}
                        onUpdate={handleUpdateNote}
                    />

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
