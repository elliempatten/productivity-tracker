import GoalsList from "./goals-list-component";
import { connect } from "react-redux";

const mapStateToProps = state => {
  const goals = state.goalTracking.goals;
  const goalsArray = Object.values(goals);
  return { goalsArray };
};

export default connect(mapStateToProps)(GoalsList);
