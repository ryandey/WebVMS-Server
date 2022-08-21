import { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useVolunteersContext } from '../hooks/useVolunteersContext'
import { useAuthContext } from '../hooks/useAuthContext';

// components
import VolunteerDetails from '../components/VolunteerDetails'
//import EditVolunteerForm from '../components/EditVolunteerForm';

const Volunteers = () => {
  const { volunteers, dispatch } = useVolunteersContext();
  const { user } = useAuthContext();

    useEffect(() => {
      const fetchVolunteers = async () => {
        const response = await fetch('/api/volunteers', {
          headers: {'Authorization': `Bearer ${user.token}`}
        })
        const json = await response.json(); 

        if (response.ok) {
            dispatch({ type: 'SET_VOLUNTEERS', payload: json })
        }
    };
      fetchVolunteers();
    }, [dispatch, user]);

  return (
    <div className="volunteers">
      <div className="menu">
        <h2>Manage Volunteers</h2>
        <div className="menu-buttons">
          <form action="search">
            <input type="text" placeholder='Search volunteers'/>
          </form>
          <Link to="/volunteers/add">
            <button className="btnAdd">Add <span className="material-symbols-outlined">add</span></button>
          </Link>
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