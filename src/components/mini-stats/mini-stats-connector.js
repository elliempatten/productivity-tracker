import MiniStats from "./mini-stats-component";
import { connect } from "react-redux";

const mapStateToProps = state => {
  const days = state.goalTracking.days;
  const goals = state.goalTracking.goals;
  const daysArray = Object.values(days);
  const goalsArray = Object.values(goals);
  return { daysArray, goalsArray };
};

export default connect(mapStateToProps)(MiniStats);
