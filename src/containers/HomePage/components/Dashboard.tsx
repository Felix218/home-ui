import React from "react";
import { connect } from "react-redux";
import Styled from "../styles.css";

interface Dashboard {
  metrics: Object;
  userProfile: Object;
}

const Dashboard: React.SFC<Dashboard> = (props) => {
  const { metrics, userProfile } = props;
  return (
    <Styled.DashboardStyles>
      <div className="dashboard-header"></div>
      <div className="dashboard-content"></div>
      <div className="dashboard-footer"></div>
    </Styled.DashboardStyles>
  );
};

const mapStateToProps = () => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
