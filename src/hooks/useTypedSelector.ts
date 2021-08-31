import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootStateType } from '../store/reducers';

export const useTypedSelector: TypedUseSelectorHook<RootStateType> = useSelector;
