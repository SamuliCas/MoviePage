import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Form, Button } from 'react-bootstrap';
import MyNavbar from './components/NavBar';

function App() {
  //State to store data fethced from backend
  const [backendData, setBackendData] = useState([{}])

  // States to handle username input and password input
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const [loggedInUser, setLoggedInUser] = useState(null);
  
  //Fetch data from the backend
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

  // Handle the registration when the "Register" button is clicked
  const handleLogin = () => {
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

  const handleLoginSubmit = () => {   
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
          setLoggedInUser(loginUsername)
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

  return (
    <div>
      <MyNavbar loggedInUser={loggedInUser}/>

      <Container>
        <Form>
          <Form.Group controlId="formUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" onClick={handleLogin}>
            Register
          </Button>
        </Form>
      </Container>

      <Container>
        <Form>
          <Form.Group controlId="formLoginUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              value={loginUsername}
              onChange={(e) => setLoginUsername(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formLoginPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" onClick={handleLoginSubmit}>
            Login
          </Button>
        </Form>
      </Container>

      {/* Just simple way to display backend data */}
      {backendData.length === 0 ? (
        <p>Loading...</p>
      ) : (
        backendData.map((user, i) => (
          <p key={i}>{user.username}</p>
        ))
      )}

    </div>
  )
}

export default App