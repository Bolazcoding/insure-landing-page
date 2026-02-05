import Header from "./components/Header";
import HeroContainer from "./components/HeroContainer";
import FeaturesContainer from "./components/FeaturesContainer";
import Main from "./components/Main";
import About from "./components/About";

function App() {
  return (
    <>
      <Main>
        <Header />
        <HeroContainer />
        <FeaturesContainer />
        <About />
      </Main>
    </>
  );
}

export default App;
