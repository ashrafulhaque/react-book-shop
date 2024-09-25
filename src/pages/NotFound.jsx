import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const NotFound = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="container mx-auto px-8 sm:px-16 my-4 flex-grow text-center">
        <img src="/404.jpg" alt="404 Not Found" className="h-96 mx-auto" />
        <p className="text-2xl font-bold mb-4">Page Not Found</p>
        <p className="text-gray-600 mb-4">
          The page you are looking for does not exist or has been moved.
        </p>

        <Link
          to="/"
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded inline-block"
        >
          Go to Home
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
