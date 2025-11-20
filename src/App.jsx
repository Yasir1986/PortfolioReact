import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
      </main>
    </>
  );
};

export default App;
