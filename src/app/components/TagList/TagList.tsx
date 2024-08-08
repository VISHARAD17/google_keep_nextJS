import { useGetAllTags } from "@/app/dashboard/mutations";
import { DELETE_TAG } from '../../dashboard/mutations';
import { useMutation } from "@apollo/client";
import CancelIcon from '@mui/icons-material/Cancel';

const TagList = ({noteId}) => {
    console.log(`getting tags for noteId ${noteId}`)

    const tags = useGetAllTags(noteId);

    const [deleteTagFunction] = useMutation(DELETE_TAG);

    const handleDelete = ({id:id, noteId:noteId}) => {
        console.log(`deleted note for ${id}`);

        try{
        const res = deleteTagFunction({
            variables:{
                tagId: id,
                noteId:noteId
            }
        })
        location.reload();
        }catch(error){
            console.log(`${error}`);
        }
        
    }

    return(
        <div>
            <p>Tags:</p>
            <div className="flex flex-wrap space-x-2">
                {tags.tags.map((tag) => (
                    <div
                    key={tag.id}
                    className="flex items-center bg-green-100 text-green-700 px-3 py-1 rounded-full mb-2"
                    >
                    <span>{tag.name}</span>
                    <CancelIcon
                        className="ml-2 cursor-pointer"
                        onClick={() => handleDelete({id:tag.id, noteId:noteId})}
          />
        </div>
      ))}
    </div>        </div>
    )
}

export default TagList;
