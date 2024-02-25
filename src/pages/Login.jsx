import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Check if email and password match the credentials
    if (email === "admin" && password === "admin") {
      // Redirect to the dashboard page
      navigate("/dashboard");
    } else {
      // Handle invalid credentials
      alert("Invalid email or password. Please try again.");
    }
  };

  return (
    <>
      <Header />
      <Container className="mt-5">
        <p>#enter username and password as "admin"</p>
        <Row className="justify-content-md-center">
          <Col xs={12} md={6}>
            <h2 className="text-center mb-4">Login to Your Account</h2>
            <Form onSubmit={handleLogin}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter username"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <br />
              <Button variant="primary" type="submit" block>
                Login
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Login;
