import { useState } from 'react';
import { useVolunteersContext } from '../hooks/useVolunteersContext';
import { useAuthContext } from '../hooks/useAuthContext';

const EditVolunteerForm = ({ volunteer }) => {
  const { user } = useAuthContext();
  const { dispatch } = useVolunteersContext(); // Allow access to manage volunteers
  const [username, setUserName] = useState();
  const [password, setPassword] = useState('');
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
  const [hasCopyOfID, setHasCopyOfID] = useState('');
  const [hasCopyOfSSN, setHasCopyOfSSN] = useState('');
  const [approvalStatus, setApprovalStatus] = useState('');
  const [availabilityTimes, setAvailabilityTimes] = useState('');
  const [currentLicenses, setCurrentLicenses] = useState('');
  const [skills, setSkills] = useState('');
  const [preferredCenter, setPreferredCenter] = useState('');
  const [error, setError] = useState('');
  const [emptyFields, setEmptyFields] = useState([]);


  const handleUpdate = async (e) => {
    e.preventDefault(); // Prevent page refresh on submit

    

    const response = await fetch('/api/volunteers/edit/'  + volunteer._id, {
      method: 'PATCH',
      body: JSON.stringify(volunteer),
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

    // Reset form fields after submission and then add volunteer to global state
    if (response.ok) {
      setEmptyFields([])
      setError(null);
      setUserName('')
      setPassword('')
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
      dispatch({ type: 'SET_VOLUNTEERS', payload: json });
    }
  }

  return (
    <div>
      <form className="create" onSubmit={handleUpdate}>
        <h2>Update the Volunteer</h2>

        {/* NAME */}
        <div className="name-inputs">
            <label>Username*</label>
            <input 
              type="text"
              value={volunteer.username} 
              onChange={(e) => setUserName(e.target.value)} 
              className={emptyFields.includes('username') ? 'error' : ''}
            />
          </div>
          <div className="name-inputs">
            <label>Password*</label>
            <input 
              type="text"
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              className={emptyFields.includes('password') ? 'error' : ''} 
            />
          </div>
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
            onChange={(e) => setEmail(e.target.value)} 
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
         
          <label>ID*</label>
          <select
            value={hasCopyOfID} 
            onChange={(e) => setHasCopyOfID(e.target.value)} 
            className={emptyFields.includes('hasCopyOfID') ? 'error' : ''} 
          >
            <option></option>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
          
          <label>SSN*</label>
          <select
            value={hasCopyOfSSN} 
            onChange={(e) => setHasCopyOfSSN(e.target.value)} 
            className={emptyFields.includes('hasCopyOfSSN') ? 'error' : ''} 
          >
            <option></option>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
          
          <label>Approval Status*</label>
          <input
            type="text"
            value={approvalStatus} 
            onChange={(e) => setApprovalStatus(e.target.value)} 
            className={emptyFields.includes('approvalStatus') ? 'error' : ''} 
          />
           <label>Time of Availability*</label>
          <input
            type="text"
            value={availabilityTimes} 
            onChange={(e) => setAvailabilityTimes(e.target.value)} 
            className={emptyFields.includes('availabilityTimes') ? 'error' : ''} 
          />
          <label>Current Licenses</label>
          <input
            type="text"
            value={currentLicenses} 
            onChange={(e) => setCurrentLicenses(e.target.value)} 
            className={emptyFields.includes('currentLicenses') ? 'error' : ''} 
          />
          <label>Skills</label>
          <input
            type="text"
            value={skills} 
            onChange={(e) => setSkills(e.target.value)} 
            className={emptyFields.includes('skills') ? 'error' : ''} 
          />
          <label>Preferred Center*</label>
          <input
            type="text"
            value={preferredCenter} 
            onChange={(e) => setPreferredCenter(e.target.value)} 
            className={emptyFields.includes('preferredCenter') ? 'error' : ''} 
          />

          
          
          
        </div>
        

        
        
        <button className="btnAdd">Update Volunteer</button>


          {error && <div className="error">{error}</div>}
      </form>
    </div>
  )
}

export default EditVolunteerForm