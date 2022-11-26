import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'; 
import Navbar from './components/NavBar';

import Explore from './pages/Explore'; 
import Offers from './pages/Offers'; 
import Profile from './pages/Profile'; 
import SignIn from './pages/SignIn'; 
import SignUp from './pages/SignUp'; 
import ForgotPassword  from './pages/ForgotPassword';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Explore/>}/> 
          <Route path="/offers" element={<Offers/>}/> 
          <Route path="/profile" element={<Profile/>}/> 
          <Route path="/signin" element={<SignIn/>}/> 
          <Route path="/signup" element={<SignUp/>}/> 
          <Route path="/forgotpassword" element={<ForgotPassword/>}/> 
        </Routes>
        <Navbar/>
      </Router>

    </div>
  );
}

export default App;
