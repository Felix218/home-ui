import React, { Component } from "react";
import { connect } from "react-redux";
import Styled from "./styles.css";

interface LoginProps {
  name: string;
}

const Login: React.SFC<LoginProps> = ({}) => {
  return (
    <Styled.LoginPageStyles>
      <input />
    </Styled.LoginPageStyles>
  );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
