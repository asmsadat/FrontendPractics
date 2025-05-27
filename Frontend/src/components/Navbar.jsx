import { Link, useNavigate } from "react-router-dom";
import { useContext  } from "react";
import { logoutUser } from "../auth/AuthManager";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignOut = () => {
    logoutUser();
    setIsLoggedIn(false);
    navigate("/signin");
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-screen-2xl mx-auto px-4 py-4 md:py-6">
        <nav className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
          {/* left */}
          <div>
            <Link
              to="/"
              className="text-2xl font-semibold text-blue-900 hover:text-blue-700 transition-colors"
            >
              Student Portal
            </Link>
          </div>

          {/* center */}
          <div className="flex items-center space-x-6 text-blue-700 text-base md:text-lg font-medium">
            <Link
              to="/students"
              className="hover:text-blue-500 transition-colors"
            >
              Students
            </Link>
            <Link
              to="/courses"
              className="hover:text-blue-500 transition-colors"
            >
              Courses
            </Link>
            <Link
              to="/dashboard"
              className="hover:text-blue-500 transition-colors"
            >
              Dashboard
            </Link>
          </div>

          {/* right */}
          <div className="text-blue-600">
            {!isLoggedIn ? (
              <Link
                to="/signin"
                className="text-blue-700 hover:text-white hover:bg-blue-600 border border-blue-600 px-4 py-1 rounded-md transition-all duration-200"
              >
                Sign in
              </Link>
            ) : (
              <button
                onClick={handleSignOut}
                className="text-blue-600 bg-white hover:bg-red-600 hover:border-red-600 hover:text-white border border-blue-600 px-4 py-1 rounded-md transition-all duration-200"
              >
                Sign out
              </button>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
