import SearchPanel from "../search-panel";
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary mt-1 mb-3">
            <div className="container-fluid">
                <NavLink className="navbar-brand fs-1" to='/'>BookStorage</NavLink>
                <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="navbar-collapse collapse" id="navbarColor01">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <NavLink to='/about' className="nav-link fs-5">
                                О проекте
                                <span className="visually-hidden">(current)</span>
                            </NavLink>
                        </li>
                    </ul>
                    <SearchPanel/>
                </div>
            </div>
        </nav>
    )
}
export default Header;
