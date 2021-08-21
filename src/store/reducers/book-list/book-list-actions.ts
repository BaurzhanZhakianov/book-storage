import {ActionTypes, BookListStateType, ThunkType} from "./types";
import {Book, BookStorageType} from "../../../services/book-storage/types";

const dataRequested = () => ({
    type: ActionTypes.FETCH_DATA_REQUEST
});
const dataLoaded = () => ({
    type: ActionTypes.FETCH_DATA_SUCCESS
});
// TODO error : object | string
const dataError = (error: string) => ({
    type: ActionTypes.FETCH_DATA_FAILURE, payload: error
});
const booksLoaded = (newBooks: Book[]) => ({
    type: ActionTypes.FETCH_BOOKS_SUCCESS, payload: newBooks
});
const booksError = () => ({
    type: ActionTypes.FETCH_BOOKS_FAILURE
});
const bookLoaded = (newBook: Book) => {
    return {type: ActionTypes.FETCH_BOOK_SUCCESS, payload: newBook}
}
const bookError = () => ({
    type: ActionTypes.FETCH_BOOK_FAILURE
})
const booksUpdated = (newBooks: Book[]) => ({
    type: ActionTypes.UPDATE_BOOKS, payload: newBooks
})
const changeStartIndex = (index: number) => ({
    type: ActionTypes.CHANGE_START_INDEX, payload: index
})
const changeRequestedBooksCount = (requestedCount: number) => ({
    type: ActionTypes.CHANGE_REQUESTED_BOOKS_COUNT, payload: requestedCount
})
const changeTotalBooksCount = (totalCount: number) => ({
    type: ActionTypes.CHANGE_TOTAL_BOOKS_COUNT, payload: totalCount
})
// TODO sortType : SortTypes
const changeSortType = (sortType: string) => ({
    type: ActionTypes.CHANGE_SORT_TYPE, payload: sortType
});
// TODO filterType : FilterTypes
const changeFilterType = (filterType: string) => ({
    type: ActionTypes.CHANGE_FILTER_TYPE, payload: filterType
})
const changeSearchQuery = (query: string) => {
    return {type: ActionTypes.CHANGE_SEARCH_QUERY, payload: query}
}
const fetchBooks = (bookStorage: BookStorageType): ThunkType =>
    async (dispatch, getState) => {
        const {bookList} = getState();
        dispatch(dataRequested());
        if (bookList.startIndex) {
            dispatch(changeStartIndex(0))
            if (bookList.requestedBooks !== 30) {
                dispatch(changeRequestedBooksCount(30))
            }
        }
        try {
            const {bookList} = getState();
            const books = await mapStateToBooks(bookList, bookStorage)
            if (bookList.totalBooks !== bookStorage.totalBooks) {
                dispatch(changeTotalBooksCount(bookStorage.totalBooks));
            }
            dispatch(dataLoaded());
            dispatch(booksLoaded(books));

        } catch (error) {
            dispatch(dataError(error));
            dispatch(booksError());
        }
    }
const updateBooks = (bookStorage: BookStorageType) => (index: number, booksCount?: number): ThunkType =>
    async (dispatch, getState) => {
        dispatch(dataRequested());
        dispatch(changeStartIndex(index));
        if (booksCount) {
            dispatch(changeRequestedBooksCount(booksCount))
        }
        try {
            const {bookList} = getState();
            const books = await mapStateToBooks(bookList, bookStorage)
            if (bookList.totalBooks !== bookStorage.totalBooks) {
                dispatch(changeTotalBooksCount(bookStorage.totalBooks));
            }
            dispatch(dataLoaded());
            dispatch(booksUpdated(books))
        } catch (error) {
            dispatch(dataError(error));
            dispatch(booksError());
        }
    }
const fetchBook = (bookStorage: BookStorageType) => (id: string): ThunkType =>
    async (dispatch) => {
        dispatch(dataRequested());
        try {
            const book = await bookStorage.getBook(id)
            dispatch(dataLoaded());
            dispatch(bookLoaded(book));
        } catch (error) {
            dispatch(dataError(error));
            dispatch(bookError());
        }
    }

async function mapStateToBooks(state: BookListStateType, bookStorage: BookStorageType) {
    const {
        query,
        filterType, sortType,
        startIndex, requestedBooks,
    } = state;
    return await bookStorage.getBooks({
        q: query,
        category: filterType,
        orderBy: sortType,
        startIndex,
        maxResults: requestedBooks
    })
}

export {
    fetchBooks,
    fetchBook,
    updateBooks,
    changeSearchQuery,
    changeSortType,
    changeFilterType,
};
