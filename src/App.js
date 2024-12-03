import React, { Component } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import PhotoContextProvider from "./context/photoContext";
import Header from "./components/Header";
import Item from "./components/item";
import Search from "./components/Search";
import NotFound from "./components/NotFound";
import Footer from "./components/Footer";


class App extends Component {
  render() {
    return (
      <PhotoContextProvider>
        <BrowserRouter>
          <div className="container">
            <Header />
            <Routes>
              <Route path="/" element={<Navigate to="/mountain" />} />
              <Route path="/mountain" element={<Item searchTerm="mountain" />} />
              <Route path="/beach" element={<Item searchTerm="beach" />} />
              <Route path="/bird" element={<Item searchTerm="bird" />} />
              <Route path="/food" element={<Item searchTerm="food" />} />
              <Route path="/search/:searchTerm" element={<Search />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
          </div>
        </BrowserRouter>
      </PhotoContextProvider>
    );
  }
}

export default App;
