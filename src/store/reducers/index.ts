import {combineReducers} from "redux";
import {bookList} from "./book-list/book-list";


const rootReducer = combineReducers({
    bookList,
});
export type RootStateType = ReturnType<typeof rootReducer>
export default rootReducer;
