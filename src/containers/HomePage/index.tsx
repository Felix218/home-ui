import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Styled from "./styles.css";

interface HomeProps {
  name: string;
  userProfile: Object;
}

const Home: React.SFC<HomeProps> = ({ userProfile }) => {
  return <Styled.HomePageStyles></Styled.HomePageStyles>;
};

const mapStateToProps = () => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
