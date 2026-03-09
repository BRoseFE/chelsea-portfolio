import Footer from "shared/components/footer/Footer";
import Header from "shared/components/header/Header";
import HomePage from "pages/home/Home.page";
import PortfolioPage from "pages/portfolio/Portfolio.page";
import ArtworkPage from "pages/artwork/Artwork.page";
import { Routes, Route } from "react-router-dom";
import AboutPage from "pages/about/About.page";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="/portfolio" element={ <PortfolioPage /> } />
        <Route path="/about" element={ <AboutPage /> } />
        <Route path="/artwork/:slug" element={ <ArtworkPage /> }/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
