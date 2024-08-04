import { useGetAllNoteByEmail, useGetAllNotes } from '@/hooks/getAllNote'
import React from 'react'
import { Note } from '@/lib/definitions';
import TagList from './TagList';

const NoteList = ({email}) => {
    // const {data, error, loading} = useGetAllNotes(id);
    const {data, error, loading} = useGetAllNoteByEmail({email});
    console.log(data);
    return (
      <div>
        NoteList for user with mail : {email}
        {/* {data?.getAllNotesByEmail.map((note:Note) => (
            <ul key={note.id}>
              <li>note title: {note.title}</li>
              <li>note content: {note.content}</li>
              <li>userId: {note.userId}</li>
              <TagList id={note.id}/> 
            </ul>
        ))} */}

       <div className='bg-gray-100'>
          <div className='font-mono'>Title</div>
          <div>Content</div>
          <div>TagList</div>
          <div>
            <button>Edit</button>
            <button>delete</button>
            <button>Edit</button>
          </div>
       </div> 

      </div>
    )
}

export default NoteList
