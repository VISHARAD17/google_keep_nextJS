import Link from "next/link";

const Home = () => {
    return(
    <div>Home page<br/>
            <Link href={'/newPage'}>Click to go other page</Link>
        </div>
    )
}

export default Home;
