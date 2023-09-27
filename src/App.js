import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import AddLinkedAccounts from './components/AddLinkedAccounts';

const App = () => {
  const handleSelectRegion = (region) => {
    console.log(`Selected region: ${region}`);
    // Here you can add the logic to go to the next step
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigate to="/add-linked-accounts" />} />
          <Route path="/add-linked-accounts" element={<AddLinkedAccounts onSelectRegion={handleSelectRegion} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
