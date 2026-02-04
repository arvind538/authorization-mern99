import { NavLink } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { TiSocialYoutube } from "react-icons/ti";
import { FaSquareFacebook, FaSquareInstagram } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 mt-16">
            <div className="max-w-7xl mx-auto px-6 py-12 grid gap-10 sm:grid-cols-2 md:grid-cols-4">

                {/* Brand */}
                <div>
                    <NavLink to="/" className="flex items-center gap-3 mb-3">
                        <img
                            src="https://img.freepik.com/free-vector/bird-colorful-gradient-design-vector_343694-2506.jpg"
                            className="h-10 w-10 rounded-full"
                            alt="Apna Website Logo"
                        />
                        <h2 className="text-white text-xl font-semibold">
                            Apna_Website
                        </h2>
                    </NavLink>

                    <p className="text-sm leading-relaxed">
                        Apna_Website is your trusted platform for quality services and
                        reliable solutions. Making everyday services simple and accessible.
                    </p>

                    {/* Social Icons */}
                    <h1 className="text-2xl">Social Media:</h1>
                    <div className="flex gap-4 mt-4 text-xl">

                        <a href="/" className="hover:text-blue-500 transition">
                            <FaLinkedin />
                        </a>
                        <a href="/https://www.facebook.com/" className="hover:text-blue-600 transition">
                            <FaSquareFacebook />
                        </a>
                        <a href="/" className="hover:text-pink-500 transition">
                            <FaSquareInstagram />
                        </a>
                        <a href="/" className="hover:text-pink-900 transition">
                            <TiSocialYoutube />
                        </a>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h3>
                        Quick Links
                    </h3>
                    <ul className="space-y-2 text-sm ml-25">
                        <li><NavLink to="/" className="hover:text-white">Home</NavLink></li>
                        <li><NavLink to="/about" className="hover:text-white">About</NavLink></li>
                        <li><NavLink to="/service" className="hover:text-white">Services</NavLink></li>
                        <li><NavLink to="/contact" className="hover:text-white">Contact</NavLink></li>
                    </ul>
                </div>

                {/* Services */}
                <div>
                    <h3>
                        Our Services
                    </h3>
                    <ul className="space-y-2 text-sm ml-22">
                        <li>Home Services</li>
                        <li>Maintenance</li>
                        <li>Consulting</li>
                        <li>Support</li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3>
                        Contact Us
                    </h3>
                    <ul className="space-y-2 text-sm ml-23">
                        <li>Email: support@apnawebsite.com</li>
                        <li>Phone: +91 98765 43210</li>
                        <li>Location: India</li>
                    </ul>
                </div>

            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-700 text-center py-4 text-sm">
                © {new Date().getFullYear()} Apna_Website. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
