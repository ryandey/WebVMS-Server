import { useState } from 'react';
import { useOpportunityContext } from '../hooks/useOpportunityContext';
import { useAuthContext } from '../hooks/useAuthContext';

const AddOpportunityForm = () => {
  const { user } = useAuthContext();
  const { dispatch } = useOpportunityContext(); // Allow access to manage opportunities
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [streetAddress, setStreetAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [error, setError] = useState('');
  const [emptyFields, setEmptyFields] = useState([]);

  // Logic for add button
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page refresh on submit

    const opportunity = {
      name,
      description,
      streetAddress,
      city,
      state,
      zipCode,
      requiredSkills,
      date,
      time
    }

    const response = await fetch('/api/opportunities', {
      method: 'POST',
      body: JSON.stringify(opportunity),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${user.token}`
      }
    })

    const json = await response.json();

    // Error handling
    if (!response.ok) {
      setError(json.error);
      setEmptyFields(json.emptyFields);
    }

    // Reset form fields after submission and then add opportunity to global state
    if (response.ok) {
      setEmptyFields([])
      setError(null);
      setName('')
      setDescription('')
      setStreetAddress('')
      setCity('')
      setState('')
      setZipCode('')
      setRequiredSkills('')
      setDate('')
      setTime('')
      dispatch({ type: 'ADD_OPPORTUNITY', payload: json });
    }
  }

  return (
    <div>
      <form className="create" onSubmit={handleSubmit}>
        <h2>Add a New Opportunity</h2>

        {/* NAME */}
        <div className="name-inputs">
            <label>Name*</label>
            <input 
              type="text"
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              className={emptyFields.includes('name') ? 'error' : ''}
            />
          </div>
          <div className="name-inputs">
            <label>Description*</label>
            <input 
              type="text"
              value={description} 
              onChange={(e) => setDescription(e.target.value)} 
              className={emptyFields.includes('description') ? 'error' : ''} 
            />
          </div>
        

        {/* ADDRESS & CITY */}
        <div className="form-address">
          <label>Address of Opportunity*</label>
          <input 
            type="text"
            value={streetAddress} 
            onChange={(e) => setStreetAddress(e.target.value)} 
            className={emptyFields.includes('streetAddress') ? 'error' : ''} 
          />
          <label>City*</label>
          <input 
            type="text"
            value={city} 
            onChange={(e) => setCity(e.target.value)} 
            className={emptyFields.includes('city') ? 'error' : ''} 
          />
        </div>

        {/* STATE AND ZIP CODE */}
        <div className="form-stateZip">
          <div className="name-inputs">
            <label>State*</label>
            <input 
              type="text"
              value={state} 
              onChange={(e) => setState(e.target.value)} 
              className={emptyFields.includes('state') ? 'error' : ''} 
            />
          </div>

          <div className="name-inputs">
            <label>Zip Code*</label>
            <input 
              type="text"
              value={zipCode} 
              onChange={(e) => setZipCode(e.target.value)} 
              className={emptyFields.includes('zipCode') ? 'error' : ''} 
            />
          </div>

          <div className="name-inputs">
            <label>requiredSkills*</label>
            <input 
              type="text"
              value={requiredSkills} 
              onChange={(e) => setRequiredSkills(e.target.value)} 
              className={emptyFields.includes('requiredSkills') ? 'error' : ''} 
            />
          </div>

          <div className="name-inputs">
            <label>Date*</label>
            <input 
              type="text"
              value={date} 
              onChange={(e) => setDate(e.target.value)} 
              className={emptyFields.includes('date') ? 'error' : ''} 
            />
          </div>

          <div className="name-inputs">
            <label>Time*</label>
            <input 
              type="text"
              value={time} 
              onChange={(e) => setTime(e.target.value)} 
              className={emptyFields.includes('time') ? 'error' : ''} 
            />
          </div>
        </div>
      </form>
    </div>
  )
}

export default AddOpportunityForm