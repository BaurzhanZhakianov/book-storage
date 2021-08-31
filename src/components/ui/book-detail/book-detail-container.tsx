import { compose } from 'redux';
import BookDetail from './book-detail';
import { withBookStorage } from '../../hoc';
import { connect } from 'react-redux';
import { FC, useEffect } from 'react';
import { DispatchThunkType, OwnProps, ThunkType } from '../../../store/reducers/book-list/types';
import { RootStateType } from '../../../store/reducers';
import { fetchBook } from '../../../store/reducers/book-list/book-list-actions';
import { Book } from '../../../services/book-storage/types';
import { useParams } from 'react-router-dom';

type BookDetailContainerProps = {
  fetchBook(id: string): void;
  selectedBook: Book;
  loading: boolean;
  error: string;
};

const BookDetailContainer: FC<BookDetailContainerProps> = (props) => {
  const { fetchBook, selectedBook, ...args } = props;
  const { id } = useParams<{ id: string }>();
  useEffect(() => {
    fetchBook(id);
  }, [fetchBook, id]);
  return selectedBook && <BookDetail selectedBook={selectedBook} {...args} />;
};

const mapStateToProps = ({ bookList: { selectedBook, loading, error } }: RootStateType) => ({
  selectedBook,
  loading,
  error,
});
const mapDispatchToProps = (dispatch: DispatchThunkType, { bookStorage }: OwnProps) => ({
  fetchBook: (id: string) => dispatch(fetchBook(bookStorage)(id)),
});

export default compose<FC>(
  withBookStorage(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookDetailContainer);
