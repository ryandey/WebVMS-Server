import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/home';
import Navbar from './components/Navbar';
import Volunteers from './Pages/Volunteers';
import AddVolunteer from './Pages/AddVolunteer';
import Opportunities from './Pages/Opportunities';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <div className = "pages">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/volunteers" element={<Volunteers />} />
          <Route path="volunteers/add" element={<AddVolunteer />} />
          <Route path="/opportunities" element={<Opportunities />} />
        </Routes>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
