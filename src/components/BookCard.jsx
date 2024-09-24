import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img
        src={book.image}
        alt={book.bookName}
        className="h-64 w-full object-cover"
      />
      <div className="p-4">
        <div className="flex flex-wrap gap-2 mb-2">
          {book.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-gray-200 text-gray-600 px-2 py-1 rounded-full text-xs"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-lg font-bold mb-2">{book.bookName}</h3>
        <p className="text-gray-600 mb-4">{book.author}</p>
        <div className="flex justify-between items-center">
          <p className="text-gray-600">{book.category}</p>
          <p className="text-yellow-500 font-bold">{book.rating}</p>
        </div>
        <Link
          to={`/book/${book.bookId}`}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mt-4 inline-block"
        >
          Book Details
        </Link>
      </div>
    </div>
  );
};

export default BookCard;
