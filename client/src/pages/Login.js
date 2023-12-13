import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';

const Login = ({ handleLoginSubmit }) => {
  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  return (
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

        <Button variant="primary" onClick={() => handleLoginSubmit(loginUsername, loginPassword)}>
          Login
        </Button>
      </Form>
    </Container>
  );
};

export default Login;