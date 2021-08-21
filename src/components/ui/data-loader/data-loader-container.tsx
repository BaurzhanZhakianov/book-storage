import DataLoader from "./data-loader";
import {connect} from "react-redux";
import {compose} from "redux";
import {withBookStorage, withIndicator} from "../../hoc";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";
import {FC} from "react";
import {DispatchThunkType, OwnProps} from "../../../store/reducers/book-list/types";
import {RootStateType} from "../../../store/reducers";
import {updateBooks} from "../../../store/reducers/book-list/book-list-actions";


type DataLoaderContainerProps = {
    startIndex: number,
    requestedBooks: number,
    totalBooks: number,
    updateBooks(index: number, booksCount?: number): void
}


const DataLoaderContainer: FC<DataLoaderContainerProps> = (props) => {
    const {startIndex, requestedBooks, totalBooks, updateBooks} = props;

    const loadMore = () => {
        if (startIndex + requestedBooks <= totalBooks) {
            updateBooks(startIndex + requestedBooks)
        } else {
            updateBooks(startIndex, totalBooks - startIndex)
        }
    }
    if (startIndex + requestedBooks < totalBooks) {
        return <DataLoader handler={loadMore} label='Load more'/>
    }
    return null;
}


const mapStateToProps = ({bookList: {startIndex, requestedBooks, totalBooks, loading, error}}: RootStateType) => ({
    startIndex, requestedBooks, totalBooks, loading, error
})

const mapDispatchToProps = (dispatch: DispatchThunkType, {bookStorage}: OwnProps) => ({
    updateBooks: (index: number, booksCount?: number) => dispatch(updateBooks(bookStorage)(index, booksCount)),
})

export default compose(
    withBookStorage(),
    connect(mapStateToProps, mapDispatchToProps),
    withIndicator(Spinner, ErrorIndicator)
)(DataLoaderContainer) as React.ComponentType
