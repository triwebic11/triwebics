import React, { useState } from "react";
import { Link } from "react-router-dom";



const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuItems = [
        { name: "Home", path: "/" },
        { name: "Services", path: "/services" },
        { name: "About", path: "/about" },
        { name: "Contact", path: "/contact" },
    ];

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4">
                <div className="flex items-center justify-between h-16">

                    {/* Left: Logo */}
                    <Link to="/" className="flex-shrink-0 text-2xl font-bold text-blue-600">
                        Triwebic
                    </Link>

                    {/* Center: Menu (Desktop) */}
                    <div className="hidden md:flex space-x-8 mx-auto">
                        {menuItems.map((item) => (
                            <Link
                                key={item.name}
                                to={item.path}
                                className="text-gray-700 hover:text-blue-600 transition"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    {/* Right: Checkout Button */}
                    <div className="hidden md:flex">
                        <Link to="/checkout">
                            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                                GET IN TOUCH
                            </button>
                        </Link>
                    </div>

                    {/* Mobile Toggle Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-700 hover:text-blue-600 focus:outline-none"
                        >
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden px-4 pb-4 space-y-2">
                    {menuItems.map((item) => (
                        <Link
                            key={item.name}
                            to={item.path}
                            onClick={() => setIsOpen(false)}
                            className="block text-gray-700 hover:text-blue-600"
                        >
                            {item.name}
                        </Link>
                    ))}
                    <Link to="/checkout">
                        <button
                            onClick={() => setIsOpen(false)}
                            className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                        >
                            GET IN TOUCH
                        </button>
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
