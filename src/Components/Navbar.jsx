import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from 'react-toastify';
const Navbar = () => {

  const {user, logOut} = useContext(AuthContext)

  const handleSignOut = () => {
    logOut()
    .then (() => toast.success('Logged Out successfully'))
    .catch(error => console.error(error))
  }

  const navLinks = (
    <>
      {
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-red-500 bg-red-100 p-2 rounded-md" : "p-2"
            }
            to="/"
          >
            Home
          </NavLink>
        </li>
      }
      {
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-red-500 bg-red-100 p-2 rounded-md" : "p-2"
            }
            to="/login"
          >
            Login
          </NavLink>
        </li>
      }
      {
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-red-500 bg-red-100 p-2 rounded-md" : "p-2"
            }
            to="/register"
          >
            Register
          </NavLink>
        </li>
      }
      {
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-red-500 bg-red-100 p-2 rounded-md" : "p-2"
            }
            to="/updateProfile"
          >
            Update Profile
          </NavLink>
        </li>
      }
      {
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-red-500 bg-red-100 p-2 rounded-md" : "p-2"
            }
            to="/userProfile"
          >
            User Profile
          </NavLink>
        </li>
      }
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-lg lg:px-14 py-4">
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
            className="dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-lg font-poppins font-semibold space-y-2"
          >
            {navLinks}
          </ul>
        </div>
        <a className="btn btn-ghost font-poppins text-3xl">ResiVibe</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex items-center gap-8 px-1 text-lg font-poppins font-semibold">
          {navLinks}
        </ul>
      </div>
      <div className="navbar-end gap-4">
        {
          user ? <>
          <a onClick={handleSignOut} className="btn btn-error text-white font-poppins font-semibold px-6">logout</a>
          </>
          : <Link
          to="/login"
          className="btn btn-error text-white font-poppins font-semibold px-6"
        >
          Login
        </Link>
        }
        <Link
          to="/register"
          className="btn btn-outline btn-error font-poppins font-semibold"
        >
          Register
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
