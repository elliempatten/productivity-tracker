import React, { Component } from "react";
import styles from "./mini-stats.module.css";

class MiniStats extends Component {
  constructor(props) {
    super(props);
    this.state = { max: null };
    this.state = { min: null };
  }

  componentDidMount() {
    const { daysArray, goalsArray } = this.props;
    const goalCounters = goalsArray.map(item => {
      return { id: item.id, goal: item.name, value: 0 };
    });

    const arrayOfProgress = daysArray.map(day => {
      for (var i = 0; i < goalsArray.length; i++) {
        for (var j = 0; j < day.length; j++) {
          if (goalsArray[i].id === day[j].id && day[j].progress) {
            return goalsArray[i].id;
          }
        }
      }
    });
    for (var k = 0; k < goalCounters.length; k++) {
      for (var l = 0; l < arrayOfProgress.length; l++) {
        if (goalCounters[k].id === arrayOfProgress[l]) {
          goalCounters[k].value++;
        }
      }
    }

    let maximum = 0;
    let maxGoal;
    let minimum = 100000;
    let minGoal;
    for (var i = 0; i < goalCounters.length; i++) {
      if (goalCounters[i].value > maximum) {
        maximum = goalCounters[i].value;
        maxGoal = goalCounters[i].goal;
      }
      if (goalCounters[i].value < minimum) {
        minimum = goalCounters[i].value;
        minGoal = goalCounters[i].goal;
      }
    }
    this.setState({ max: maxGoal });
    this.setState({ min: minGoal });
  }

  render() {
    return (
      <ul className={styles.miniStats}>
        <li className={styles.listItem}> 💪🏼 Bossing: {this.state.max}</li>
        <li className={styles.listItem}> 💔 Needs love: {this.state.min}</li>
      </ul>
    );
  }
}
export default MiniStats;
