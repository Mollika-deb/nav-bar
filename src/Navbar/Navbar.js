import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <div>
           <div className="navbar shadow-2xl bg-cyan-700 text-white  font-semibold text-xl">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/about'>About</Link></li>
             
              <li><Link to='/service'>Service</Link></li>
              <li><Link to='/portfolio'>Portfolio</Link></li>
              <li><Link to='/contact'>Contact</Link></li>
              
              
              
            </ul>
          </div>
         <div className="btn btn-ghost normal-case lg:ml-10 text-2xl">
         <Link >NavBar</Link>
         <img src="" alt="" />
         </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
             
             <li><Link to='/service'>Service</Link></li>
             <li><Link to='/portfolio'>Portfolio</Link></li>
             <li><Link to='/contact'>Contact</Link></li>
             
              
          </ul>
        </div>
       
        <div className="navbar-end text-white lg:mr-10 ">
         
        
       
                   
                   <Link to='/signup' className="">SignUp</Link>
                   <Link to='/login' className="  ml-3 lg:ml-5">SignIn</Link>
                   
            
        </div>
        
      </div>
        </div>
    );
};

export default Navbar;