import BookListItem from "../book-list-item";
import FoundBooks from "../found-books";
import DataLoader from "../data-loader";
import {Book} from "../../../services/book-storage/types";
import {FC} from "react";

type BookListProps = {
    books: Book[],
    selectBook(id:string):void,
    changeSearchQuery(query:string):void
}
const BookList:FC<BookListProps> = (props) => {
    const {books, selectBook, changeSearchQuery} = props;
    return (
        <>
            <FoundBooks/>
            <ul className="row list-unstyled">
                {books.map(book => (
                    <li className='col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 border-2 border-top border-dark p-3'
                        key={book.id}>
                        <BookListItem book={book} changeQuery={changeSearchQuery} selectBook={selectBook}/>
                    </li>
                ))}
            </ul>
            <DataLoader/>
        </>

    )
}


export default (BookList);
