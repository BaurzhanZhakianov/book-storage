import {changeFilterType, changeSortType} from "../../../store/reducers/book-list/book-list-actions";
import {connect} from "react-redux";
import BookSearchSettings from "./book-search-settings";
import {RootStateType} from "../../../store/reducers";
import {FC} from "react";


type BookSearchSettingsContainerProps={
    filters:string[],
    sorts: string[],
    filterType:string,
    sortType:string,
    changeFilterType(type:string):void,
    changeSortType(type:string):void,
}
const BookSearchSettingsContainer:FC<BookSearchSettingsContainerProps> = (props) => {
    return <BookSearchSettings {...props}/>
}

const mapStateToProps = ({bookList: {filters, sorts,filterType,sortType}}:RootStateType) => {
    return {
        filters,
        sorts,
        filterType,
        sortType
    }
}
const mapDispatchToProps = {
    changeFilterType,
    changeSortType,
}


export default connect(mapStateToProps, mapDispatchToProps)(BookSearchSettingsContainer);
