import styles from "./Header.module.css"
import { NavLink } from "react-router-dom";

function Header() {
    const activeLink = ({ isActive }) => isActive ? styles.active : undefined

    return(
        <header className={styles.header}>
            <h1 className={styles.headerTitle}>
                <NavLink to="/" end>Chelsea's Drawings</NavLink>
            </h1>
        
            <nav className={styles.headerNav}>
                <ul className={styles.headerNavList}>
                    <li>
                        <NavLink
                            to="/"
                            className={activeLink}
                            end
                        >
                            Home
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/portfolio"
                            className={activeLink}
                        >
                            Portfolio
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/about"
                            className={activeLink}
                        >
                            About
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;