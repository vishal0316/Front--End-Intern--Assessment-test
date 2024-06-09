import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Bookshelf from "./components/Bookshelf";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Bookshelf" element={<Bookshelf />} />
      </Routes>
    </Router>
  );
};

export default App;
