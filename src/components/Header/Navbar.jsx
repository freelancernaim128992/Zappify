import React from 'react';
import { Link, NavLink } from 'react-router';
import logo from '../../assets/logo.png';
import { FaGithub } from "react-icons/fa";
import './Navbar.css';

const Navbar = () => {
    const menuItems = (
        <>
            <li><NavLink className="font-semibold" to="/">Home</NavLink></li>
            <li><NavLink className="font-semibold" to="/allApps">Apps</NavLink></li>
            <li><NavLink className="font-semibold" to="/installation">Installation</NavLink></li>
        </>
    );

    return (
        <div className='bg-base-100 shadow-sm'>
            <div className="navbar max-w-6xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {menuItems}
                        </ul>
                    </div>
                    <Link to="/" className="btn btn-ghost normal-case text-xl">
                        <div className='flex items-center gap-2 justify-between'>
                            <img className='h-10' src={logo} alt="Zappify Logo" />
                            <span className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
                                Zappify
                            </span>
                        </div>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {menuItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to="https://github.com/freelancernaim128992" target="_blank" className="btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white"><FaGithub /> Contribute</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;