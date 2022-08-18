import { useVolunteersContext } from "../hooks/useVolunteersContext";

const VolunteerDetails = ({ volunteer }) => {
  const { dispatch } = useVolunteersContext(); // Allow access to manage volunteers

  // Logic for delete button
  const handleDelete = async () => {
    // Delete volunteer from the database
    const response = await fetch("/api/volunteers/" + volunteer._id, {
      method: 'DELETE',
      // headers: {
      //   Authorization: `Bearer ${user.token}`,
      // },
    });

    const json = await response.json();

    // Ensure DB succesfully deleted volunteer before updating UI
    if (response.ok) {
       // remove from global state to update UI
      dispatch({ type: 'DELETE_VOLUNTEER', payload: json });
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
      <div className='material-symbols-outlined'>edit</div>
      <span className='material-symbols-outlined' onClick={handleDelete}>delete</span>
    </div>
  )
}

export default VolunteerDetails;