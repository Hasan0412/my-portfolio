import React from "react";
import Header from "../components/Header"; // Import the Header component
import About from "./About";
import Portfolio from "./Portfolio";
import Footer from "../components/Footer";
import "../CSS/Home.css"

function Home() {
  return (
    <div>
      <Header /> {/* Use the Header component here */}
      <About />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default Home;
