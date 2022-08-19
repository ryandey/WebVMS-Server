import { useEffect } from 'react'
import { useVolunteersContext } from '../hooks/useVolunteersContext'

// components
import VolunteerDetails from '../components/VolunteerDetails'

const Volunteers = () => {
  const { volunteers, dispatch } = useVolunteersContext();

    useEffect(() => {
      const fetchVolunteers = async () => {
        const response = await fetch('/api/volunteers');
        const json = await response.json(); 

        if (response.ok) {
            dispatch({ type: 'SET_VOLUNTEERS', payload: json })
        }
    };
      fetchVolunteers();
    }, [dispatch]);

  return (
    <div className="volunteers">
      <div className="menu">
        <h2>Manage Volunteers</h2>
        <div className="menu-buttons">
          <button className="btnAdd">Add <span className="material-symbols-outlined">add</span></button>
        </div>
      </div>
      {/* <div className='volunteers'>
          {volunteers && volunteers.map((volunteer) => (
              <p key={volunteer._id}>{volunteer.username}</p>
          ))}
      </div> */}
      <div className="vol-list">
        {volunteers && volunteers.map((volunteer) => (
          <VolunteerDetails key={volunteer._id} volunteer={volunteer} />
        ))}
      </div>
    </div>
  )
}

export default Volunteers