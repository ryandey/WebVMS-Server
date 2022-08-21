import { Link } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';

const Home = () => {
    const { user } = useAuthContext();

    return(
        <>
        {user && (
        <div className="home">
            <Link to="/volunteers">
                <div className="home-panel">
                    <span className="material-symbols-outlined">person</span>
                    <h2>Manage Volunteers</h2>
                    <p>View, update, and add volunteers</p>
                </div>
            </Link>
            
            <Link to="/opportunities">
                <div className="home-panel">
                    <span className="material-symbols-outlined">menu_book</span>
                    <h2>Manage Opportunities</h2>
                    <p>View, update, and add opportunities</p>
                </div>
            </Link>
        </div>
        )}
        
        {!user && (
            <h2>You must be logged in to view this page.</h2>
        )}
        </>
    )
}

export default Home