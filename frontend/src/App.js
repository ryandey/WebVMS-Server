import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext';

// pages/components
import Home from './Pages/home';
import Navbar from './components/Navbar';
import Volunteers from './Pages/Volunteers';
import PendingVolunteers from './Pages/PendingVolunteers'
import ApprovedVolunteers from './Pages/ApprovedVolunteers'
import DisapprovedVolunteers from './Pages/DisapprovedVolunteers'
import MixedVolunteers from './Pages/MixedVolunteers'
import AddVolunteer from './Pages/AddVolunteer';
import Opportunities from './Pages/Opportunities';
import EditVolunteer from './Pages/EditVolunteer';
import Login from './Pages/Login';
import Register from './Pages/Register';


function App() {
  const { user } = useAuthContext();

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <div className = "pages">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/volunteers" element={user ? <Navigate to="/login" /> : <Volunteers />} />
          <Route path="/volunteers/pending" element={!user ? <PendingVolunteers /> : <Navigate to="/login" />} />
          <Route path="/volunteers/approved" element={!user ? <ApprovedVolunteers /> : <Navigate to="/login" />} />
          <Route path="/volunteers/disapproved" element={!user ? <DisapprovedVolunteers /> : <Navigate to="/login" />} />
          <Route path="/volunteers/mixed" element={!user ? <MixedVolunteers /> : <Navigate to="/login" />} /> 
          <Route path="volunteers/add" element={!user ? <AddVolunteer /> : <Navigate to="/login" />} />
          <Route path="volunteers/edit" element={!user ? <EditVolunteer /> : <Navigate to="/login" />}/>
          <Route path="/opportunities" element={!user ? <Opportunities /> : <Navigate to="/login" />} />
          <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
          <Route path="/register" element={!user ? <Register /> : <Navigate to="/" />} />
        </Routes>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
