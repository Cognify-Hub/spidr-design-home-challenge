import React from 'react';
import InterestForm from './components/InterestForm';
import InterestForm2 from './components/InterestForm2';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<InterestForm/>} />
          <Route path="/version1" element={<InterestForm/>} />
          <Route path="/version2" element={<InterestForm2 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
