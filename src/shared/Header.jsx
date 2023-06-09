import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { authContext } from '../AuthProvider';

const Header = () => {
    const { user,isLoading,logOut } = useContext(authContext)
    const navLinkStyle = ({ isActive }) => {
        return {
            textDecoration: isActive ? "underline" : "none",
            color: isActive ? "blue" : "black"
        }
    }
    const handelLogOut=()=>{
        logOut()
            .then(()=>{
                console.log('successful logout')
            })
            .catch(error=>{
                console.log(error)
               
            })
    }
    return (
        <div className='px-12'>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <NavLink className='mr-3' style={navLinkStyle} to='/'><a>Home</a></NavLink>
                            <NavLink className='mr-3' style={navLinkStyle} to='/blog'><a>Blog</a></NavLink>
                            <NavLink style={navLinkStyle} to='/register'><a>Register</a></NavLink>
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">INDIAN FOOD</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <NavLink className='mr-3' style={navLinkStyle} to='/'><a>Home</a></NavLink>
                        <NavLink className='mr-3' style={navLinkStyle} to='/blog'><a>Blog</a></NavLink>
                        <NavLink style={navLinkStyle} to='/register'><a>Register</a></NavLink>
                        <button onClick={handelLogOut} className='ml-4' ><a>Logout</a></button>
                    </ul>
                </div>
                {
                    user ? <div className="avatar navbar-end">
                        <div className={`w-10 mask mask-hexagon `}>
                            <img title={`${user?.displayName}`} src={user?.photoURL} />
                        </div>
                    </div> :

                        <div className="navbar-end">
                            <Link to='/login' className="btn">Login</Link>
                        </div>
                }
                  

            </div>

        </div>
    );
};

export default Header;