import { Outlet, NavLink, Link } from "react-router-dom";

import eaton from "../../assets/eaton.png";

import styles from "./Layout.module.css";

import { useLogin } from "../../authConfig";

import { LoginButton } from "../../components/LoginButton";

const Layout = () => {
    return (
        <div className={styles.layout}>
            <header className={styles.header} role={"banner"}>
                <div className={styles.headerContainer}>
                    <nav>
                        <ul className={styles.headerNavList}>
                            <li className={styles.headerNavLeftMargin}>
                                <img src={eaton} alt="Eaton logo" width="120px" height="40px" className={styles.eatonlogo} />
                            </li>
                        </ul>
                    </nav>
                    <Link to="/" className={styles.headerTitleContainer}>
                        <h2 className={styles.headerTitle}>Joe GPT</h2>
                    </Link>
                    {useLogin && <LoginButton />}
                </div>
            </header>

            <Outlet />
        </div>
    );
};

export default Layout;
