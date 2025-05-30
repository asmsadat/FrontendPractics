import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center border-t border-gray-700 py-6">
        {/* Left Side - Privacy Links */}
        <ul className="flex gap-6 mb-4 md:mb-0 text-sm">
          <li>
            <Link
              href="#"
              className="hover:text-blue-400 transition-colors duration-200"
            >
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="hover:text-blue-400 transition-colors duration-200"
            >
              Terms of Service
            </Link>
          </li>
        </ul>

        {/* Right Side - Social Icons */}
        <div className="flex gap-6">
          <Link
            href="#"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors duration-200"
          >
            <FaFacebook size={24} />
          </Link>
          <Link
            href="#"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors duration-200"
          >
            <FaTwitter size={24} />
          </Link>
          <Link
            href="#"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors duration-200"
          >
            <FaInstagram size={24} />
          </Link>
        </div>
      </div>
      <div className="text-center text-sm text-gray-400 py-4 border-t border-gray-800">
        &copy; 2025 Student Portal. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
