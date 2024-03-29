import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NewsPage from "./pages/NewsPage";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        {/* Define your routes here */}
        <Routes>
          {/* Example Route */}
          <Route path="/" element={<Home />} />
          <Route path="/newspage" element={<NewsPage />} />
          {/* Add more routes as needed */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
