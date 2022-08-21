import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext';

// pages/components
import Home from './Pages/home';
import Navbar from './components/Navbar';
import Volunteers from './Pages/Volunteers';
import AddVolunteer from './Pages/AddVolunteer';
import Opportunities from './Pages/Opportunities';
import EditVolunteer from './Pages/EditVolunteer';
import Login from './Pages/Login';
import Register from './Pages/Register';


function App() {
  const { admin } = useAuthContext();

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <div className = "pages">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/volunteers" element={admin ? <Navigate to="/login" /> : <Volunteers /> } />
          <Route path="volunteers/add" element={!admin ? <AddVolunteer /> : <Navigate to="/login" />} />
          <Route path="volunteers/edit" element={!admin ? <EditVolunteer /> : <Navigate to="/login" />}/>
          <Route path="/opportunities" element={!admin ? <Opportunities /> : <Navigate to="/login" />} />
          <Route path="/login" element={!admin ? <Login /> : <Navigate to="/" />} />
          <Route path="/register" element={!admin ? <Register /> : <Navigate to="/" />} />
        </Routes>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
