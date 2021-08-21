import {FC} from "react";

type FoundBooksProps = {
    queryLabel: string,
    booksLabel: string,
    foundLabel: string,
    totalLabel: number
}
const FoundBooks: FC<FoundBooksProps> = (props) => {
    const {queryLabel, booksLabel, foundLabel, totalLabel} = props;
    return (
        <div className='d-flex justify-content-center flex-wrap mb-4 fs-5'>
            {
                queryLabel === '' ?
                    <>
                        <span style={{textTransform: 'capitalize'}}>{foundLabel}</span>&nbsp;
                        <span className='text-info'>{totalLabel}</span>&nbsp;
                        {booksLabel}
                    </>
                    :
                    <>
                        По запросу&nbsp;<span className='text-success'>" {queryLabel} "</span>&nbsp;
                        {foundLabel}&nbsp;
                        <span className='text-info'>{totalLabel}</span>&nbsp;
                        {booksLabel}
                    </>

            }
        </div>
    )
}
export default FoundBooks;
