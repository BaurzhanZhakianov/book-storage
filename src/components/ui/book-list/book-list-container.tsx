import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import BookList from './book-list';
import { withBookStorage } from '../../hoc';
import { FC, useEffect } from 'react';
import { DispatchThunkType, OwnProps, ThunkType } from '../../../store/reducers/book-list/types';
import { RootStateType } from '../../../store/reducers';
import { changeSearchQuery, fetchBooks } from '../../../store/reducers/book-list/book-list-actions';
import { Book } from '../../../services/book-storage/types';
import useActions from '../../../hooks/useActions';

type BookListContainerProps = {
  fetchBooks(): ThunkType;
  changeSearchQuery(query: string): void;
  books: Book[];
  selectBook(id: string): void;
};

const BookListContainer: FC<BookListContainerProps> = (props) => {
  const { fetchBooks, changeSearchQuery, books, selectBook, ...args } = props;
  const {} = useActions();

  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);
  return (
    <BookList
      changeSearchQuery={changeSearchQuery}
      books={books}
      selectBook={selectBook}
      {...args}
    />
  );
};

const mapStateToProps = ({ bookList: { query, books, loading, error } }: RootStateType) => ({
  books,
  query,
  loading,
  error,
});
const mapDispatchToProps = (dispatch: DispatchThunkType, { bookStorage, history }: OwnProps) => ({
  selectBook: (id: string) => {
    history.push(`/card/${id}`);
  },
  fetchBooks: () => dispatch(fetchBooks(bookStorage)),
  changeSearchQuery: (query: string) => dispatch(changeSearchQuery(query)),
});

export default compose<FC>(
  withRouter,
  withBookStorage(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);
