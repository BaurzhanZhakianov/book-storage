import { ActionsType, ActionTypes, BookListStateType, FilterTypes, SortTypes } from './types';

const initialState = {
  books: [],
  selectedBook: null,
  loading: false,
  error: null,
  query: '',
  filterType: FilterTypes.ALL,
  sortType: SortTypes.RELEVANCE,
  filters: Object.keys(FilterTypes),
  sorts: Object.keys(SortTypes),
  startIndex: 0,
  requestedBooks: 30,
  totalBooks: 0,
};

const bookList = (
  state: BookListStateType = initialState,
  action: ActionsType
): BookListStateType => {
  switch (action.type) {
    case ActionTypes.FETCH_DATA_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ActionTypes.FETCH_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
      };
    case ActionTypes.FETCH_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case ActionTypes.FETCH_BOOKS_SUCCESS:
      return {
        ...state,
        books: action.payload,
      };
    case ActionTypes.FETCH_BOOKS_FAILURE:
      return {
        ...state,
        books: [],
      };
    case ActionTypes.UPDATE_BOOKS:
      return {
        ...state,
        books: state.books.concat(action.payload),
      };
    case ActionTypes.FETCH_BOOK_SUCCESS:
      return {
        ...state,
        selectedBook: action.payload,
      };
    case ActionTypes.FETCH_BOOK_FAILURE:
      return {
        ...state,
        selectedBook: null,
      };
    case ActionTypes.CHANGE_START_INDEX:
      return {
        ...state,
        startIndex: action.payload,
      };
    case ActionTypes.CHANGE_REQUESTED_BOOKS_COUNT:
      return {
        ...state,
        requestedBooks: action.payload,
      };
    case ActionTypes.CHANGE_TOTAL_BOOKS_COUNT:
      return {
        ...state,
        totalBooks: action.payload,
      };

    case ActionTypes.CHANGE_SEARCH_QUERY:
      return {
        ...state,
        query: action.payload.trimStart().toLowerCase(),
      };
    case ActionTypes.CHANGE_SORT_TYPE:
      return {
        ...state,
        sortType: action.payload,
      };
    case ActionTypes.CHANGE_FILTER_TYPE:
      return {
        ...state,
        filterType: action.payload,
      };
    default:
      return state;
  }
};

export { bookList };
