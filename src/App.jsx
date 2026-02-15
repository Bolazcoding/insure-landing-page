import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Header from "./components/Header";
import HeroContainer from "./components/HeroContainer";
import FeaturesContainer from "./components/FeaturesContainer";
import Main from "./components/Main";
import About from "./components/About";
import FooterContainer from "./components/FooterContainer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Main>
        <HeroContainer />
        <FeaturesContainer />
        <About />
        <FooterContainer />
      </Main>
    </BrowserRouter>
  );
}

export default App;
