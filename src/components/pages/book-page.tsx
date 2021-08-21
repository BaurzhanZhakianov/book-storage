import BookDetail from "../ui/book-detail";
import {useParams} from "react-router-dom";

type BookParams ={
    id : string
}

const BookPage =()=>{
    const {id} = useParams<BookParams>();
    return <BookDetail id={id}/>
}

export default BookPage;




