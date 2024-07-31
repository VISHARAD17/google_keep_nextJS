import { useGetOneUser } from '@/app/hooks/getOneUser'
import React from 'react'

const UserData = ({email}) => {
    console.log("email", email);
    const {data, loading, error} = useGetOneUser({email:email})
    if(loading) return <div>Loading ...</div>
    if(error) return <div>some error</div>

  return (
        <div>
            <ul>
                <li>email: {data.getOneUser.email}</li>
                <li>name: {data.getOneUser.name}</li>
                <li>id: {data.getOneUser.id}</li>
            </ul>
        </div>
  )
}

export default UserData
