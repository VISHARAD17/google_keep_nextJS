import { useMutation } from '@apollo/client';
import React, { useState } from 'react';
import { ADD_NEW_NOTE } from './mutations';
import { useRouter } from 'next/navigation';
const AddNoteModal = ({ isOpen, onClose, onAdd , userId}) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const [addNoteFunction] = useMutation(ADD_NEW_NOTE);

    const handleSubmit = async () => {
        console.log("here from addNoteModel component")
        console.log(title, content)
        
        try{
            const res = await addNoteFunction({
                variables:{
                    userId: userId,
                    title: title,
                    content:content
                } })
            // location.reload();

            // const newNote = res.data?.note
            onAdd(title, content);
            setTitle('');
            setContent('');

        }catch(err){
            console.log(`error while saving note, error : ${err}`);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-xl font-semibold mb-4">Add New Note</h2>
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full p-2 mb-4 border rounded"
                />
                <textarea
                    placeholder="Content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className="w-full p-2 mb-4 border rounded"
                />
                <div className="flex justify-end space-x-4">
                    <button
                        onClick={handleSubmit}
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300"
                    >
                        Add
                    </button>
                    <button
                        onClick={onClose}
                        className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors duration-300"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddNoteModal;
