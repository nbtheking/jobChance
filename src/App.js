import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/Home'
import LoginAsEmployee from './pages/LoginAsEmployee'
import Jobs from './pages/Jobs'
import LoginAsEmployer from './pages/LoginAsEmployer'
import CreateAsEmployee from './pages/CreateAsEmployee'
import CreateAsEmployer from './pages/CreateAsEmployer'
import "bootstrap/dist/css/bootstrap.min.css";
import Employee from './pages/Employee'
import Company from './pages/Company';
import UpdateEmployeeData from './pages/UpdateEmployeeData';
import UpdateCompanyData from './pages/UpdateCompanyData';
import AddJob from './pages/AddJob';


function App() {
  return (
    <BrowserRouter>
    <Routes>
     
        <Route index element={<Home/>}/>
        <Route path="jobs" element={<Jobs/>}/>
        <Route path="createasemployee" element={<CreateAsEmployee/>}/>
        <Route path="createasemployer" element={<CreateAsEmployer/>}/>
        <Route path="loginasemployee" element={<LoginAsEmployee/>}/>
        <Route path="loginasemployer" element={<LoginAsEmployer/>}/>
        <Route path = "employee" element={<Employee/>}/>
        <Route path = "company" element={<Company/>}/>
        <Route path = "UpdateEmployeeData" element={<UpdateEmployeeData/>}/>
        <Route path = "UpdateCompanyData" element={<UpdateCompanyData/>}/>
        <Route path = "AddJob" element={<AddJob/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
