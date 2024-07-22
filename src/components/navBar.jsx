'use client'
import Link from "next/link";
import SearchButton from "./searchButton";

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand p-2" href="#">Loja Virtual</a>
            <SearchButton />
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end p-2" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">Início</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Ofertas</a>
                    </li>
                    <li className="nav-item">
                        <Link href='/carrinhoCompra' legacyBehavior>
                            <a className="nav-link">Carrinho</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/contact">Contato</a>
                    </li>
                </ul>
            </div>

        </nav>
    )
}

export default NavBar;