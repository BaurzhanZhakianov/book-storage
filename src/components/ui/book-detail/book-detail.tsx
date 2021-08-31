import { withIndicator } from '../../hoc';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import { FC } from 'react';
import { Book } from '../../../services/book-storage/types';

type BookDetailProps = {
  selectedBook: Book;
};

const BookDetail: FC<BookDetailProps> = (props) => {
  const {
    selectedBook: {
      title,
      description,
      publishedDate,
      authors,
      categories,
      imageLinks,
      pageCount,
      language,
    },
  } = props;

  const languageLabel = language === 'en' ? 'английский' : 'русский';
  const descriptionLabel = description?.replaceAll(/<\/?[^>]+>/g, '') || 'Описание отсутствует';
  const categoryLabel =
    categories?.map((category) => <p key={category}>{category}</p>) || 'нет категорий';
  const dateLabel = publishedDate?.split('-').reverse().join('.') || 'нет даты';
  const authorLabel =
    authors?.map((author) => {
      return (
        <span key={author} className="badge rounded-pill bg-info m-1 fs-5 text-wrap">
          {author}
        </span>
      );
    }) || 'нет автора';

  return (
    <div className="row">
      <div className="col-sm-4">
        <img className="img-thumbnail mb-3" alt={title} src={imageLinks?.medium} />
      </div>
      <div className="col-sm-8">
        <h2 className="bg-primary p-3 text-white">{title}</h2>
        <p>{authorLabel}</p>
        <p className="border p-3">{descriptionLabel}</p>
        <h3 className="bg-secondary text-white text-center text-sm-start p-2">Детализация</h3>
        <dl className="row text-center text-sm-start">
          <dt className="col-sm-3 text-uppercase fs-5">Дата публикации</dt>
          <dd className="col-sm-9">{dateLabel}&nbsp;г.</dd>
          <dt className="col-sm-3 text-uppercase fs-5">Язык книги:</dt>
          <dd className="col-sm-9">{languageLabel}</dd>
          <dt className="col-sm-3 text-uppercase fs-5">Всего страниц:</dt>
          <dd className="col-sm-9">{pageCount}</dd>
          <dt className="col-sm-3 text-uppercase fs-5">Категории</dt>
          <dd className="col-sm-9">{categoryLabel}</dd>
        </dl>
      </div>
    </div>
  );
};
export default withIndicator<BookDetailProps>(Spinner, ErrorIndicator)(BookDetail);
