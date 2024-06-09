import { Link } from "react-router-dom";
import Books from "./Books";

const Home = () => {
  return (
    <>
      <div className="flex items-center justify-center ">
        <Link to="/bookshelf">
          <button className="absolute top-0 right-0 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 transition duration-300 mt-2 mr-2">
            My BookShelf
          </button>
        </Link>
      </div>
      <div className="flex flex-wrap gap-4 p-10 items-center justify-center">
        <Books />
      </div>
    </>
  );
};

export default Home;
