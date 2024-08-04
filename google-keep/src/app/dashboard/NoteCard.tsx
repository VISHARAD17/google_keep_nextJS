'use client'

import React, { useState } from 'react';
import { DELETE_NOTE, UPDATE_NOTE } from './mutations';
import { useMutation } from '@apollo/client';

export default function NoteCard({ note }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState(note.title);
    const [editedContent, setEditedContent] = useState(note.content);
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
            console.log(res)
            setIsEditing(false);
            location.reload();
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
            console.log(res)
            location.reload()
        } catch (error) {
            console.error('Failed to delete note:', error);
        }
    };


    return (
        <div className={`p-4 rounded-lg shadow-md ${isEditing ? 'bg-blue-100 ring-2 ring-blue-500' : 'bg-white hover:bg-gray-50'}`}>
            {isEditing ? (
                <>
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
                    <div className="flex justify-between">
                        <button
                            className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 transition-colors duration-300"
                            onClick={useHandleSave}
                        >
                            Save
                        </button>
                        <button
                            className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition-colors duration-300"
                            onClick={useHandleDelete}
                        >
                            Delete
                        </button>
                    </div>
                </>
            ) : (
                <>
                    <h3 className="text-lg font-semibold mb-2">{note.title}</h3>
                    <p className="text-gray-600">
                        {note.content.length > 50
                            ? note.content.substring(0, 50) + '...'
                            : note.content}
                    </p>
                    <button
                        className="mt-2 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300"
                        onClick={() => setIsEditing(true)}
                    >
                        Edit
                    </button>
                </>
            )}
        </div>
    );
}