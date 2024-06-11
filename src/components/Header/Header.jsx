import React from 'react';
import { Link } from "react-router-dom";
import { House, PersonVcard, Sliders, Briefcase, PersonRolodex, } from "react-bootstrap-icons"

const Header = () => {
    return (
        <>
            <div className="w-full h-auto flex items-center justify-center relative">
                {/*for larger screen*/}
                <nav className="w-full bg-slate-950/30 backdrop-blur-[6px] py-6 px-32 shadow lg:flex md:hidden sm:hidden hidden items-center justify-between fixed top-0">
                </nav>
                {/*for smaller screen*/}
                <nav className="md:w-[70%] sm:w-[50%] w-[90%] bg-slate-950/30 backdrop-blur-[6px] md:py-5 sm:py-4 md:px-10 sm:px-7 px-5 shadow-lg shadow-gray-800 lg:hidden md:flex sm:flex flex items-center justify-between fixed bottom-10 rounded-full">
                    <ul className="list-none flex items-center gap-7">
                        <li>
                            <Link to="/" className="text-green-400 bg-green-400/10 text-xl rounded-xl block py-1 px-2 font-medium hover:bg-green-400/10 active:bg-green-400/10 focus:outline-none ease-out duration-700"><House className="md:text-2xl sm:text-xl text-xl" />
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className="text-green-400 text-xl rounded-xl block py-1 px-2 font-medium hover:bg-green-400/10 active:bg-green-400/10 focus:outline-none ease-out duration-700"><PersonVcard className="md:text-2xl sm:text-xl text-xl" />
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className="text-green-400 text-xl rounded-xl block py-1 px-2 font-medium hover:bg-green-400/10 active:bg-green-400/10 focus:outline-none ease-out duration-700"><Sliders className="md:text-2xl sm:text-xl text-xl" />
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className="text-green-400 text-xl rounded-xl block py-1 px-2 font-medium hover:bg-green-400/10 active:bg-green-400/10 focus:outline-none ease-out duration-700"><Briefcase className="md:text-2xl sm:text-xl text-xl" />
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className="text-green-400 text-xl rounded-xl block py-1 px-2 font-medium hover:bg-green-400/10 active:bg-green-400/10 focus:outline-none ease-out duration-700"><PersonRolodex className="md:text-2xl sm:text-xl text-xl" />
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    );
};
export default Header;