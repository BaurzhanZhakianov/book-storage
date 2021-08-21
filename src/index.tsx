import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import store from './store/store'
import ErrorBoundary from "./components/ui/error-boundary";
import App from "./components/ui/app";
import BookStorage from "./services/book-storage";
import BookStorageContext from "./context/book-storage";
import {BrowserRouter as Router} from "react-router-dom";
import "bootswatch/dist/sketchy/bootstrap.min.css";


const bookStorage = new BookStorage();

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <ErrorBoundary>
                <BookStorageContext.Provider value={bookStorage}>
                    <Router>
                        <App/>
                    </Router>
                </BookStorageContext.Provider>
            </ErrorBoundary>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
