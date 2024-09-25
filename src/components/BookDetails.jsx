import { useState } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./Footer";

const BookDetails = ({ books }) => {
  const { bookId } = useParams();
  const book = books.find((b) => b.bookId === parseInt(bookId));
  const [isWishlistAdded, setIsWishlistAdded] = useState(false);
  const [isCartAdded, setIsCartAdded] = useState(false);

  const handleWishlistAdd = () => {
    setIsWishlistAdded(true);
    toast.success(
      `${book.bookId} - ${book.bookName} has been added to the Wishlist!`
    );
  };

  const handleCartAdd = () => {
    setIsCartAdded(true);
    toast.success(
      `${book.bookId} - ${book.bookName} has been added to the Cart!`
    );
  };

  return (
    <div>
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="container mx-auto px-4 my-8">
        <div className="flex flex-col md:flex-row">
          <img
            src={book.image}
            alt={book.bookName}
            className="w-full md:w-1/2 h-auto"
          />
          <div className="w-full md:w-1/2 p-8">
            <h1 className="text-3xl font-bold mb-4">{book.bookName}</h1>
            <p className="text-gray-600 mb-2">Author: {book.author}</p>
            <p className="text-gray-600 mb-2">Category: {book.category}</p>
            <p className="text-gray-600 mb-4">{book.review}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {book.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-gray-200 text-gray-600 px-2 py-1 rounded-full text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-gray-600 mb-2">Total Pages: {book.totalPages}</p>
            <p className="text-gray-600 mb-2">Publisher: {book.publisher}</p>
            <p className="text-gray-600 mb-2">
              Year of Publishing: {book.yearOfPublishing}
            </p>
            <p className="text-yellow-500 font-bold mb-4">
              Rating: {book.rating}
            </p>
            <div className="flex gap-4">
              <button
                className={`bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded ${
                  isWishlistAdded ? "opacity-50 cursor-not-allowed" : ""
                }`}
                onClick={handleWishlistAdd}
                disabled={isWishlistAdded}
              >
                Wish to Read
              </button>
              <button
                className={`bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded ${
                  isCartAdded ? "opacity-50 cursor-not-allowed" : ""
                }`}
                onClick={handleCartAdd}
                disabled={isCartAdded}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BookDetails;
