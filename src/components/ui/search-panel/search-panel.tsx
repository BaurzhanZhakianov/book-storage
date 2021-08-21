import {ChangeEvent, FC, FormEvent, useEffect, useRef} from "react";
import {useHistory} from 'react-router-dom';

type SearchPanelType = {
    query: string,
    changeSearchQuery(query: string): void,
    fetchBooks(): void,
}

const SearchPanel: FC<SearchPanelType> = ({query, changeSearchQuery, fetchBooks}) => {
    const history = useHistory();
    const findBooksByQuery = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (history.location.pathname !== '/') {
            history.push('/');
        }
        fetchBooks();
    };
    const inputRef = useRef<HTMLInputElement>(null);
    useEffect(() => {
        inputRef!.current!.focus();
    }, [])
    const inputHandler = (e: ChangeEvent<HTMLInputElement>) => changeSearchQuery(e.target.value);


    return (
        <form className="d-flex mw-100" onSubmit={findBooksByQuery}>
            <input className="form-control me-2" type="text" placeholder="Введите запрос"
                   value={query}
                   onChange={inputHandler}
                   ref={inputRef}
            />
            <button className="btn btn-secondary my-2 my-sm-0" type="submit">Поиск</button>
        </form>
    )
}

export default SearchPanel;



