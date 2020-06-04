import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { Form,Button } from 'react-bootstrap';
import styled from 'styled-components';
import axios from 'axios';

const LoginFormWrapper = styled.div`
    background: #080808;
    padding: 3.750em;
    width: 26.250em;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 0.4375em;
`;

const LoginForm = () => {
  const [emailCreds, setEmailCreds] = useState();
  const [passwordCreds, setPasswordCreds] = useState();
  const [validated, setValidated] = useState(false);
  const history = useHistory();


  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }
    setValidated(true);

    axios.post('http://timeagotchi-v2-backend.test/api/v1/auth/login', 
      {
        email: emailCreds,
				password: passwordCreds, 
        headers: { 
                    'Content-Type' : 'application/json',
                    'Accept' : 'application/json'
                  }
      })
      .then(res => {
        // console.log(res);
        // console.log(res.data);
        // console.log(res.data.success.token);
        localStorage.setItem('userToken',res.data.success.token);
        const userToken = localStorage.getItem('userToken')
        
        if(userToken){
          history.push("/booking")
        }  

      })
      .catch(() =>{
        console.log('error')
      })

      
  };

  const handleChange = (event) => {
    if(event.target.name === "emailname"){
      // console.log(event.target.value)
      setEmailCreds(event.target.value)
    } 

    if(event.target.name === "password"){
      // console.log(event.target.value)
      setPasswordCreds(event.target.value)
    }
  }

  return (
    <LoginFormWrapper>
      <h2 className="text-2 mb-5"> USER LOGIN</h2>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Control 
            required
            name="emailname"
            type="email" 
            placeholder="Email" 
            onChange={handleChange}
          />
          {/* <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text> */}
        </Form.Group>
      
        <Form.Group controlId="formBasicPassword">
          <Form.Control 
            required
            name="password"
            type="password" 
            placeholder="Password" 
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Button variant="primary" type="submit" className="w-100">
            Login
          </Button>
        </Form.Group>
      </Form>
      {/* // eslint-disable-next-line */}
      <a href="#" className="text-5">Forgot Password</a>
    </LoginFormWrapper>
  );
    
  };


   

export default LoginForm;
