import styles from '@/app/ui/components/Navbar1/navbar.module.css'

import Link from 'next/link';

const Navbar = () => {
    return(
        <div>
            <ul>
                <div>
                    <li><Link href={"/"}>Home</Link></li>
                    <li><Link href={"/login"}>login</Link></li>
                    <li><Link href={"/register"}>register</Link></li>
                    <li><Link href={"/success"}>success</Link></li>
                </div>
            </ul>
            <div style={{ borderTop: "2px solid black"}}></div>
        </div>
    )
}

export default Navbar;

