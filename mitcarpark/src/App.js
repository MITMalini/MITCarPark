import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Floor3 from './core/Floor3';
import Floor4 from "./core/Floor4";


export default function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/floor3" exact element={<Floor3 />} />
          <Route path="/floor4" exact element={<Floor4 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}