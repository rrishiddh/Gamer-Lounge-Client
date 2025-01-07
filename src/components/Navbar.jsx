import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import { Tooltip } from "react-tooltip";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const homePage = location.pathname === "/";

  const handleLogOut = () => {
    logOut().then(() => {
      navigate("/");
    });
  };
  const navOptions = (
    <>
      <li>
        <NavLink to="/">
          <img
            src="https://img.icons8.com/?size=100&id=41651&format=png&color=000000"
            className="w-5 h-5"
          />
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/reviews">
          <img
            src="https://img.icons8.com/?size=100&id=XskZlykXA2CI&format=png&color=000000"
            className="w-5 h-5"
          />
          All Reviews{" "}
        </NavLink>
      </li>
      {user && user?.email ? (
        <>
          <li>
            <NavLink to="/addReview">
              <img
                src="https://img.icons8.com/?size=100&id=81464&format=png&color=000000"
                className="w-5 h-5"
              />
              Add Review
            </NavLink>
          </li>
          <li>
            <NavLink to="/myReviews">
              <img
                src="https://img.icons8.com/?size=100&id=DXfrzlXab1ny&format=png&color=000000"
                className="w-5 h-5"
              />
              My Reviews
            </NavLink>
          </li>
          <li>
            <NavLink to="/myWatchList">
              <img
                src="https://img.icons8.com/?size=100&id=tdKUcwrRw4js&format=png&color=000000"
                className="w-5 h-5"
              />
              Game WatchList
            </NavLink>
          </li>
        </>
      ) : (
        ""
      )}
    </>
  );
  return (
    <div className="sticky top-0  z-10 max-w-screen-2xl mx-auto bg-opacity-90 navbar bg-gradient-to-r from-[#134e5e] to-[#71b280] text-white  px-5 ">
      <div className="navbar-start">
        <div className="dropdown dark:text-black">
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
            className="menu menu-sm dropdown-content bg-base-100 text-xs rounded-box z-[1] mt-3 w-52 p-2  shadow"
          >
            {navOptions}
            {homePage && (
              <li>
                <label className="swap swap-rotate">
                  {/* this hidden checkbox controls the state */}
                  <input
                    type="checkbox"
                    className="theme-controller"
                    value="dark"
                  />

                  {/* sun icon */}
                  <svg
                    className="swap-off h-6 w-6 my-auto fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                  </svg>

                  {/* moon icon */}
                  <svg
                    className="swap-on h-6 w-6 my-auto fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                  </svg>
                </label>
              </li>
            )}
          </ul>
        </div>

        <Link
          to={"/"}
          className="btn btn-ghost text-xl max-sm:text-base handlee max-sm:w-[40%]"
        >
          <img
            className="w-8 h-8 max-sm:hidden"
            src="https://img.icons8.com/?size=100&id=68368&format=png&color=000000"
            alt=""
          />
          Gamer Lounge
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal space-x-2 text-xs px-1">
          {navOptions}
        </ul>
      </div>
      <div className="navbar-end space-x-2">
        {homePage && (
          <label className="max-lg:hidden swap swap-rotate">
            {/* this hidden checkbox controls the state */}
            <input type="checkbox" className="theme-controller" value="dark" />

            {/* sun icon */}
            <svg
              className="swap-off h-6 w-6 my-auto fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            {/* moon icon */}
            <svg
              className="swap-on h-6 w-6 my-auto fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
        )}
        {user && user?.email ? (
          <div className="flex items-center space-x-4">
            <a
              data-tooltip-id="tooltip-anchor-hide"
              data-tooltip-content={user?.displayName}
              data-tooltip-delay-hide={1000}
            >
              <img
                src={user?.photoURL}
                className="w-12 rounded-full cursor-pointer"
              />
            </a>
            <Tooltip id="tooltip-anchor-hide" />

            <button
              onClick={handleLogOut}
              className="btn dark:text-black btn-sm bg-gradient-to-r from-teal-200 to-blue-300 hover:from-pink-300 hover:to-orange-300 text-xs"
            >
              Logout
            </button>
          </div>
        ) : (
          <>
            <Link
              to="/auth/login"
              className="btn-sm dark:text-black btn bg-gradient-to-r from-teal-200 to-blue-300 hover:from-pink-300 hover:to-orange-300 text-xs"
            >
              Login
            </Link>
            <Link
              to="/auth/register"
              className="btn dark:text-black btn-sm bg-gradient-to-r from-teal-200 to-blue-300 hover:from-pink-300 hover:to-orange-300 text-xs"
            >
              Registration
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
