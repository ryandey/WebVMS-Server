import { useOpportunityContext } from "../hooks/useOpportunityContext";
import { Link } from 'react-router-dom';
import { useAuthContext } from "../hooks/useAuthContext";

const OpportunityDetails = ({ opportunity }) => {
  const { dispatch } = useOpportunityContext(); // Allow access to manage opps
  const { user } = useAuthContext(); // Allow access to manage opps

  // Logic for delete button
  const handleDelete = async () => {
    // Delete opp from the database
    const response = await fetch("/api/opportunities/" + opportunity._id, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });

    const json = await response.json();

    // Ensure DB succesfully deleted opp before updating UI
    if (response.ok) {
       // remove from global state to update UI
      dispatch({ type: 'DELETE_OPPORTUNITY', payload: json });
    }
  }

  return (
    // Basic details component. Will build a more complex design later.
    <div className="opportunity-details">
      <h4>{opportunity.name}</h4>
      <p><strong>Description:</strong> {opportunity.description}</p>
      <p><strong>Date</strong> {opportunity.date}</p>
      <p><strong>Time:</strong> {opportunity.time}</p>
      <p><strong>requiredSkills:</strong> {opportunity.requiredSkills}</p>
      <div>
        <Link to={"/opportunities/edit/" + opportunity._id}>
        <span className='material-symbols-outlined'>edita</span>
         </Link>
        <span className='material-symbols-outlined' onClick={handleDelete}>delete</span>
      </div>
      
    </div>
  )
}

export default OpportunityDetails;