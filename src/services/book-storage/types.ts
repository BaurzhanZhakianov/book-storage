import BookStorage from './index';

export type QueryStringParams = {
  q: string;
  startIndex: number;
  maxResults: number;
  orderBy: string;
  category: string;
};

export type Book = {
  id: string;
  title: string;
  authors: string[];
  categories: string[];
  publishedDate: string;
  imageLinks: {
    smallThumbnail: string;
    thumbnail: string;
    small?: string;
    medium?: string;
    large?: string;
    extraLarge?: string;
  };
  description: string;
  pageCount: number;
  language: string;
  publisher: string;
  dimensions?: {
    height: string;
    width: string;
    thickness: string;
  };
};

export type BookResponse = {
  id: string;
  volumeInfo: Omit<Book, 'id'>;
};
export type BooksResponse = {
  items: BookResponse[];
  totalItems: number;
};

const bookStorage = new BookStorage();
export type BookStorageType = typeof bookStorage;
