import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-400 py-8">
      <div className="container mx-auto px-8 sm:px-16">
        <div className="flex flex-col md:flex-row justify-between space-y-8 md:space-y-0">
          <div>
            <img
              src={"/book-shop-logo.png"}
              alt="Book Shop Logo"
              className="w-20"
            />
            <h3 className="text-lg font-bold mb-4">React Book Shop</h3>
            <p>© 2024 Md. Ashraful Haque. All rights reserved.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <p>123 Food Street, Mirpur, Dhaka</p>
            <p>Email: contact@reactbookshop.com</p>
            <p>Phone: 555-555-5555</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
