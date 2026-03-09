import FeaturedWorks from "./components/featured-works/FeaturedWorks";
import About from "../../shared/components/about/AboutSection";
import styles from "./Home.page.module.css"

function HomePage() {
    return(
        <main className={styles.home}>
            <FeaturedWorks />
            <About title="About Me"/>
        </main>
    );
}

export default HomePage;