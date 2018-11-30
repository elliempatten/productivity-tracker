import React, { Component } from 'react';
import styles from './mini-stats.module.css';

class MiniStats extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { goals } = this.props;
    const arrayOfProgress = goals.map(goal => {
      return { name: goal.name, progress: goal.progress / goal.goalRepeats };
    });
    let max = 0;
    let min = 200;
    let maxName;
    let minName;
    for (var i = 0; i < arrayOfProgress.length; i++) {
      const progress = arrayOfProgress[i].progress;
      const name = arrayOfProgress[i].name;
      if (progress > max) {
        max = progress;
        maxName = name;
      }
      if (progress < min) {
        min = progress;
        minName = name;
      }
    }
    const maximum = maxName;
    const minimum = minName;
    return (
      <ul className={styles.miniStats}>
        <li className={styles.listItem}>
          {' '}
          <span role="img" aria-label="strong arm emoji">
            💪🏼
          </span>{' '}
          Bossing: {maximum}
        </li>
        <li className={styles.listItem}>
          {' '}
          <span role="img" aria-label="broken heart emoji">
            💔
          </span>{' '}
          Needs love: {minimum}
        </li>
      </ul>
    );
  }
}
export default MiniStats;
