import React from "react";
import { connect } from "react-redux";
import Styled from "./styles.css";

interface HomeProps {
  name: string;
  userProfile: Object;
}

const Home: React.SFC<HomeProps> = (props) => {
  const { name, userProfile } = props;
  return (
    <Styled.HomePageStyles>
      <div className="home-header"></div>
      <div className="home-content"></div>
      <div className="home-footer"></div>
    </Styled.HomePageStyles>
  );
};

const mapStateToProps = () => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
