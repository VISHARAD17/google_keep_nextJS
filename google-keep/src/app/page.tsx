import { BookList } from "./ui/components/BookList/BookList";
const Home = () => {
    const Notes = [
        { title:"title 1", content:"content something lorem ipsum" },
        { title:"title 1", content:"content something lorem ipsum" },
        { title:"title 1", content:"content something lorem ipsum" }
    ]
    return(
        <div>
            <h1>This is Home Page</h1>     
            <div>below this all static list notes</div>
                <div>
                        {Notes.map((note, index) => (
                        <div key={index}>
                            <ul>
                                <li>title:{note.title}</li>
                                <li>title:{note.content}</li>
                            </ul>
                            </div>
                        ))}
                </div>
                <br/>
                <div>
                    <p> List of all books from DB</p>
                    <BookList/>
                </div>
        </div>
    )
}

export default Home;
