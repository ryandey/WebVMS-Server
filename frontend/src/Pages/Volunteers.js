import { useEffect } from 'react'
import { Link } from 'react-router-dom';
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