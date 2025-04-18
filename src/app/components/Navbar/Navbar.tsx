'use client'
import { signOut, useSession } from 'next-auth/react';

import Link from 'next/link';
import Image from 'next/image';

import googleKeepLogo from '../../../../public/google_keep_logo.png'

const handleLogout = () => {
    if(confirm("Are you sure, you want to logout ?")){
        signOut();
    }
}
const Navbar = () => {
    const { data: session } = useSession();
    return (
            <div>
                <nav className="sticky top-0 z-10 block w-full max-w-full px-4 py-2 text-black bg-white border rounded-none shadow-md h-max border-white/80 bg-opacity-80 backdrop-blur-2xl backdrop-saturate-200 lg:px-8 lg:py-4">
                    <div className="flex items-center justify-between text-blue-gray-900">
                        {/* <div>Logo</div> */}
                        <Link href={'/'} className="mr-4 block cursor-pointer font-sans text-base font-medium leading-relaxed text-inherit antialiased">
                            <div className='flex flex-row'>
                                <Image width={40} height={40} src={googleKeepLogo} alt='google-keep-logo'/>
                                <div className='mt-auto mb-auto ml-3 text-lg'>Google Keep</div>
                            </div>
                        </Link>
                        <div className="flex items-center gap-4">
                           { !session?
                           (<div className="flex items-center gap-x-1">
                                <button
                                    className=" px-4 py-2 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block"
                                    type="button">
                                    <span><Link href={'/login'}>Log In</Link></span>
                                </button>
                                <button
                                    className="select-none rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block"
                                    type="button">
                                    <span><Link href={'/register'}>Register</Link></span>
                                </button>
                            </div>):
                            (<div className="flex items-center gap-x-1">
                                <div className="px-4 py-2 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block">
                                    <Link href={'/dashboard'}>Dashboard</Link>
                                </div>
                                <button
                                    className="px-4 py-2 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block"
                                    type="button">
                                    <span>welcome user : {session.user?.email}</span>
                                </button>
                                <button
                                    className="hidden select-none rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block"
                                    type="button">
                                    <span><button onClick={handleLogout}>Logout</button></span>
                                </button>
                            </div> )}
                        </div>
                    </div>
                </nav>
            </div>
    )
}

export default Navbar;
