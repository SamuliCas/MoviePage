// Register.js
import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';

const Register = ({ handleRegister }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
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

        <Button variant="primary" onClick={() => handleRegister(username, password)}>
          Register
        </Button>
      </Form>
    </Container>
  );
};

export default Register;
