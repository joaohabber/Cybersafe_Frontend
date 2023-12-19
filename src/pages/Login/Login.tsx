import { Form, Image, Button, Row, InputGroup } from 'react-bootstrap';
import { Envelope, Key } from 'react-bootstrap-icons';
import { useState, useContext } from 'react';
import {useNavigate} from 'react-router-dom'
import './Login.css';
import { AuthContext } from '../../contexts/AuthContext';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const authContext = useContext(AuthContext);

  console.log(`auth context: ${authContext}`);

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event: any) {
    event.preventDefault();
    console.log("Submitted");

    if(!validateForm()) return;

    console.log("Login successful");
    authContext && authContext.login && authContext.login(email, password);
    navigate('/');
  }

  return (
    <div className="login-form">
        <Image className="image" src="src/assets/cybersafe-logo.png" />
        <Row className="form-container">
          <Form>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">
                <Envelope/>
              </InputGroup.Text>
              <Form.Control size="lg" type="email" className="input" placeholder="Username" value={email} onChange={event => setEmail(event.target.value)}/>
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">
                <Key/>
              </InputGroup.Text>
              <Form.Control size="lg" type="password" className="input" placeholder="Password" value={password} onChange={event => setPassword(event.target.value)}/>
            </InputGroup>
            <Button size="lg" id="login-button" type="submit" onClick={handleSubmit}>
              Login
            </Button>
          </Form>
        </Row>
    </div>
  );
}

export default Login;
