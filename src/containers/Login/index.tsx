import React from "react";
import { connect } from "react-redux";
import Styled from "./styles.css";

interface LoginProps {
  name: string;
}

const Login: React.FC<LoginProps> = (props) => {
  const { name } = props;
  return (
    <Styled.LoginPageStyles>
      <div className="login-header"></div>
      <div className="login-content"></div>
      <div className="login-footer"></div>
    </Styled.LoginPageStyles>
  );
};

const mapStateToProps = () => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
