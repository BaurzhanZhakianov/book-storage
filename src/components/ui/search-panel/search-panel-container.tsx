import SearchPanel from "./search-panel";
import {compose} from "redux";
import {connect} from "react-redux";
import {RootStateType} from "../../../store/reducers";
import {withBookStorage} from "../../hoc";
import {changeSearchQuery, fetchBooks} from "../../../store/reducers/book-list/book-list-actions";
import {BookStorageType} from "../../../services/book-storage/types";
import {DispatchThunkType} from "../../../store/reducers/book-list/types";

//TODO props : ?
const SearchPanelContainer = (props: any) => {
    return <SearchPanel {...props} />
}
const mapStateToProps = (state: RootStateType) => ({
    query: state.bookList.query
});
// TODO ownProps : ?
const mapDispatchToProps = (dispatch: DispatchThunkType, ownProps: any) => {
    const bookStorage: BookStorageType = ownProps.bookStorage;

    return {
        changeSearchQuery: (query: string) => dispatch(changeSearchQuery(query)),
        fetchBooks: () => dispatch(fetchBooks(bookStorage)),
    }
}

export default compose(
    withBookStorage(),
    connect(mapStateToProps, mapDispatchToProps)
)(SearchPanelContainer) as React.ComponentType;


