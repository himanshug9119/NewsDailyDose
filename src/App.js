import "./App.css";
import React from 'react';
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import News from "./components/News";
import LoadingBar from "react-top-loading-bar";
function App() {
  const [progress, setProgress] = React.useState(0);
  return (
    <>
      <Router>
        <LoadingBar
          color="#f11946"
          progress={progress}
        />
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<News setProgress={setProgress} key="general" country="in" category="general" />}
          />
          <Route
            path="/business"
            element={<News setProgress={setProgress} key="business" country="in" category="business" />}
          />
          <Route
            path="/entertainment"
            element={
              <News setProgress={setProgress} key="entertainment" country="in" category="entertainment" />
            }
          />
          <Route
            path="/general"
            element={<News setProgress={setProgress} key="general" country="in" category="general" />}
          />
          <Route
            path="/health"
            element={<News setProgress={setProgress} key="health" country="in" category="health" />}
          />
          <Route
            path="/science"
            element={<News setProgress={setProgress} key="science" country="in" category="science" />}
          />
          <Route
            path="/sports"
            element={<News setProgress={setProgress} key="sports" country="in" category="sports" />}
          />
          <Route
            path="/technology"
            element={
              <News setProgress={setProgress} key="technology" country="in" category="technology" />
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
