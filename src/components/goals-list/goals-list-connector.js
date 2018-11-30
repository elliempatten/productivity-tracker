import GoalsList from './goals-list-component';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  const goals = state.goals;
  return { goals };
};

export default connect(mapStateToProps)(GoalsList);
