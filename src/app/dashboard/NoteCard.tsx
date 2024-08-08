'use client'

import React, { useState } from 'react';
import { DELETE_NOTE, DELETE_TAG, UPDATE_NOTE } from './mutations';
import { useMutation, useQuery } from '@apollo/client';
import AddTagModal from './AddTagModel';
import TagList from '../components/TagList/TagList';
import { Toaster } from 'react-hot-toast';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';

export default function NoteCard({ note , onDelete, onUpdate}) {
    const [isEditing, setIsEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState(note.title);
    const [editedContent, setEditedContent] = useState(note.content);
    const [isModalOpen, setIsModelOpen] = useState(false);
    const [deleteNoteFunction] = useMutation(DELETE_NOTE);
    const [updateFunction] = useMutation(UPDATE_NOTE);

    const useHandleSave = () => {
        console.log("hitting save")
        try {
            const res = updateFunction({
                variables: {
                    noteId:note .id,
                    title: editedTitle,
                    content: editedContent
                }
            });
            console.log(res);

            setIsEditing(false);
            onUpdate({ ...note, title: editedTitle, content: editedContent });
            // location.reload();
        } catch (error) {
            console.error('Failed to update note:', error);
        }
    };

    const useHandleDelete = async () => {
        console.log("hitting delete")
        try {

            const res = await deleteNoteFunction({
                variables: {
                    noteId: note.id
                }
            });
            console.log(res);
            onDelete(note.id);
            // location.reload()
        } catch (error) {
            console.error('Failed to delete note:', error);
        }
    };

    const handleTag = (name:string, userId:number, noteId:number) => {
        setIsModelOpen(false);
    }

    return (
        <div>
            {isEditing ? (
                
        <div className={`p-4 rounded-lg shadow-md ${isEditing ? 'bg-blue-100 ring-2 ring-blue-500' : 'bg-white hover:bg-gray-50'}`}>

                    <input
                        className="w-full p-2 mb-2 border rounded text-lg font-semibold"
                        value={editedTitle}
                        onChange={(e) => setEditedTitle(e.target.value)}
                    />
                    <textarea
                        className="w-full p-2 mb-4 border rounded"
                        value={editedContent}
                        onChange={(e) => setEditedContent(e.target.value)}
                    />
                        <TagList noteId={note.id}/>
                    <div className="flex justify-between">
                        <button
                            className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 transition-colors duration-300"
                            onClick={useHandleSave}
                        >
                            Save
                        </button>
                        <button
                            className="mt-2 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300" 
                            onClick={() => setIsEditing(false) }
                        >
                            Close
                        </button>
                        <button
                            className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition-colors duration-300"
                            onClick={useHandleDelete}
                        >
                            <DeleteIcon/>
                        </button>
                    </div>
                </div>
            ) : (
        <div className={`p-4 rounded-lg shadow-md ${isEditing ? 'bg-blue-100 ring-2 ring-blue-500' : 'bg-white hover:bg-gray-50'}`}>
                    <h3 className="text-lg font-semibold mb-2">{note.title}</h3>
                    <div className="text-gray-600 break-words">
                        {note.content}
                    </div>
                        <TagList noteId={note.id}/>
                        <div className='flex justify-between'>
                        <button
                        className="mt-2 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300"
                        onClick={() => setIsEditing(true)}
                        >
                        <EditIcon/>
                    </button>
                    <button
                            className="mt-2 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300" 
                            onClick={() => setIsModelOpen(true) }
                        >
                            <AddIcon/>
                        </button>
                    </div> 
                    <AddTagModal
                        isOpen={isModalOpen}
                        onClose={() => setIsModelOpen(false)}
                        onAdd={handleTag}
                        userId={note.userId}
                        noteId={note.id}
                    />
                    <Toaster/>
                </div>
            )}
            </div>
    );
}
