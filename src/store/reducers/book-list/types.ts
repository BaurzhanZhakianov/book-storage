import {Book, BookStorageType} from "../../../services/book-storage/types";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {RootStateType} from "../index";
import {Dispatch} from "redux";
import {BrowserRouterProps} from "react-router-dom";

export enum ActionTypes {
    FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST',
    FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS',
    FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE',
    FETCH_BOOKS_SUCCESS = 'FETCH_BOOKS_SUCCESS',
    FETCH_BOOKS_FAILURE = 'FETCH_BOOKS_FAILURE',
    FETCH_BOOK_SUCCESS = 'FETCH_BOOK_SUCCESS',
    FETCH_BOOK_FAILURE = 'FETCH_BOOK_FAILURE',
    UPDATE_BOOKS = 'UPDATE_BOOKS',
    CHANGE_START_INDEX = 'CHANGE_START_INDEX',
    CHANGE_REQUESTED_BOOKS_COUNT = 'CHANGE_REQUESTED_BOOKS_COUNT',
    CHANGE_TOTAL_BOOKS_COUNT = 'CHANGE_TOTAL_BOOKS_COUNT',
    CHANGE_SEARCH_QUERY = 'CHANGE_SEARCH_QUERY',
    CHANGE_SORT_TYPE = 'CHANGE_SORT_TYPE',
    CHANGE_FILTER_TYPE = 'CHANGE_FILTER_TYPE',
}

export enum FilterTypes {
    ALL = 'all',
    ART = 'art',
    BIOGRAPHY = 'biography',
    COMPUTERS = 'computers',
    HISTORY = 'history',
    MEDICAL = 'medical',
    POETRY = 'poetry'
}

export enum SortTypes {
    RELEVANCE = 'relevance',
    NEWEST = 'newest'
}

/* TODO
    error : string | null ? object | null -
    filterType : one of types FilterTypes -
    sortType : one of types SortTypes -
*/
export type BookListStateType = {
    loading: boolean,
    error: string | null,
    query: string,
    filterType: string,
    sortType: string,
    startIndex: number,
    requestedBooks: number,
    totalBooks: number
    selectedBook: Book | null;
    books: Book[];
    filters: string[],
    sorts: string[],
}

export type ActionType = {
    type: string,
    payload?: any
}
export interface OwnProps {
    bookStorage: BookStorageType
    history?: any
}
// TODO refactor
export type ThunkType = ThunkAction<Promise<void>, RootStateType, unknown, ActionType>
export type DispatchThunkType = ThunkDispatch<RootStateType, unknown, ActionType>
export type DispatchType = Dispatch<ActionType>
