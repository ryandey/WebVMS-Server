import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header>
      <div className="container">
        <Link to="/"><h1>WebVMS</h1></Link>
        <nav>
          <Link to="/volunteers">Volunteers</Link>
          <Link to="/opportunities">Opportunities</Link>
          <Link to="/login" className="btnLogin">Log In</Link>
          <Link to="/" className="btnLogout">Log Out</Link>
        </nav>
      </div>
    </header>
  )
}

export default Navbar;