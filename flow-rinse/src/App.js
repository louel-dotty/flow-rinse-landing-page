import React from 'react';
import './App.scss';
import {Container,Row, Col} from 'react-bootstrap'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch
} from 'react-router-dom';
import Login from "./pages/Login";
import UserTimeSheet from "./pages/UserTimeSheet";

function App() {
  return (
    <div className="App">
      <Router>
          {/* <SidbarNav /> */}
          <Container>
            <Row className="content">
              <Col>
                <Route exact path="/">
                  <Login />
                </Route>
                <Route path="/booking">
                  <UserTimeSheet />
                </Route>
              </Col>
            </Row>
          </Container>
      </Router>
    </div>
  );
}

export default App;