import { useGetAllTagsForUser } from "@/app/dashboard/mutations";
import { useGetAllNoteByEmail } from "@/hooks/noteHooks";

const AllTagList = ({email}) => {

    
    const {data} = useGetAllNoteByEmail({email});
    const userId = data?.getAllNotesByEmail.user.id;
    const tags = useGetAllTagsForUser(userId);

    return(
        <div>
            <p>This is tagList</p>
            <ul>
                {tags.map((tag) => (
                <li key={tag.id}>{tag.name}</li>
                ))}
                </ul>
        </div>
);
}

export default AllTagList;
