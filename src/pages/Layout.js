import React from "react";
import Header from "../components/Header"; // Import the Header component
import Footer from "../components/Footer"; 
import { Outlet } from "react-router-dom";
import "../CSS/Layout.css";

function Layout() {
  return (
    <div>
      <Header /> {/* Use the Header component here */}
      <main>
        <Outlet /> {/* This is where your page content will be rendered */}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
