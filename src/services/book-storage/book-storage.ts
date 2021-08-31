import axios from 'axios';
import { Book, BookResponse, BooksResponse, QueryStringParams } from './types';

export default class BookStorage {
  private _API_KEY = 'AIzaSyAMf9konvBhoN-z4XY23JdJ80KrT1zZbv0';
  private _BASE_URL = 'https://www.googleapis.com/books/v1/volumes';
  private _totalBooks = 0;
  private _defaultQuery = 'books';
  private _defaultParams = {
    hl: 'ru',
    printType: 'books',
    filter: 'partial',
    key: this._API_KEY,
  };
  private _transformToBook(data: BookResponse): Book {
    const {
      title,
      authors,
      categories,
      publishedDate,
      imageLinks,
      description,
      pageCount,
      language,
      publisher,
      dimensions,
    } = data.volumeInfo;
    return {
      id: data.id,
      title,
      authors,
      categories,
      publishedDate,
      imageLinks,
      description,
      pageCount,
      language,
      publisher,
      dimensions,
    };
  }
  private _createParams(params?: QueryStringParams) {
    if (!params) {
      return this._defaultParams;
    }
    return {
      q: params.q === '' ? this._defaultQuery : `${params.q}+subject=${params.category}`,
      startIndex: params.startIndex,
      maxResults: params.maxResults,
      orderBy: params.orderBy,
      ...this._defaultParams,
    };
  }
  private async _getResource(url: string, params?: QueryStringParams) {
    try {
      const response = await axios.get(`${this._BASE_URL}/${url}`, {
        params: this._createParams(params),
      });
      return response.data;
    } catch (e) {
      console.log(e);
    }
  }
  async getBooks(booksParams: QueryStringParams): Promise<Book[]> {
    const data: BooksResponse = await this._getResource('', booksParams);
    this._totalBooks = data.totalItems;
    return data.items.map((book: BookResponse) => this._transformToBook(book));
  }
  async getBook(bookId: string): Promise<Book> {
    return this._transformToBook(await this._getResource(bookId));
  }
  get totalBooks(): number {
    return this._totalBooks;
  }
}

// export type BookStorageType = typeof BookStorage;
