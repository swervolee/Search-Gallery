import React from "react";
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import Header from "./components/Header";
import PhotoContextProvider from './context/photoContext';
import Item from "./components/item";
import Search from "./components/Search";
import NotFound from "./components/NotFound";

function App() {
  return (
    <PhotoContextProvider>
      <HashRouter basename="/SnapScout">
        <div className="container">
          <Header />
          <Routes>
            {/* Redirect to "/mountain" */}
            <Route path="/" element={<Navigate to="/mountain" />} />

            {/* Routes for predefined categories */}
            <Route path="/mountain" element={<Item searchTerm="mountain" />} />
            <Route path="/beach" element={<Item searchTerm="beach" />} />
            <Route path="/bird" element={<Item searchTerm="bird" />} />
            <Route path="/food" element={<Item searchTerm="food" />} />

            {/* Dynamic search route */}
            <Route
              path="/search/:searchInput"
              element={<Search />}
            />

            {/* Catch-all for undefined routes */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </HashRouter>
    </PhotoContextProvider>
  );
}

export default App;
