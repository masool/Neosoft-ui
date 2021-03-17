import React, { Component } from 'react'
import { connect } from "react-redux";
import { Row, Col, Input, Label, FormGroup, Container, Button } from 'reactstrap';
import '../styles/Notes.css';
import {
  signInUser,
} from '../actions';

class Login extends Component {

  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
    }
  }

  submit = () => {
    const { username, password } = this.state;
    this.props.signInUser({
      username,
      password,
      role: "admin",
    });
  }

  render() {
    return (
        <Container className="mt-5 pt-5">
          <div className="sign-in card bg-light-grey shadow p-5">
            <h4 className="text-center text-primary mb-4">Sign In</h4>
            <FormGroup>
              <Row>
                <Col lg={3}></Col>
                <Col lg={6}>
                  <Input
                    required
                    type="text"
                    name="username"
                    className="ml-0"
                    placeholder="Username"
                    defaultValue={this.state.username}
                    onChange={(e) => this.setState({ username: e.target.value })}
                  />
                </Col>
              </Row>
            </FormGroup>
            <FormGroup>
              <Row>
              <Col lg={3}></Col>
                <Col lg={6}>
                  <Input
                    required
                    type="text"
                    name="password"
                    className="ml-0"
                    placeholder="Password"
                    defaultValue={this.state.password}
                    onChange={(e) => this.setState({ password: e.target.value })}
                  />
                </Col>
              </Row>
            </FormGroup>
            <div className="text-center mt-4">
              <Button color="btn btn-primary" onClick={this.submit}>
                Login
              </Button>
            </div>
          </div>
        </Container>
    )
  }
}

export default connect(null, {
  signInUser,
})(Login);

