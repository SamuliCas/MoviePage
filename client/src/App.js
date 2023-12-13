// App.js
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MyNavbar from './components/NavBar';
import Login from './pages/Login';
import Register from './pages/Register';
import About from './pages/About';

function App() {
  // State and useEffect for fetching data...
  const [backendData, setBackendData] = useState([{}]);
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    fetch("/users")
      .then(response => response.json())
      .then(data => {
        setBackendData(data);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleLoginSubmit = (loginUsername, loginPassword) => {
    // Logic for handling login...
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: loginUsername, password: loginPassword }),
    })
      .then(response => {
        if (response.ok) {
          // Login successful
          console.log("Login successful");
          setLoggedInUser(loginUsername);
          // Add logic to redirect or handle successful login
        } else {
          // Login failed
          console.error("Login failed");
          // Add logic to display an error message or handle failed login
        }
      })
      .catch(error => {
        console.error("Error logging in:", error);
      });
  };

  const handleRegister = (username, password) => {
    // Logic for handling registration...
    fetch("/addUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.error("Error adding user:", error);
      });
    // Reload the page after registration
    window.location.reload();
  };

  return (
    <Router>
      <MyNavbar loggedInUser={loggedInUser} />
      <Routes>
        <Route
          path="/login"
          element={<Login handleLoginSubmit={handleLoginSubmit} />}
        />
        <Route
          path="/register"
          element={<Register handleRegister={handleRegister} />}
        />
        <Route path="/about" element={<About />} />
      </Routes>

      {/* Just a simple way to display backend data */}
      {backendData.length === 0 ? (
        <p>Loading...</p>
      ) : (
        backendData.map((user, i) => (
          <p key={i}>{user.username}</p>
        ))
      )}
    </Router>
  );
}

export default App;