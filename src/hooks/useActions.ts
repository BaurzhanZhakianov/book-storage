import { bindActionCreators } from 'redux';
import * as bookActions from '../store/reducers/book-list/book-list-actions';
import { useDispatch } from 'react-redux';
import { DispatchThunkType } from '../store/reducers/book-list/types';
const useActions = () => {
  const actions = {
    ...bookActions,
  };
  const dispatch = useDispatch<DispatchThunkType>();
  return bindActionCreators(actions, dispatch);
};

export default useActions;
