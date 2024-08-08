'use client'
import { useState } from "react"

const AddTagMode = ({isOpen, onClose, onAdd, userId, noteId }) => {
    const [tag, setTag] = useState('')

    const handleSubmit = () => {
        console.log(tag);
        onAdd(tag);

        try{
            const res = 

        }catch(e){
            console.log("error during saving tag");
        }
    }

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
}
