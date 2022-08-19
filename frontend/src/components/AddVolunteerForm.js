import { useState } from 'react';
import { useVolunteersContext } from '../hooks/useVolunteersContext';

const AddVolunteerForm = () => {
  const { dispatch } = useVolunteersContext(); // Allow access to manage volunteers
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [streetAddress, setStreetAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [phoneNumberHome, setPhoneNumberHome] = useState('');
  const [phoneNumberCell, setPhoneNumberCell] = useState('');
  const [phoneNumberWork, setPhoneNumberWork] = useState('');
  const [education, setEducation] = useState('');
  const [emergencyContactName, setEmergencyContactName] = useState('');
  const [emergencyContactPhone, setEmergencyContactPhone] = useState('');
  const [emergencyContactEmail, setEmergencyContactEmail] = useState('');
  const [hasCopyOfID, setHasCopyOfID] = useState(false);
  const [hasCopyOfSSN, setHasCopyOfSSN] = useState(false);
  const [approvalStatus, setApprovalStatus] = useState('');
  const [availabilityTimes, setAvailabilityTimes] = useState('');
  const [currentLicenses, setCurrentLicenses] = useState('');
  const [skills, setSkills] = useState('');
  const [preferredCenter, setPreferredCenter] = useState('');
  const [error, setError] = useState('');
  const [emptyFields, setEmptyFields] = useState([]);

  // Logic for add button
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page refresh on submit

    const volunteer = {
      firstName,
      lastName,
      email,
      streetAddress,
      city,
      state,
      zipCode,
      phoneNumberHome,
      phoneNumberCell,
      phoneNumberWork,
      education,
      emergencyContactName,
      emergencyContactPhone,
      emergencyContactEmail,
      hasCopyOfID,
      hasCopyOfSSN,
      approvalStatus,
      availabilityTimes,
      currentLicenses,
      skills,
      preferredCenter,
    }

    const response = await fetch('/api/volunteers', {
      method: 'POST',
      body: JSON.stringify(volunteer),
      headers: {
        'Content-Type': 'application/json',
      }
    })

    const json = await response.json();

    // Error handling
    if (!response.ok) {
      setError(json.error);
      setEmptyFields(json.emptyFields);
    }

    // Reset form fields after submission and then add volunteer to global state
    if (response.ok) {
      setEmptyFields([])
      setError(null);
      setFirstName('')
      setLastName('')
      setEmail('')
      setStreetAddress('')
      setCity('')
      setState('')
      setZipCode('')
      setPhoneNumberHome('')
      setPhoneNumberCell('')
      setPhoneNumberWork('')
      setEducation('')
      setEmergencyContactName('')
      setEmergencyContactPhone('')
      setEmergencyContactEmail('')
      setHasCopyOfID(false)
      setHasCopyOfSSN(false)
      setApprovalStatus('')
      setAvailabilityTimes('')
      setCurrentLicenses('')
      setSkills('')
      setPreferredCenter('')
      dispatch({ type: 'ADD_VOLUNTEER', payload: json });
    }
  }

  return (
    <div>
      <form className="create" onSubmit={handleSubmit}>
        <h2>Add a New Volunteer</h2>

        {/* NAME */}
        <div className="form-name">
          <div className="name-inputs">
            <label>First Name*</label>
            <input 
              type="text"
              value={firstName} 
              onChange={(e) => setFirstName(e.target.value)} 
              className={emptyFields.includes('firstName') ? 'error' : ''}
            />
          </div>
          <div className="name-inputs">
            <label>Last Name*</label>
            <input 
              type="text"
              value={lastName} 
              onChange={(e) => setLastName(e.target.value)} 
              className={emptyFields.includes('lastName') ? 'error' : ''} 
            />
          </div>
        </div>

        {/* EMAIL ADDRESS */}
        <div className="form-email">
          <label>Email Address*</label>
          <input 
            type="email"
            value={email} 
            onChange={(e) => setFirstName(e.target.value)} 
            className={emptyFields.includes('firstName') ? 'error' : ''} 
          />
        </div>

        {/* PHONE NUMBERS */}
        <div className="form-phone">
          <div className="name-inputs">
          <label>Phone*</label>
            <input 
              type="text"
              value={phoneNumberCell} 
              onChange={(e) => setPhoneNumberCell(e.target.value)} 
              className={emptyFields.includes('phoneNumberCell') ? 'error' : ''}
            />
          </div>
          <div className="name-inputs">
          <label>Home Phone</label>
            <input 
              type="text"
              value={phoneNumberHome} 
              onChange={(e) => setPhoneNumberHome(e.target.value)} 
              className={emptyFields.includes('phoneNumberHome') ? 'error' : ''}
            />
          </div>
          <div className="name-inputs">
          <label>Work Phone</label>
            <input 
              type="text"
              value={phoneNumberWork} 
              onChange={(e) => setPhoneNumberWork(e.target.value)} 
              className={emptyFields.includes('phoneNumberWork') ? 'error' : ''}
            />
          </div>
        </div>

        {/* ADDRESS & CITY */}
        <div className="form-address">
          <label>Home Address*</label>
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
        </div>

        {/* EDUCATION */}
        <div className="form-education">
          <label>Education*</label>
          <select
            value={education}
            onChange={(e) => setEducation(e.target.value)}
            className={emptyFields.includes('education') ? 'error' : ''}
          >
            <option></option>
            <option value="diploma">Diploma</option>
            <option value="bachelors">Bachelors</option>
            <option value="masters">Masters</option>
            <option value="phd">PhD</option>
            <option value="noanswer">Prefer not to say</option>
          </select> 
        </div>

        {/* EMERGENCY CONTACT */}
        <div className="form-emergency">
          <h3>Emergency Contact Information</h3>
          <label>Name*</label>
          <input 
            type="text"
            value={emergencyContactName} 
            onChange={(e) => setEmergencyContactName(e.target.value)} 
            className={emptyFields.includes('emergencyContactName') ? 'error' : ''} 
          />

          <label>Phone*</label>
          <input 
            type="text"
            value={emergencyContactPhone} 
            onChange={(e) => setEmergencyContactPhone(e.target.value)} 
            className={emptyFields.includes('emergencyContactPhone') ? 'error' : ''} 
          />

          <label>Email*</label>
          <input 
            type="text"
            value={emergencyContactEmail} 
            onChange={(e) => setEmergencyContactEmail(e.target.value)} 
            className={emptyFields.includes('emergencyContactEmail') ? 'error' : ''} 
          />
        </div>
        

        
        
        

          {error && <div className="error">{error}</div>}
      </form>
    </div>
  )
}

export default AddVolunteerForm