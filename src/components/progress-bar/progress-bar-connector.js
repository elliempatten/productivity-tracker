import ProgressBar from './progress-bar-component';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  const goals = state.goals;
  return { goals };
};

export default connect(mapStateToProps)(ProgressBar);
