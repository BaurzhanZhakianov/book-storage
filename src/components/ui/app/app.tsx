import {Redirect, Route, Switch} from 'react-router-dom'
import {AboutPage, BookPage, HomePage} from "../../pages";
import Header from "../header/header";

const App = () => {
    return (
        <div className='container-xxl'>
            <Header/>
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route path='/card/:id' component={BookPage} />
                <Route path='/about' component={AboutPage}/>
                <Redirect to='/'/>
            </Switch>
        </div>
    )
}
export default App;
