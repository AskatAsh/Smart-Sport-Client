import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-gray-900">
      <div className="footer text-neutral-content py-10 max-w-7xl w-11/12 mx-auto">
        <div className="max-w-96 w-full">
          <div className="footer-title opacity-90 text-white flex items-center gap-2 mb-0">
            <img
              className="w-8"
              src="https://i.ibb.co.com/5TnfHBK/smartsport-logo.webp"
              alt="smart sport logo"
            />
            <span className="text-lg font-semibold">Smart Sport</span>
          </div>
          <p className="py-4 text-base">
            Well reputed sports accessories e-commerce website, a platform where
            customers can browse, purchase, and review various sports
            accessories, from gear to apparel, catering to different sports
            disciplines.
          </p>
          <ul className="flex items-center gap-2">
            <li className="w-8 h-8 rounded-full bg-gray-800 text-white text-base hover:bg-white hover:text-gray-900 cursor-pointer flex items-center justify-center">
              <a
                href="https://www.linkedin.com/in/md-abdul-ashkat"
                target="_blank"
              >
                <FaLinkedin />
              </a>
            </li>
            <li className="w-8 h-8 rounded-full bg-gray-800 text-white text-base hover:bg-white hover:text-gray-900 cursor-pointer flex items-center justify-center">
              <a
                href="https://www.facebook.com/md.abdul.ashkat"
                target="_blank"
              >
                <FaFacebook />
              </a>
            </li>
            <li className="w-8 h-8 rounded-full bg-gray-800 text-white text-base hover:bg-white hover:text-gray-900 cursor-pointer flex items-center justify-center">
              <a href="#">
                <FaInstagram />
              </a>
            </li>
            <li className="w-8 h-8 rounded-full bg-gray-800 text-white text-base hover:bg-white hover:text-gray-900 cursor-pointer flex items-center justify-center">
              <a href="#">
                <FaSquareXTwitter />
              </a>
            </li>
            <li className="w-8 h-8 rounded-full bg-gray-800 text-white text-base hover:bg-white hover:text-gray-900 cursor-pointer flex items-center justify-center">
              <a href="#">
                <FaYoutube />
              </a>
            </li>
          </ul>
        </div>
        <nav>
          <h6 className="footer-title text-white opacity-90 font-medium">
            Company
          </h6>
          <Link to="/" className="link link-hover">
            Home
          </Link>
          <Link to="/allEquipment" className="link link-hover">
            All Equipment
          </Link>
          <Link to="/contact" className="link link-hover">
            Contact Us
          </Link>
          <Link to="/about" className="link link-hover">
            About Us
          </Link>
        </nav>
        <nav>
          <h6 className="footer-title text-white opacity-90 font-medium">
            Legal
          </h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
          <a className="link link-hover">Support</a>
        </nav>
        <div>
          <h6 className="footer-title text-white opacity-90 font-medium">
            Our Location
          </h6>
          <address className="max-w-80">
            Multi Sports 247-248, Bir Uttam Mir Shawkat Sarak, Tejgaon
            Industrial Area, Dhaka-1208 Bangladesh
          </address>
          <h6 className="footer-title text-white opacity-90 font-medium mt-2">
            For Support
          </h6>
          <p>Phone: 0123-9273623</p>
          <p>Email: support@smartsport.com</p>
        </div>
      </div>
      <div className="text-neutral-content border-t border-t-gray-700 max-w-7xl w-11/12 mx-auto py-8 text-center text-sm">
        <p>Copyright &copy;2024; Smart Sport | All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
