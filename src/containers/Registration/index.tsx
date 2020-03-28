import React from "react";
import { connect } from "react-redux";
import Styled from "./styles.css";

interface RegistrationProps {
  name: string;
}

const Registration: React.SFC<RegistrationProps> = ({}) => {
  return <Styled.RegistrationPageStyles></Styled.RegistrationPageStyles>;
};

const mapStateToProps = () => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Registration);
