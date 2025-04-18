'use client'
import Link from "next/link";
import { useSession } from 'next-auth/react';

const Home = () => {

    const {data:session, status} = useSession();

    return (
        <div className="flex h-[750px]">
            <div className="bg-gray-100 w-[500px] shadow-xl m-auto p-10">
                <div className="m-2 text-center">
                    <span className="text-3xl text-transparent font-bold bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 font-mono">
                    Google Keep Clone
                </span>
                </div>
                <div>
                    <div className="bg-gray-200 m-4 p-5 shadow-lg">
                        <p>Frontend :</p>
                        <ul className="list-disc pl-4 pr-4">
                            <li>React</li>
                            <li>TailwindCSS</li>
                            <li>Apollo client</li>
                        </ul>
                    </div>
                    <div className="bg-gray-200 m-4 p-5 shadow-xl">
                    Backend:
                    <ul className="list-disc pl-4 pr-4">
                        <li>Apollo server</li>
                            <li>Nextjs routes</li>
                            <li>prisma</li>
                            <li>PostgreSQL</li>
                        </ul>
                    </div>
                </div>
                {/*if seesion not present (not logged in) then show log in/register option else dashboard link*/}
                {!session ? (<div className="text-center">
                    <p className="text-center">Please Login or Register</p>
                        <button
                        className="hidden select-none rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block m-3"
                        type="button">
                            <Link href={'/login'}>Login</Link>
                        </button>
                        <button
                        className="hidden select-none rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block m-3"
                        type="button">
                            <Link href={'/register'}>Register</Link>
                        </button>
                    </div> ):(
                        <div className="text-center">
                            <p className="text-center">Go to Dashboard</p>
                                <button
                                className="hidden select-none rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block m-3"
                                type="button">
                                    <Link href={'/dashboard'}>Dashboard</Link>
                                </button>
                            </div>
                    )}
            </div>
            </div>
    );
}

export default Home;
