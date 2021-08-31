import { FC, memo } from 'react';

type FoundBooksProps = {
  queryLabel: string;
  booksLabel: string;
  foundLabel: string;
  totalLabel: number;
};
const FoundBooks: FC<FoundBooksProps> = memo(
  (props) => {
    const { queryLabel, booksLabel, foundLabel, totalLabel } = props;
    return (
      <div className="d-flex justify-content-center flex-wrap mb-4 fs-5">
        {queryLabel === '' ? (
          <>
            <span style={{ textTransform: 'capitalize' }}>{foundLabel}</span>&nbsp;
            <span className="text-info">{totalLabel}</span>&nbsp;
            {booksLabel}
          </>
        ) : (
          <>
            По запросу&nbsp;<span className="text-success">&quot; {queryLabel} &quot;</span>&nbsp;
            {foundLabel}&nbsp;
            <span className="text-info">{totalLabel}</span>&nbsp;
            {booksLabel}
          </>
        )}
      </div>
    );
  },
  (prev, next) => prev.totalLabel === next.totalLabel
);
FoundBooks.displayName = 'FoundBooks';

export default FoundBooks;
