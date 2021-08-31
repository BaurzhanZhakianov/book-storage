import { changeFilter, changeSort } from '../../../store/reducers/book-list/book-list-actions';
import { connect } from 'react-redux';
import BookSearchSettings from './book-search-settings';
import { RootStateType } from '../../../store/reducers';
import { FC } from 'react';

type BookSearchSettingsContainerProps = {
  filters: string[];
  sorts: string[];
  filterType: string;
  sortType: string;
  changeFilter(type: string): void;
  changeSort(type: string): void;
};
const BookSearchSettingsContainer: FC<BookSearchSettingsContainerProps> = (props) => {
  return <BookSearchSettings {...props} />;
};

const mapStateToProps = ({ bookList: { filters, sorts, filterType, sortType } }: RootStateType) => {
  return {
    filters,
    sorts,
    filterType,
    sortType,
  };
};
const mapDispatchToProps = {
  changeFilter,
  changeSort,
};

export default connect(mapStateToProps, mapDispatchToProps)(BookSearchSettingsContainer);
