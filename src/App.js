import "./App.css";
import { useState } from "react";
import Header from "./components/Header/Header";
import { useEffect } from "react";
import Hero from "./components/Hero/Hero";
import Features from "./components/Features/Features";
import Productive from "./components/Productive/Productive";
import Testimonials from "./components/Testimonials/Testimonials";
import Access from "./components/Access/Access";
import Footer from "./components/Footer/Footer";

function App() {
  const [darkMode, setDarkMode] = useState();

  const changeHandler = (event) => {
    setDarkMode(event);
  };

  useEffect(() => {
    if (
      localStorage.getItem("color-theme") === "dark" ||
      (!("color-theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }, []);

  return (
    <div className={darkMode ? "dark" : ""} >
      <div className="transform-all duration-500 dark:bg-darkBlue dark:text-white font-opensans overflow-hidden">
        <Header mode={darkMode} changeIt={changeHandler} />
        <Hero />
        <Features />
        <Productive/>
        <Testimonials/>
        <Access/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
