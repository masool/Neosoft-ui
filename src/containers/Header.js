import React, { Component } from 'react'
import { withRouter } from 'react-router';

class Header extends Component {

  constructor() {
    super();
    this.state = {
      isOpen: false,
    }
  }

  logout = () => { 
    localStorage.removeItem("accessToken");
  }

  render() {
    const accessToken = localStorage.getItem("accessToken");
    return (
      <div className="header bg-dark py-3 text-light">
        <div className="d-flex">
          <h5 className="ml-3 cursor-pointer" onClick={() => this.props.history.push('/')}>
            <span>Home</span>
          </h5>
          <div className="ml-auto mr-3">
            <span className="link-text" onClick={this.logout}>
              Sign Out
            </span>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Header);

