import { useGetTagsForNote } from '@/hooks/noteHooks'
import React, { useEffect, useState } from 'react'
import { Tag } from '@/lib/definitions'

import { useMutation } from '@apollo/client'
import { DELETE_TAG } from '@/hooks/tag'
import { useRouter } from 'next/navigation'

const TagList = ({id}) => {
  const {data, error, loading} = useGetTagsForNote({id:id});
  console.log(`from taglist ${data}for id ${id}`);
  const [tags, setTags] = useState([])
  const [tagId, setTagId] = useState();
  const [deleteTagFunction] = useMutation(DELETE_TAG)    
  const router = useRouter();


    const handleDeleteTag = async(id) => {
        console.log("delete function");
        console.log(`target value ${id}`)
        try{
            await deleteTagFunction({
                variables:{
                   tagId: id 
                }
            })
            location.reload()
        } catch(error){
            console.log("some error")
        }
    }

  return (
    <div>
        <p>TagList</p>
        <ul>
            {data?.getAllTagsForNote.tags.map((tag: Tag) =>(
                <div key={tag.id}>
                  <li>{tag.name}</li>
                  <button onClick={() =>handleDeleteTag(tag.id)}>delete</button>                  
                  </div>

            ))}
        </ul> 
    </div>
  )
}

export default TagList