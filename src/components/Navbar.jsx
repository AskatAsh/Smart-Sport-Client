import { useContext, useState } from "react";
import { FiX } from "react-icons/fi";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import { CgMenuLeftAlt } from "react-icons/cg";
import { FaRegCircleUser } from "react-icons/fa6";

const Navbar = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const { user, setUser, signOutUser, toastMessage } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  // handle log out
  const handleSignOut = (e) => {
    e.preventDefault();
    signOutUser()
      .then(() => {
        toastMessage("Successfully signed out.", "success");
        setUser(null);
      })
      .catch((error) => {
        setErrorMessage(error.code);
        toastMessage(errorMessage, "error");
      });
  };

  // Toggle the menu
  const toggleMenu = () => setIsOpen(!isOpen);

  const navlinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-white"
              : "text-gray-100 font-light hover:underline hover:underline-offset-2"
          }
        >
          Home
        </NavLink>
      </li>
      {user && user?.email && (
        <>
          <li>
            <NavLink
              to="/addEquipment"
              className={({ isActive }) =>
                isActive
                  ? "text-white"
                  : "text-gray-100 font-light hover:underline hover:underline-offset-2"
              }
            >
              Add Equipment
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/myEquipmentList"
              className={({ isActive }) =>
                isActive
                  ? "text-white"
                  : "text-gray-100 font-light hover:underline hover:underline-offset-2"
              }
            >
              My Equipment List
            </NavLink>
          </li>
        </>
      )}

      <li>
        <NavLink
          to="/allEquipment"
          className={({ isActive }) =>
            isActive
              ? "text-white"
              : "text-gray-100 font-light hover:underline hover:underline-offset-2"
          }
        >
          All Equipment
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "text-white"
              : "text-gray-100 font-light hover:underline hover:underline-offset-2"
          }
        >
          Contact
        </NavLink>
      </li>
    </>
  );

  return (
    <header className="bg-gray-900 overflow-hidden">
  <nav className="w-full">
    <div className="max-w-7xl w-11/12 mx-auto flex items-center justify-between py-3">
      {/* Hamburger Icon for Medium/Small Screens */}
      <div className="lg:hidden flex items-center">
        <button
          onClick={toggleMenu}
          className="text-2xl text-white focus:outline-none mr-2"
        >
          {isOpen ? <FiX /> : <CgMenuLeftAlt />}
        </button>
      </div>

      {/* Logo */}
      <div className="flex items-center justify-center">
        <div className="flex items-center space-x-2">
          <div className="w-6 sm:w-8 flex items-center justify-center">
            <img
              className="w-full h-auto"
              src="https://i.ibb.co/5TnfHBK/smartsport-logo.webp"
              alt="smart sport logo"
            />
          </div>
          <span className="sm:text-lg font-semibold text-gray-50">
            SMART SPORT
          </span>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="hidden lg:flex text-sm">
        <ul className="flex space-x-6">{navlinks}</ul>
      </div>

      {/* Button and User Info */}
      <div className="flex items-center gap-1 sm:gap-2">
        {user && user?.email ? (
          <>
            <button
              onClick={handleSignOut}
              className="text-white underline underline-offset-2 py-2"
            >
              Logout
            </button>
            <div
              className="tooltip tooltip-left"
              data-tip={user?.displayName || user?.email}
            >
              <div className="w-8 h-8 rounded-full flex items-center justify-center border overflow-hidden">
                {user?.photoURL ? (
                  <img
                    className="w-full h-full object-cover"
                    src={user?.photoURL}
                    alt={`profile photo of ${
                      user?.displayName || "the user"
                    }`}
                  />
                ) : (
                  <FaRegCircleUser className="text-white text-2xl" />
                )}
              </div>
            </div>
          </>
        ) : (
          <>
            <Link
              to={"/login"}
              className="text-white hover:underline hover:underline-offset-2 py-2"
            >
              Login
            </Link>
            <span className="text-white">/</span>
            <Link
              to={"/register"}
              className=" text-white hover:underline hover:underline-offset-2 py-2"
            >
              Register
            </Link>
          </>
        )}
      </div>
    </div>

    {/* Sidebar for Links */}
    <div
      className={`fixed top-0 left-0 w-64 h-full bg-gray-800 shadow-lg transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out z-40`}
    >
      {/* Close Icon inside Sidebar */}
      <div className="flex justify-between items-center p-4 border-b border-gray-700">
        <div className="text-lg font-semibold text-white">Menu</div>
        <button
          onClick={toggleMenu}
          className="text-2xl text-white focus:outline-none"
        >
          <FiX />
        </button>
      </div>
      <ul className="flex flex-col p-6 space-y-4">{navlinks}</ul>
    </div>
  </nav>
</header>

  );
};

export default Navbar;
