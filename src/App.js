import './App.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Certificate from './Certificate';

function App() {
  const [certificateNumber, setCertificateNumber] = useState('');

  const handleChange = (event) => {
    setCertificateNumber(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Redirect to the certificate page with the entered number
    window.location.href = `/certificate/${certificateNumber}`;
  };

  return (
    <div className="App">
      <h1>Hi Jabbar</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={certificateNumber}
          onChange={handleChange}
          placeholder="Enter certificate number"
        />
        <button type="submit">Go</button>
      </form>
    </div>
  );
}

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<App />} />
        <Route path="certificate/:hi" element={<Certificate />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
