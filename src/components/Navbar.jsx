import { useContext } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import { Tooltip } from "react-tooltip";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const location = useLocation();

  const handleLogOut = () => {
    logOut().then(() => {
      window.location.href = "/auth/login";
    });
  };
  return (
    <div>
      <div className="navbar bg-gradient-to-r from-[#134e5e] to-[#71b280] text-white ">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2  shadow"
            >
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
                <li>
                  {location.pathname === "/" && (
                    <div className="min-md:hidden mx-auto">
                      Light
                      <input
                        type="checkbox"
                        value="dark"
                        className="toggle theme-controller"
                      />
                      Dark
                    </div>
                  )}
                </li>
              </>
            </ul>
          </div>

          <Link to={"/"} className="btn btn-ghost text-xl">
            <img
              className="w-8 h-8"
              src="https://img.icons8.com/?size=100&id=68368&format=png&color=000000"
              alt=""
            />
            Gamer Lounge
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal space-x-2 px-1">
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
                <li>
                  <NavLink to="/addReview">
                    <img
                      src="https://img.icons8.com/?size=100&id=81464&format=png&color=000000"
                      className="w-5 h-5"
                    />
                    Add Review
                  </NavLink>
                </li>
              ) : (
                ""
              )}
              {user && user?.email ? (
                <li>
                  <NavLink to="/myReviews">
                    <img
                      src="https://img.icons8.com/?size=100&id=DXfrzlXab1ny&format=png&color=000000"
                      className="w-5 h-5"
                    />
                    My Reviews
                  </NavLink>
                </li>
              ) : (
                ""
              )}
              {user && user?.email ? (
                <li>
                  <NavLink to="/myWatchList">
                    <img
                      src="https://img.icons8.com/?size=100&id=tdKUcwrRw4js&format=png&color=000000"
                      className="w-5 h-5"
                    />
                    Game WatchList
                  </NavLink>
                </li>
              ) : (
                ""
              )}
            </>
          </ul>
        </div>
        <div className="navbar-end space-x-2">
          {location.pathname === "/" && (
            <div className="max-sm:hidden">
              <input
                type="checkbox"
                value="dark"
                className="toggle theme-controller"
              />
            </div>
          )}
          {user && user?.email ? (
            <div className="flex items-center space-x-4">
              <a
                data-tooltip-id="tooltip-anchor-hide"
                data-tooltip-content={user?.displayName}
                data-tooltip-delay-hide={1000}
              >
                <img src={user?.photoURL} className="w-12 rounded-full cursor-pointer" />
              </a>
              <Tooltip id="tooltip-anchor-hide" />
              
              <button onClick={handleLogOut} className="btn bg-gradient-to-r from-teal-200 to-blue-300 hover:from-pink-300 hover:to-orange-300">
                Logout
              </button>
            </div>
          ) : (
            <>
              <Link to="/auth/login" className="btn bg-gradient-to-r from-teal-200 to-blue-300 hover:from-pink-300 hover:to-orange-300 ">
                Login
              </Link>
              <Link to="/auth/register" className="btn bg-gradient-to-r from-teal-200 to-blue-300 hover:from-pink-300 hover:to-orange-300">
                Registration
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
