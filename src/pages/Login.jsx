import React from "react";
import { BsDiscord } from "react-icons/bs";
import { SiWalletconnect } from "react-icons/si";
import "../assets/style/login.scss";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="auth">
      <div className="content">
        <div className="top">
          <Link to="/">
            <img
              src={require("../assets/images/icon_logo.svg").default}
              alt=""
              className="logo"
            />
          </Link>
          <div className="h3s">
            <h3 className="title">
              First time on <span className="purple_text">FAST</span>
              <span className="green_text">LANE</span>?
            </h3>
            <div className="button but1">
              <h4 className="button">Create an account</h4>
            </div>
          </div>
        </div>
        <div className="rest">
          <h2 className="h2">
            Log in to <span className="purple_text">FAST</span>
            <span className="green_text">LANE</span>
          </h2>
          <p className="bold_p">Welcome back!</p>

          <div className="button but3_1">
            <h4 className="button">
              <BsDiscord />
              Log in with Discord
            </h4>
          </div>
          <div className="button but3_1">
            <h4 className="button">
              <SiWalletconnect />
              Log in with WalletConnect
            </h4>
          </div>
          <div className="or">
            <div className="liner"></div>
            <h4 className="button">OR</h4>
          </div>
          <p className="bold_p">Email address</p>
          <input type="text" placeholder="Kenny@fastlane.io" />
          <div className="button but3_1">
            <h4 className="button">Log in with Email</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
