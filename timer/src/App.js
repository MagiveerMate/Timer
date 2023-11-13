import React, { useState } from 'react';
import Timer from './Timer';
import './App.css'; // Import the CSS file


const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleDarkModeToggle = () => {
    setIsDarkMode(prevMode => !prevMode);
    // Add the script to toggle dark mode class on the body element
    const body = document.body;
    body.classList.toggle('dark-mode');
  };

  const appStyles = {
    background: isDarkMode ? '#121212' : '#fff',
    color: isDarkMode ? '#fff' : '#333',
  };

  return (
    <div className="app" style={appStyles}>
      <div className="dark-mode-toggle">
        <label htmlFor="darkMode">Dark Mode:</label>
        <input
          type="checkbox"
          id="darkMode"
          checked={isDarkMode}
          onChange={handleDarkModeToggle}
        />
      </div>
      <div className='block'>
      <h1 className="header">Timer App</h1>
      <Timer />
      
      </div>
      
    </div>
  );
};

export default App;
