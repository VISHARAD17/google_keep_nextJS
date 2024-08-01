import Link from 'next/link'
import React from 'react'

const Logout = () => {
  return (
    <div>
        This is a logout page
        <button><Link href={'/login'}>Login</Link></button>
    </div>
  )
}

export default Logout