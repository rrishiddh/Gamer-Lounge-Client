import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navbar ">
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
                  <NavLink to="/all_reviews">
                    <img
                      src="https://img.icons8.com/?size=100&id=XskZlykXA2CI&format=png&color=000000"
                      className="w-5 h-5"
                    />
                    All Reviews{" "}
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/add_review">
                    <img
                      src="https://img.icons8.com/?size=100&id=81464&format=png&color=000000"
                      className="w-5 h-5"
                    />
                    Add Review
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/my_reviews">
                    <img
                      src="https://img.icons8.com/?size=100&id=DXfrzlXab1ny&format=png&color=000000"
                      className="w-5 h-5"
                    />
                    My Reviews
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/game_watch_list">
                    <img
                      src="https://img.icons8.com/?size=100&id=tdKUcwrRw4js&format=png&color=000000"
                      className="w-5 h-5"
                    />
                    Game WatchList
                  </NavLink>
                </li>
              </>
            </ul>
          </div>

          <a className="btn btn-ghost text-xl">
            <img
              className="w-8 h-8"
              src="https://img.icons8.com/?size=100&id=J2AwyRUPwjyg&format=png&color=000000"
              alt=""
            />
            Gamer Lounge
          </a>
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
                  <NavLink to="/all_reviews">
                    <img
                      src="https://img.icons8.com/?size=100&id=XskZlykXA2CI&format=png&color=000000"
                      className="w-5 h-5"
                    />
                    All Reviews{" "}
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/add_review">
                    <img
                      src="https://img.icons8.com/?size=100&id=81464&format=png&color=000000"
                      className="w-5 h-5"
                    />
                    Add Review
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/my_reviews">
                    <img
                      src="https://img.icons8.com/?size=100&id=DXfrzlXab1ny&format=png&color=000000"
                      className="w-5 h-5"
                    />
                    My Reviews
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/game_watch_list">
                    <img
                      src="https://img.icons8.com/?size=100&id=tdKUcwrRw4js&format=png&color=000000"
                      className="w-5 h-5"
                    />
                    Game WatchList
                  </NavLink>
                </li>
              </>
          </ul>
        </div>
        <div className="navbar-end space-x-2">
        
            {/* <div className="bg-[#c2e9fb] p-2 border border-gray-50 rounded-lg lg:flex lg:space-x-2 items-center">
              <img
                src={'/'}
                className="w-8 h-8 rounded-full mx-auto"
              />
              <p className="font-light text-[12px]">{'/'}</p>
            </div> */}
            <Link  className="btn bg-[#c2e9fb]">
              Login
            </Link>
         
            {/* <button className="btn bg-[#c2e9fb]">
              Logout
            </button> */}
            <Link className="btn bg-[#c2e9fb] ">
              Registration
            </Link>          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
