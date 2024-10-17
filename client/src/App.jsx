import {React, useState} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateUsers from './Components/CreateUsers';
import Users from './Components/Users';
import UpdateUser from './Components/UpdateUser';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>
       <Routes>
        <Route path="/" element={<Users/>}></Route>
        <Route path="/create" element={<CreateUsers/>}></Route>
        <Route path="/update/:id" element={<UpdateUser/>}></Route>
       </Routes>
       </BrowserRouter>
      
    </div>
  )
}

export default App
