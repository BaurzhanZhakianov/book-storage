import {ChangeEvent, FC, MouseEventHandler, ReactNode} from "react";
import {Book} from "../../../services/book-storage/types";

type BookListItemProps = {
    book: Book,
    changeQuery(query: string):void,
    selectBook(id:string):void
}

const BookListItem:FC<BookListItemProps>= ({book, changeQuery, selectBook}) => {
    const {id, title, description, authors, imageLinks} = book;
    const onSelectBook = () => selectBook(id)
    // TODO e: MouseEvent<HTMLButtonElement>
    const searchByAuthor = (e:any) => changeQuery(e.target.innerText)
    const descriptionLabel = description || 'Описание отсутствует'
    const readMore = <span
        className='link-info ms-3'
        style={{textDecoration: 'underline', cursor: 'pointer'}}
        onClick={onSelectBook}>Read more</span>

    return (
        <div className='d-flex flex-wrap justify-content-center flex-lg-column page-link border-0'>
            <div className='flex-shrink-0 d-flex justify-content-center p-2'>
                <img
                    style={{cursor: 'pointer'}}
                    className='img-thumbnail'
                    src={imageLinks.thumbnail}
                    alt={title}
                    onClick={onSelectBook}/>
            </div>
            <div className='flex-grow-1 d-flex justify-content-between flex-column p-2'>
                <div className='mb-3'>
                    <div style={{cursor: 'pointer'}} className="fs-5 link-info text-decoration-underline mb-2" onClick={onSelectBook}>
                        <CroppedText text={title} maxLen={100}/>
                    </div>
                    {authors
                        ? <button className="btn btn-dark btn-sm" onClick={(e)=>searchByAuthor(e)}>{authors.join()}</button>
                        : <span>Нет автора</span>}
                </div>
                <p className="card-text">
                    <CroppedText text={descriptionLabel} maxLen={150} more={readMore}/>
                </p>
            </div>
        </div>
    )
}

type CroppedTextProps = {
    text: string, maxLen: number, more?:ReactNode
}
const CroppedText:FC<CroppedTextProps> = ({text, maxLen, more}) => {
    return text?.length > maxLen
        ? <>{text.slice(0, maxLen) + ' ...'}{more}</>
        : <>{text}</>
}

export default BookListItem;
