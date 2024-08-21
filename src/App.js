
import './App.css';
import Navbar from './layout/Navbar';
import Table from "./components/Table";
import Register from './components/Register';
import Login from './components/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserDashboard from './components/UserDashboard';
import PrivateRoute from './components/PrivateRoute';

function App() {

  return (

    <Router>
    <div className='App'>
    <Navbar />
<Routes>
  <Route exact path='/Table' element={<Table />} />
  <Route exact path='/Register' element={<Register />} />
  <Route exact path='/Login' element={<Login />} />

  <Route exact path='/user' element={<PrivateRoute />} >
  <Route exact path='dashboard' element={<UserDashboard />} />
  </Route>
  

  

</Routes>
    </div>
</Router>

  )
}
export default App;