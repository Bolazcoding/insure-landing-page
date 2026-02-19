import { lazy } from "react";
// import Header from "./components/Header";
// import HeroContainer from "./components/HeroContainer";
// import FeaturesContainer from "./components/FeaturesContainer";
// import Main from "./components/Main";
// import About from "./components/About";
// import FooterContainer from "./components/FooterContainer";

const Header = lazy(() => import("./components/Header"));
const HeroContainer = lazy(() => import("./components/HeroContainer"));
const FeaturesContainer = lazy(() => import("./components/FeaturesContainer"));
const Main = lazy(() => import("./components/Main"));
const About = lazy(() => import("./components/About"));
const FooterContainer = lazy(() => import("./components/FooterContainer"));

function App() {
  return (
    <div>
      <Header />
      <Main>
        <HeroContainer />
        <FeaturesContainer />
        <About />
        <FooterContainer />
      </Main>
    </div>
  );
}

export default App;
