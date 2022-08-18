import { useEffect } from 'react'
import { useVolunteersContext } from '../hooks/useVolunteersContext'

// components
import VolunteerDetails from '../components/VolunteerDetails'

const Home = () => {
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

    return(
        <div className="home">
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

export default Home