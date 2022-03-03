import * as React from 'react';
import { Routes, Route, } from "react-router-dom";


import Home from './components/Home'
import Clusters from './components/Clusters'
import Admin from './components/Admin'
import Edge from './components/Edge'
import Devices from './components/Devices';

function App() {
  return (
    <div className="App">


<Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/edge" element={<Edge />} />
        <Route path="/devices" element={<Devices />} />
        <Route path="/clusters" element={<Clusters />} />
</Routes>

    </div>
  );
}

export default App;
