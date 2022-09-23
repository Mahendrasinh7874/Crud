
import './App.css';
import Create from './components/Create';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import Update from './components/Update';
import React from 'react';
import Read from './components/Read';


function App() {
  return (
    <div className="App">
    <h2 style={{textAlign : 'center' , margin : "40px 0"}}>React Crud Operation</h2>
   <Router>
   <Routes>
   <Route path='/' element={<Create />} />
   <Route path='/update' element={<Update />} />
   <Route path='/read' element={<Read />} />
   </Routes>
   </Router>
   
   
    
   
    </div>
  );
}

export default App;
