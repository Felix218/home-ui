import React from "react";
import { connect } from "react-redux";
import Styled from "./styles.css";

interface LoginProps {
  name: string;
}

const Login: React.FC<LoginProps> = () => {
  return <Styled.LoginPageStyles></Styled.LoginPageStyles>;
};

const mapStateToProps = () => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
