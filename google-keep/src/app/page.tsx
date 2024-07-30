import { BookList } from "./ui/components/BookList/BookList";
import { OneBookList } from "./ui/components/BookList/OneBookList";

const Home = () => {
    const Notes = [
        { title:"title 1", content:"content something lorem ipsum" },
        { title:"title 1", content:"content something lorem ipsum" },
        { title:"title 1", content:"content something lorem ipsum" }
    ]


  return (
        <div>
            <BookList/>
            <br/>
            One Book List 
           <OneBookList/> 
        </div>
  );
}

export default Home;
