import Banner from "../components/Banner";
import BookCard from "../components/BookCard";
import books from "../utils/books-data.json";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Banner />
      <div className="container mx-auto px-8 sm:px-16 my-8 flex-grow">
        <h2 className="text-2xl font-bold mb-4 text-center underline uppercase">
          Featured Books
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {books.map((book) => (
            <BookCard key={book.bookId} book={book} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
