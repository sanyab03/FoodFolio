import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Donation from "./pages/Donation";
import InventoryWithRecipes from "./pages/InventoryWithRecipes";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import { AuthProvider } from "./AuthContext";
import AboutUs from "./pages/AboutUs";
import RecipeDetail from "./pages/RecipeDetail";

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/donation" element={<Donation />} />
        <Route path="/inventory" element={<InventoryWithRecipes />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </AuthProvider>
  );
}

export default App;