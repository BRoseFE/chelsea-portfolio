import FeaturedWorks from "./components/featured-works/FeaturedWorks";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";

function HomePage() {
    return(
        <main>
            <Hero />
            <FeaturedWorks />
            <About />
        </main>
    );
}

export default HomePage;