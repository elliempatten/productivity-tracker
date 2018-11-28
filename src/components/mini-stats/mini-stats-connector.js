import MiniStats from './mini-stats-component';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  const goals = state.goals;
  return { goals };
};

export default connect(mapStateToProps)(MiniStats);
