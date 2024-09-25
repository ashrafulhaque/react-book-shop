import Footer from "../components/Footer";

const Blog = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="container mx-auto px-8 sm:px-16 my-8 flex-grow">
        <h1 className="text-3xl font-bold mb-4">Blog</h1>
        <p className="text-gray-600 mb-4">
          Check back soon for updates on the latest book news, author
          interviews, and more!
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
