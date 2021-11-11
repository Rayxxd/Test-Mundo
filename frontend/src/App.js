import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Calles from './pages/Calles';
import Addcalles from './pages/Addcalles';
import Editcalles from './pages/Editcalles';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Calles/>} />
        <Route path="edit-calle/:id" element={ <Editcalles/>} />
        <Route path="add-calle" element={ <Addcalles/>} />
      </Routes>
    </Router>
  );
}

export default App;
