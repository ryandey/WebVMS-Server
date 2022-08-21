import { Link } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleLogout = () => {
    logout();
  }

  return (
    <header>
      <div className="container">
        <Link to="/"><h1>WebVMS</h1></Link>
        <nav>
          {/* User is logged in */}
          {user && (
            <>
              <Link to="/volunteers">Volunteers</Link>
              <Link to="/opportunities">Opportunities</Link>
              <button onClick={handleLogout} className="btnLogout">Log Out</button>
            </>
          )}

          {/* User is not logged in */}
          {!user && (
            <Link to="/login" className="btnLogin">Log In</Link>
          )}
        </nav>
      </div>
    </header>
  )
}

export default Navbar;