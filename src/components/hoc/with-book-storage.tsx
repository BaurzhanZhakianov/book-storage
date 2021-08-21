import BookStorageContext from "../../context/book-storage";
import {FC, useContext} from "react";

const withBookStorage = () => (Wrapped:FC) => {
    return (props:any) => {
        return <Wrapped {...props} bookStorage={useContext(BookStorageContext)}/>
    }
}
export default withBookStorage;
