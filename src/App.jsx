import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from 'react-router-dom';

//routes
import Profile from './pages/Profile';
import Dashboard from './pages/Dashboard';
import ManageTask from './pages/ManageTask';
import TaskD from './pages/TaskD';
import TaskDashBoard from './pages/TaskDashBoard';
import PendingTask from './components/taskComponents/PendingTask';
import EditTask from './components/taskComponents/editTask';

import AddTask from './components/taskComponents/AddTask';
function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Profile />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/manageTask' element={<ManageTask />} />
        <Route path='/TaskDashBoard' element={<TaskDashBoard />} />
        <Route path='/PendingTask' element={<PendingTask/>}/>
        <Route path='/addTask' element={<AddTask/>}/>
        <Route path='/editTask' element={<EditTask/>}/>
        <Route path='/TaskD' element={<TaskD />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App; 