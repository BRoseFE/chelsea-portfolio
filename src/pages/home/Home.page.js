import FeaturedWorks from "./components/featured-works/FeaturedWorks";
import About from "../../shared/components/about/AboutSection";
import styles from "./Home.page.module.css"

function HomePage() {
    return(
        <div className={styles.home}>
            <FeaturedWorks />
            <About title="About Me"/>
        </div>
    );
}

export default HomePage;