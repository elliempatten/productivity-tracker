import React, { Component } from "react";
import styles from "./goals-list.module.css";

class GoalsList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { goalsArray } = this.props;
    return (
      <div className={styles.goalsList}>
        {goalsArray.map(goal => {
          return (
            <div className={styles.goalHolder} key={goal.name}>
              {goal.name}
              <button className={styles.addProgress}>+</button>
            </div>
          );
        })}
      </div>
    );
  }
}

export default GoalsList;
