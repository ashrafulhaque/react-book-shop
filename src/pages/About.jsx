import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="container mx-auto px-8 sm:px-16 my-8 flex-grow">
        <h1 className="text-3xl font-bold mb-4">About React Book Shop</h1>
        <p className="text-gray-600 mb-4">
          React Book Shop is a leading online bookstore dedicated to providing
          readers with a wide selection of books, from the latest bestsellers to
          classic literature. Our mission is to help people discover and explore
          the transformative power of reading.
        </p>
        <p className="text-gray-600 mb-4">
          We believe that books have the ability to transport us to new worlds,
          challenge our perspectives, and enrich our lives. That's why we
          carefully curate our collection to offer readers a diverse and
          thought-provoking selection of titles across various genres.
        </p>
        <p className="text-gray-600 mb-4">
          At React Book Shop, we are passionate about fostering a love of
          reading and supporting authors and publishers. We strive to provide an
          exceptional customer experience, with fast and reliable shipping, a
          user-friendly website, and personalized recommendations to help you
          find your next favorite book.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default About;
