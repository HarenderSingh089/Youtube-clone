import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import SearchPage from "./SearchPage";
import Recommended from "./Recommended";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/search/:searchTerm"
          element={
            <div className="app__page">
              <Sidebar />
              <SearchPage />
            </div>
          }
        />
        <Route
          path="/"
          element={
            <div className="app__page">
              <Sidebar />
              <Recommended />
            </div>
          }
        />
      </Routes>

      {/* These were the three components we are going to make for front layout. */}
      {/* Header */}
      {/* Sidebar */}
      {/* Recommended Videos*/}
    </Router>
  );
}

export default App;
