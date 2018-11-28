import MiniStats from './mini-stats-component';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  const days = state.days;
  const goals = state.goals;
  const daysArray = Object.values(days);
  return { daysArray, goals };
};

export default connect(mapStateToProps)(MiniStats);
