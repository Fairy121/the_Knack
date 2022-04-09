import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Login from './Components/User/Login/Login';
import SignUp from './Components/User/SignUp/SignUp';
import OnboardingModal from './Components/Onboarding/OnboardingModal';
import Main from './Components/Main/Main';


function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path="/onboarding/:userId/*" element={<OnboardingModal />} />
        <Route path='/*' element={<Main />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
