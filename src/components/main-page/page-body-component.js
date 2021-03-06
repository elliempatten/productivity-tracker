import React, { Component } from "react";
import styles from "./page-body.module.css";
import MiniStats from "../mini-stats/mini-stats-connector";
import GoalsList from "../goals-list/goals-list-connector";

class PageBody extends Component {
  render() {
    const d = new Date();
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];

    return (
      <div className={styles.pageBodyContainer}>
        <div className={styles.panel}>
          <div className={styles.dateText}>
            {days[d.getDay()] + " " + d.getDate() + " " + months[d.getMonth()]}
          </div>
          <MiniStats className={styles.miniStats} />
        </div>
        <div className={styles.lists}>
          <div className={styles.todos}>
            <h2>To Dos</h2>
          </div>

          <GoalsList />

          <div className={styles.extras}>
            <div className={styles.weekly}>
              <h2>Weekly</h2>
            </div>
            <div className={styles.tomorrow}>
              <h2>Tomorrow</h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PageBody;
