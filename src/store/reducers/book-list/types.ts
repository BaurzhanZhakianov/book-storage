import { Book, BookStorageType } from '../../../services/book-storage/types';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { RootStateType } from '../index';
import { Dispatch } from 'redux';

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
  POETRY = 'poetry',
}

export enum SortTypes {
  RELEVANCE = 'relevance',
  NEWEST = 'newest',
}

export type BookListStateType = {
  loading: boolean;
  error: string | null;
  query: string;
  filterType: FilterTypes;
  sortType: SortTypes;
  startIndex: number;
  requestedBooks: number;
  totalBooks: number;
  selectedBook: Book | null;
  books: Book[];
  filters: string[];
  sorts: string[];
};
export type dataRequestedType = {
  type: typeof ActionTypes.FETCH_DATA_REQUEST;
};
export type dataLoadedType = {
  type: typeof ActionTypes.FETCH_DATA_SUCCESS;
};
export type dataErrorType = {
  type: typeof ActionTypes.FETCH_DATA_FAILURE;
  payload: string;
};
export type booksLoadedType = {
  type: typeof ActionTypes.FETCH_BOOKS_SUCCESS;
  payload: Book[];
};
export type booksErrorType = {
  type: typeof ActionTypes.FETCH_BOOKS_FAILURE;
};
export type bookLoadedType = {
  type: typeof ActionTypes.FETCH_BOOK_SUCCESS;
  payload: Book;
};
export type bookErrorType = {
  type: typeof ActionTypes.FETCH_BOOK_FAILURE;
};
export type booksUpdatedType = {
  type: typeof ActionTypes.UPDATE_BOOKS;
  payload: Book[];
};
export type changeStartIndexType = {
  type: typeof ActionTypes.CHANGE_START_INDEX;
  payload: number;
};
export type changeRequestedBooksCountType = {
  type: typeof ActionTypes.CHANGE_REQUESTED_BOOKS_COUNT;
  payload: number;
};
export type changeTotalBooksCountType = {
  type: typeof ActionTypes.CHANGE_TOTAL_BOOKS_COUNT;
  payload: number;
};
export type changeSortType = {
  type: typeof ActionTypes.CHANGE_SORT_TYPE;
  payload: SortTypes;
};
export type changeFilterType = {
  type: typeof ActionTypes.CHANGE_FILTER_TYPE;
  payload: FilterTypes;
};
export type changeSearchQueryType = {
  type: typeof ActionTypes.CHANGE_SEARCH_QUERY;
  payload: string;
};

export type ActionsType =
  | dataRequestedType
  | dataLoadedType
  | dataErrorType
  | booksLoadedType
  | booksErrorType
  | bookLoadedType
  | bookErrorType
  | booksUpdatedType
  | changeStartIndexType
  | changeRequestedBooksCountType
  | changeTotalBooksCountType
  | changeSortType
  | changeFilterType
  | changeSearchQueryType;

export interface OwnProps {
  bookStorage: BookStorageType;
  history?: any;
}

export type ThunkType = ThunkAction<Promise<void>, RootStateType, unknown, ActionsType>;
export type DispatchThunkType = ThunkDispatch<RootStateType, unknown, ActionsType>;
export type DispatchType = Dispatch<ActionsType>;
