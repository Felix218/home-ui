import React from "react";
import { connect } from "react-redux";
import Styled from "./styles.css";

interface RegistrationProps {
  name: string;
  email: string;
  phone: string;
}

const Registration: React.SFC<RegistrationProps> = (props) => {
  const { name, email, phone } = props;
  return (
    <Styled.RegistrationPageStyles>
      <div className="login-header"></div>
      <div className="login-content"></div>
      <div className="login-footer"></div>
    </Styled.RegistrationPageStyles>
  );
};

const mapStateToProps = () => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Registration);
