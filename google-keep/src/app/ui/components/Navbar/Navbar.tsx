'use client'
import { signOut , useSession} from 'next-auth/react';

import Link from 'next/link';

const Navbar = () => {
    const {data:session} = useSession();
    return(
        <div>
            <ul>
                <div>
                    <li><Link href={"/"}>Home</Link></li>
                    {!session?
                        (<>
                    <li><Link href={"/login"}>login</Link></li>
                    <li><Link href={"/register"}>register</Link></li>
                    </>):
                        ( <>
                            <li>welcome user whose mail id is {session.user?.email}</li>
                            <li><button onClick={() => {signOut();}}>Logout</button></li>
                            </>
                          )}
                </div>
            </ul>
            <div style={{ borderTop: "2px solid black"}}></div>
        </div>
    )
}

export default Navbar;

