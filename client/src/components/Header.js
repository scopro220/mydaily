import React from "react";
import { FcGoogle } from "react-icons/fc";
import { connect } from "react-redux";

class Header extends React.Component {
  renderButton() {
    switch (this.props.auth) {
      case null:
        return "";
      case false:
        return (
          <a href="/auth/google">
            Login with
            <span>
              {" "}
              <FcGoogle />
            </span>
            oogle
          </a>
        );
      default:
        return <a href="/api/logout">Log Out</a>;
    }
  }

  render() {
    return (
      <div className="header">
        <nav className="nav-wrapper">
          <h1 className="app-name">
            <span>My</span>Daily
          </h1>
          <div>{this.renderButton()}</div>
        </nav>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
