import FeaturedWorks from "./components/featured-works/FeaturedWorks";
import About from "./components/about/About";
import styles from "./Home.page.module.css"

function HomePage() {
    return(
        <main className={styles.home}>
            <FeaturedWorks />
            <About />
        </main>
    );
}

export default HomePage;