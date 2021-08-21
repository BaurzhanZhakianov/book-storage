import {compose} from "redux";
import BookDetail from "./book-detail";
import {withBookStorage} from "../../hoc";
import {connect} from "react-redux";
import {FC, useEffect} from "react";
import {DispatchThunkType, OwnProps, ThunkType} from "../../../store/reducers/book-list/types";
import {RootStateType} from "../../../store/reducers";
import {fetchBook} from "../../../store/reducers/book-list/book-list-actions";
import {Book} from "../../../services/book-storage/types";

type BookDetailContainerProps = {
    id: string,
    fetchBook(id: string): ThunkType,
    selectedBook: Book,
}
const BookDetailContainer: FC<BookDetailContainerProps> = (props) => {
    const {id, fetchBook, selectedBook, ...args} = props
    useEffect(() => {
        fetchBook(id);
    }, [fetchBook, id])
    return selectedBook && <BookDetail selectedBook={selectedBook} {...args}/>

}

const mapStateToProps = ({bookList: {selectedBook, loading, error}}: RootStateType) => ({
    selectedBook, loading, error
})
const mapDispatchToProps = (dispatch: DispatchThunkType, {bookStorage}: OwnProps) => ({
    fetchBook: (id: string) => dispatch(fetchBook(bookStorage)(id))
})

export default compose(
    withBookStorage(),
    connect(mapStateToProps, mapDispatchToProps),
)(BookDetailContainer) as any
