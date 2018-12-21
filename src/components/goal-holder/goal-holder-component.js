import React, { Component } from 'react';
import styles from './goal-holder.module.css';
import ProgressBar from '../progress-bar/progress-bar-connector';
import { increaseProgress } from '../../actions/actions';
import store from '../../store';
import ConfettiComponent from '../confetti/confetti-component';
import Expire from './expire';

class GoalHolder extends Component {
  shouldComponentUpdate(nextProps) {
    const differentGoalProgress =
      this.props.goal.progress !== nextProps.goal.progress;
    return differentGoalProgress;
  }
  render() {
    const { goal, colour } = this.props;
    return (
      <div className={styles.goalHolder}>
        {goal.isFull && (
          <div className={styles.confettiContainer}>
            <Expire delay={5000}>
              <ConfettiComponent />
            </Expire>
          </div>
        )}
        <div style={{ color: colour }} className={styles.goalText}>
          {goal.name}
        </div>
        <ProgressBar goal={goal} colour={colour} />
        <button style={{ background: colour }} className={styles.addProgress}>
          <div
            className={styles.plus}
            onClick={() => {
              store.dispatch(increaseProgress(goal.id));
            }}
          >
            +
          </div>
        </button>
      </div>
    );
  }
}
export default GoalHolder;
