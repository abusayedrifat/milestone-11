import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/icons/logo.svg'
import { useContext } from "react";
import { AuthContext } from "../../Components/AuthProvider/AuthProvider";
const Navbar = () => {

  const {user,logOut} = useContext(AuthContext)

  const handleLogOut = ()=>{
    logOut()
    .then(result=>{
      console.log(result);
      
    })
    .catch(error=>{
      console.log(error.message);
      
    })
  }

  const navbar = <>
  <li><NavLink to='/'>Home</NavLink></li>
  <li><NavLink to='/about'>About</NavLink></li>
  <li><NavLink to='/services'>Servives</NavLink></li>
    {
      user?.email? <>
       <li><NavLink to='/bookings' > Bookings </NavLink></li>
        <li> <button onClick={handleLogOut}>LogOut</button> </li>
      </> : <li> <NavLink to='/logIn'> SignIn </NavLink> </li>
   
   
    } 
  </>
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navbar}
          </ul>
        </div>
        <Link to='/'> <img src={logo} alt="" />  </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
        {navbar}
        </ul>
      </div>
      <div className="navbar-end">
        <Link to='/signUp'><button className="btn bg-transparent border text-[#FF3811] border-[#FF3811] hover:bg-[#FF3811] hover:text-white">Appointment</button></Link>
        
      </div>
    </div>
  );
};

export default Navbar;
