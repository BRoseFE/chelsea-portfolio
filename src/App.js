import Footer from "shared/components/footer/Footer";
import Header from "shared/components/header/Header";
import HomePage from "pages/home-page/Home.page";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route {...}/> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
