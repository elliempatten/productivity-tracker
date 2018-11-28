import ProgressBar from './progress-bar-component';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  const goals = state.goals;
  const days = state.days;
  const daysArray = Object.values(days);
  return { goals, daysArray };
};

export default connect(mapStateToProps)(ProgressBar);
