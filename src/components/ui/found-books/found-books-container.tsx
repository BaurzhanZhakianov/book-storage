import {declOfNum} from "../../../utils";
import FoundBooks from "./found-books";
import {useSelector} from "react-redux";
import {FC, useMemo} from "react";
import {RootStateType} from "../../../store/reducers";

const FoundBooksContainer:FC = () => {
    const {query, totalBooks} = useSelector(({bookList: {query, totalBooks}}:RootStateType) => ({query, totalBooks}));
    const [bookDeclination,findDeclination] = useMemo(()=>{
        return [declOfNum(totalBooks, ['книга', 'книги', 'книг']), declOfNum(totalBooks, ['найдена', 'найдено', 'найдено'])]
    }, [totalBooks]);

    const foundBooks = useMemo(()=>{
        return <FoundBooks
            queryLabel={query}
            booksLabel={bookDeclination}
            foundLabel={findDeclination}
            totalLabel={totalBooks}
        />
    },[totalBooks])

    return foundBooks
}


export default FoundBooksContainer;
