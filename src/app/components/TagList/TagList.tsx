import { useGetAllTags } from "@/app/dashboard/mutations";
import { DELETE_TAG } from '@/hooks/tag';
import { useMutation } from "@apollo/client";

const TagList = ({noteId}) => {
    console.log(`getting tags for noteId ${noteId}`)

    const tags = useGetAllTags(noteId);

    const [deleteTagFunction] = useMutation(DELETE_TAG);

    const handleDelete = ({id:id}) => {
        console.log(`deleted note for ${id}`);

        try{
        const res = deleteTagFunction({
            variables:{
                tagId: id
            }
        })
        }catch(error){
            console.log(`${error}`);
        }
        
    }

    return(
        <div>
            <p>Tags:</p>
            {tags.tags.map((tag:any) => (
            <li key={tag.id}>
                <p>{tag.name} {tag.id}</p>
                <button onClick={() => handleDelete({id:tag.id})} className="bg-gray-800 text-white">delete</button>
            </li>
            ))}
        </div>
    )
}

export default TagList;
