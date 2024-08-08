import { useGetAllTagsForUser } from "@/app/dashboard/mutations";
import { useGetAllNoteByEmail } from "@/hooks/noteHooks";

const AllTagList = ({email}) => {

    
    const {data} = useGetAllNoteByEmail({email});
    const userId = data?.getAllNotesByEmail.user.id;
    const tags = useGetAllTagsForUser(userId);

    const handleCheckboxChange = (event:any) => {
        console.log(`checkbox is checked for value ${event.target.value}`)
    };
    return(
        <div>
            {tags.map((tag:any) => (
                <div key={tag.id} className="flex items-center mb-4">
                    <input
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    onChange={handleCheckboxChange}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                        <label
                        htmlFor="default-checkbox"
                        className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                        {tag.name}
                        </label>
                    </div>

            ))} 
        </div>


);
}

export default AllTagList;
