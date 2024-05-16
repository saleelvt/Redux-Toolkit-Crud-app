
import './App.css';
import Main from './components/main';
import {BrowserRouter , Route,Routes} from 'react-router-dom'
import UserHome from "./components/admin/userHome";
import AdminLogin from "./components/admin/adminLogin";
import AdminHome from './components/admin/AdminHome';
import UserLogin from "./components/user/userLogin";
function App() {
  return (
    <div className="App">
     
     <BrowserRouter>

    <Routes>
      <Route path='/' element={<UserHome />} />
      <Route path='/adminLogin' element={  <AdminLogin />} />
      <Route path='/adminHome' element={  <AdminHome />} />
      <Route path='/uesrLogin' element={  <AdminLogin />} />

     {/* <Main/>  */}

    </Routes>

     </BrowserRouter>



    </div>
  );
}

export default App;
