import { useEffect, useState } from 'react'


const Home = () => {
    const [volunteers, setVolunteers] = useState(null)

    useEffect(() =>{
        const fetchVolunteers = async () => {
            const response = await fetch('/api/volunteers')
            const json = await response.json()
        
            if(response.ok){
                setVolunteers(json)
            }
        }

        fetchVolunteers()
    }, [])

    return(
        <div className = "home">
            <div className='volunteers'>
                {volunteers && volunteers.map((volunteer) => (
                    <p key={volunteer._id}>{volunteer.username}</p>
                ))}
            </div>
        </div>
    )
}

export default Home