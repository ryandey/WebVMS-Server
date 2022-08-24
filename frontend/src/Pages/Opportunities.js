import { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useOpportunityContext } from '../hooks/useOpportunityContext'
import { useAuthContext } from '../hooks/useAuthContext';

// components
import OpportunityDetails from '../components/OpportunityDetails'


const Opportunities = () => {
  const { opportunities, dispatch } = useOpportunityContext();
  const { user } = useAuthContext();

    useEffect(() => {
      const fetchOpportunities = async () => {
        const response = await fetch('/api/opportunities', {
          headers: {'Authorization': `Bearer ${user.token}`}
        })
        const json = await response.json(); 

        if (response.ok) {
            dispatch({ type: 'SET_OPPORTUNITIES', payload: json })
        }
    };
      fetchOpportunities();
    }, [dispatch, user]);

  return (
    <div className="opportunities">
      <div className="menu">
        <h2>Manage Opportunities</h2>
        <div className="menu-buttons">
          <form action="search">
            <input type="text" placeholder='Search opportunities'/>
          </form>
          <Link to="/opportunities/add">
            <button className="btnAdd">Add <span className="material-symbols-outlined">add</span></button>
          </Link>
        </div>
      </div>
      <div className="vol-list">
        {opportunities && opportunities.map((opportunities) => (
          <OpportunityDetails key={opportunities._id} opportunities={opportunities} />
        ))}
        
      </div>
    </div>
  )
}

export default Opportunities