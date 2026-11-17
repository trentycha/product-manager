import { Link } from 'react-router'

export default function NavBar() {
    return (
        <nav className="navbar bg-light shadow-sm">
          <div className="container">
            <div className="d-flex gap-3">
                <Link to="/" className="nav-link">
                Product Manager
                </Link>

                <Link to="/products/add" className="nav-link">
                Ajouter un produit
                </Link>
            </div>
          </div>
        </nav>
    )
}