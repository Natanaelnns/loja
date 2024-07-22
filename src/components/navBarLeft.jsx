import Link from "next/link"

const NavBarLeft = () => {
    return (
        <div className="col-md-3">
            <h3>Tipos de Produtos</h3>
            <ul className="nav flex-column">
                <li className="nav-item">
                    <Link href="/eletronicos" legacyBehavior>
                        <a className="nav-link">Eletrônicos</a>
                    </Link>
                </li>
                <li className="nav-item">
                    {/* <Link> */}
                    <a className="nav-link">Roupas</a>
                    {/* </Link> */}
                </li>
                <li className="nav-item">
                    {/* <Link> */}
                    <a className="nav-link">Acessórios</a>
                    {/* </Link> */}
                </li>
                {/* Adicione mais tipos de produtos aqui */}
            </ul>
        </div>
    )
}

export default NavBarLeft