import { useVolunteersContext } from "../hooks/useVolunteersContext";
import { Link } from 'react-router-dom';
import { useAuthContext } from "../hooks/useAuthContext";

const VolunteerDetails = ({ volunteer }) => {
  const { dispatch } = useVolunteersContext(); // Allow access to manage volunteers
  const { user } = useAuthContext(); // Allow access to manage volunteers

  // Logic for delete button
  const handleDelete = async () => {
    // Delete volunteer from the database
    const response = await fetch("/api/volunteers/" + volunteer._id, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });

    const json = await response.json();

    // Ensure DB succesfully deleted volunteer before updating UI
    if (response.ok) {
       // remove from global state to update UI
      dispatch({ type: 'DELETE_VOLUNTEERS', payload: json });
    }
  }

  return (
    // Basic details component. Will build a more complex design later.
    <div className="volunteer-details">
      <h4>{volunteer.firstName} {volunteer.lastName}</h4>
      <p><strong>Email:</strong> {volunteer.email}</p>
      <p><strong>Phone:</strong> {volunteer.phoneNumberCell}</p>
      <p><strong>Availability:</strong> {volunteer.availabilityTimes}</p>
      <p><strong>Preferred Center:</strong> {volunteer.preferredCenter}</p>
      <div>
        <Link to={"/volunteers/edit/" +volunteer._id}>
        <span className='material-symbols-outlined'>edita</span>
         </Link>
        <span className='material-symbols-outlined' onClick={handleDelete}>delete</span>
      </div>
      
    </div>
  )
}

export default VolunteerDetails;