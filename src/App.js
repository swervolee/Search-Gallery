import React, { Component } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import PhotoContextProvider from "./context/photoContext";
import Header from "./components/Header";
import Item from "./components/item";
import Search from "./components/Search";
import NotFound from "./components/NotFound";
import Footer from "./components/Footer";
import ScrollTop from "./components/ScrollTop";


class App extends Component {
  state = {
    showScrollTop: false,
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    this.setState({ showScrollTop: scrollPosition > 20 });
  };

  render() {
    const { showScrollTop } = this.state;
    return (
      <PhotoContextProvider>
        <BrowserRouter>
          <div className="">
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
            {showScrollTop && (
              <ScrollTop Topper={() => window.scrollTo({ top: 0, behavior: "smooth"})} />
            )}

            <Footer />
          
          </div>
        </BrowserRouter>
      </PhotoContextProvider>
    );
  }
}

export default App;
