import SearchPanel from './search-panel';
import { changeSearchQuery, fetchBooks } from '../../../store/reducers/book-list/book-list-actions';
import { BookStorageType } from '../../../services/book-storage/types';
import { FC, useContext } from 'react';
import BookStorageContext from '../../../context/book-storage';
import useActions from '../../../hooks/useActions';
import { useTypedSelector } from '../../../hooks/useTypedSelector';

const SearchPanelContainer: FC = () => {
  const query = useTypedSelector((state) => state.bookList.query);
  const bookStorage = useContext<BookStorageType>(BookStorageContext);
  const { changeSearchQuery, fetchBooks } = useActions();
  return (
    <SearchPanel
      query={query}
      fetchBooks={() => fetchBooks(bookStorage)}
      changeSearchQuery={(q) => changeSearchQuery(q)}
    />
  );
};

export default SearchPanelContainer;
