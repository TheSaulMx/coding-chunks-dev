import { Link, Outlet } from "react-router-dom";
import './layoutStyle.css'

function Layout() {
    return (
        <main className="main-container">
            <nav>
                <ul>
                    <li>
                        <Link className="Link" to="/">Home</Link>
                    </li>

                    <li>
                        <Link className="Link" to="/about">About</Link>
                    </li>

                    <li>
                        <Link className="Link" to="/FAQ">FAQ</Link>
                    </li>
                </ul>
            </nav>
            <section className="section-container">
                <Outlet />
            </section>
        </main>
    );
}

export default Layout;