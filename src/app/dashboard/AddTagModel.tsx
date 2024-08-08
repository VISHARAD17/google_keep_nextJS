'use client'
import { useMutation } from "@apollo/client"
import { useState } from "react"
import { ADD_NEW_TAG_FOR_NOTE } from "./mutations"
import toast, { Toaster } from "react-hot-toast"

const AddTagModal = ({isOpen, onClose, onAdd, userId, noteId }) => {
    const [tag, setTag] = useState('')

    const [addTagFunction] = useMutation(ADD_NEW_TAG_FOR_NOTE);

    const handleSubmit = async () => {
        console.log(tag);
        onAdd(tag);

        try{
            const res = await addTagFunction({
                variables:{
                    name:tag,
                    userId:userId,
                    noteId: noteId
                }
            })
            console.log(res.errors);
            location.reload();

        }catch(e){
            toast.error(`errpr saving ${e}`);
            console.log(`error saving : ${e}`);
        }
    }
    if(!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-xl font-semibold mb-4">Add New Note</h2>
                <input
                    type="text"
                    placeholder="Title"
                    value={tag}
                    onChange={(e) => setTag(e.target.value)}
                    className="w-full p-2 mb-4 border rounded"
                />
                <div className="flex justify-end space-x-4">
                    <button
                        onClick={handleSubmit}
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300"
                    >
                        Add Tag
                    </button>
                    <button
                        onClick={onClose}
                        className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors duration-300"
                    >
                        Cancel
                    </button>
                </div>
            </div>
            <Toaster/>
        </div>
    );
}

export default AddTagModal;
