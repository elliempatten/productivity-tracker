import React, { Component } from 'react';
import styles from './goals-list.module.css';
import GoalHolder from '../goal-holder/goal-holder-connector';
import { COLOUR_OPTIONS } from '../../actions/actions';

class GoalsList extends Component {
  constructor(props) {
    super(props);
    this.moveProgress = this.moveProgress.bind(this);
  }

  moveProgress() {
    if (this.state.progress !== this.state.goalRepeats) {
      this.setState(() => {
        const prevState = this.state.progress;
        return { progress: prevState + 1 };
      });
    }
    // else fade out the block, or do something celebratory
  }

  render() {
    const { goals } = this.props;
    console.log('goals array', goals);
    let counter = 0;
    return (
      <div className={styles.goalsList}>
        {goals.map(goal => {
          const colour = COLOUR_OPTIONS[counter].hex;
          counter = (counter + 1) % 5;
          return <GoalHolder key={goal.id} goal={goal} colour={colour} />;
        })}
      </div>
    );
  }
}

export default GoalsList;
