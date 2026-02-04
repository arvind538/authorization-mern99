import { NavLink } from "react-router-dom";
import { useAuth } from "../store/auth";

const Header = () => {
    const { isLoggedIn } = useAuth();

    return (
        <header className="header">
            <div className="container">
                <NavLink to="/">
                    <h2 className="logo">CodeTech</h2>
                </NavLink>

                <nav className="nav">
                    <ul className="nav-list">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/service">Service</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>

                        {isLoggedIn ? (
                            <li>
                                <NavLink to="/logout">Logout</NavLink>
                            </li>
                        ) : (
                            <>
                                <li>
                                    <NavLink to="/login">Login</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/register" className="register-btn">
                                        Register
                                    </NavLink>
                                </li>
                            </>
                        )}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
