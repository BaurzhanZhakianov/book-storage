import React from 'react';
import BookStorage from '../../services/book-storage';
import { BookStorageType } from '../../services/book-storage/types';

const bookStorage = new BookStorage();
const BookStorageContext = React.createContext<BookStorageType>(bookStorage);
export default BookStorageContext;
