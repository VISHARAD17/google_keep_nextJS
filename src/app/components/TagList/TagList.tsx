import { useGetAllTags } from "@/app/dashboard/mutations";
import { DELETE_TAG } from '../../dashboard/mutations';
import { useMutation } from "@apollo/client";
import CancelIcon from '@mui/icons-material/Cancel';
import AddTagModal from "@/app/dashboard/AddTagModel";
import AddIcon from '@mui/icons-material/Add';
import { useEffect, useState } from "react";


const TagList = ({noteId, userId}) => {
    console.log(`getting tags for noteId ${noteId}`)

    const [isModalOpen, setIsModelOpen] = useState(false);
    const {refetch, tags:tagsData} = useGetAllTags(noteId);
    const [tags, setTags] = useState(tagsData);

    const [deleteTagFunction] = useMutation(DELETE_TAG);

    useEffect(() => {
        if(tagsData){
            setTags(tagsData);
        }
    }, [tagsData]);

    const handleDelete = ({id:id, noteId:noteId}) => {
        console.log(`deleted note for ${id}`);
        try{
        const res = deleteTagFunction({
            variables:{
                tagId: id,
                noteId:noteId
            }
        }).then(() =>{
                setTags(prevTags => prevTags.filter((tag) => tag.id !== id));
            })
        // location.reload();
        }catch(error){
            console.log(`${error}`);
        }
        
    };
    const handleTag = async (tag) => {
        setTags((prevTags) => [...prevTags, tag]); 
        await refetch();
        console.log(tags)
        setIsModelOpen(false);
    }


    return(
        <div>
            <div className="flex flex-wrap space-x-2">
                    {tags?.map((tag:any) => (
                        <div
                            key={tag.id}
                            className="flex items-center bg-green-100 text-green-700 px-3 py-1 rounded-full mb-2"
                        >
                                <span>#{tag.name}</span>
                                <CancelIcon
                                className="ml-2 cursor-pointer"
                                onClick={() => handleDelete({id:tag.id, noteId:noteId})}
                            />
                            </div>
                    ))}

                        <AddIcon
                        className=" bg-blue-400 p-1  text-white hover:bg-blue-600 cursor-pointer rounded-full mr-auto mt-auto mb-auto"
                        onClick={() => setIsModelOpen(true)} />


                <AddTagModal
                        isOpen={isModalOpen}
                        onClose={() => setIsModelOpen(false)}
                        onAdd={handleTag}
                        userId={userId}
                        noteId={noteId}
                    />

                
    </div>        </div>
    )
}

export default TagList;
