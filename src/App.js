import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Home} from './pages/home/index';
import {EmailSignIn, GoogleSignIn} from './components/authComponets';
function App() {
  return (
    <div className="App">
      <Router>
        <EmailSignIn/>
        <GoogleSignIn/>
        <Routes>
        <Route path ="/"/>
        <Route path= "/Home" exact element = {<Home/>}/>
        </Routes>
        </Router>
   </div>
  );
}

export default App;