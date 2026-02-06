import { NavLink } from "react-router-dom";
import { useAuth } from "../store/auth";
import { useState } from "react";
import "./Header.css";

const Header = () => {
    const { isLoggedIn } = useAuth();
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="header">
            <div className="container header-container">

                {/* Logo */}
                <NavLink to="/" className="logo" onClick={() => setMenuOpen(false)}>
                    <img
                        src="https://img.freepik.com/free-vector/bird-colorful-gradient-design-vector_343694-2506.jpg"
                        alt="Logo"
                    />
                    <h2>Apna_Website</h2>
                </NavLink>

                {/* Mobile Menu Button */}
                <div
                    className="menu-toggle"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    ☰
                </div>

                {/* Navigation */}
                <nav className={`nav ${menuOpen ? "active" : ""}`}>
                    <ul className="nav-list">

                        <li>
                            <NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink>
                        </li>

                        <li>
                            <NavLink to="/about" onClick={() => setMenuOpen(false)}>About</NavLink>
                        </li>

                        <li>
                            <NavLink to="/service" onClick={() => setMenuOpen(false)}>Service</NavLink>
                        </li>

                        <li>
                            <NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact</NavLink>
                        </li>

                        {isLoggedIn ? (
                            <li>
                                <NavLink to="/logout" onClick={() => setMenuOpen(false)}>
                                    Logout
                                </NavLink>
                            </li>
                        ) : (
                            <>
                                <li>
                                    <NavLink to="/login" onClick={() => setMenuOpen(false)}>
                                        Login
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink
                                        to="/register"
                                        className="register-btn"
                                        onClick={() => setMenuOpen(false)}
                                    >
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








// import { NavLink } from "react-router-dom";
// import { useAuth } from "../store/auth";

// const Header = () => {
//     const { isLoggedIn } = useAuth();

//     return (
//         <header className="header">
//             <div className="container">
//                 <NavLink to="/" className="flex items-center gap-3 ">
//                     <img
//                         src="https://img.freepik.com/free-vector/bird-colorful-gradient-design-vector_343694-2506.jpg"
//                         className="h-10 w-10 rounded-full"
//                         alt="Apna Website Logo"
//                     />
//                     <h2 className="text-white text-xl font-semibold">
//                         Apna_Website
//                     </h2>
//                 </NavLink>

//                 <nav className="nav">
//                     <ul className="nav-list">
//                         <li><NavLink to="/">Home</NavLink></li>
//                         <li><NavLink to="/about">About</NavLink></li>
//                         <li><NavLink to="/service">Service</NavLink></li>
//                         <li><NavLink to="/contact">Contact</NavLink></li>

//                         {isLoggedIn ? (
//                             <li>
//                                 <NavLink to="/logout">Logout</NavLink>
//                             </li>
//                         ) : (
//                             <>
//                                 <li>
//                                     <NavLink to="/login">Login</NavLink>
//                                 </li>
//                                 <li>
//                                     <NavLink to="/register" className="register-btn">
//                                         Register
//                                     </NavLink>
//                                 </li>
//                             </>
//                         )}
//                     </ul>
//                 </nav>
//             </div>
//         </header>
//     );
// };

// export default Header;
