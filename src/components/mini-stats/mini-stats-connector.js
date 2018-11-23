import MiniStats from './mini-stats-component';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  const days = state.days;
  const daysArray = Object.values(days);
  return { daysArray }
}


export default connect(mapStateToProps)(MiniStats);