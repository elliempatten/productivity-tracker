import React, { Component } from 'react';
import styles from './page-body.module.css';
import MiniStats from '../mini-stats/mini-stats-connector';
import GoalsList from '../goals-list/goals-list-connector';

class PageBody extends Component {
  constructor(props) {
    super(props);
    this.state = { isAddingGoal: false };
  }
  render() {
    console.log(this.state.isAddingGoal);
    const d = new Date();
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    const days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];

    return (
      <div className={styles.pageBodyContainer}>
        <div className={styles.panel}>
          <div className={styles.dateText}>
            {days[d.getDay()] + ' ' + d.getDate() + ' ' + months[d.getMonth()]}
          </div>
        </div>
        <div className={styles.lists}>
          <GoalsList />
          <div className={styles.extras}>
            <MiniStats className={styles.miniStats} />
            <button
              className={styles.addGoal}
              onClick={() => {
                this.setState({ isAddingGoal: true });
              }}
            >
              ADD NEW GOAL
            </button>
            {this.state.isAddingGoal && (
              <div>
                <form>
                  <label>What do you want to achieve?</label>
                  <br />
                  <input
                    type="text"
                    name="firstname"
                    placeholder="eg. Go jogging"
                  />
                  <br />
                  <label>How many times do you want to do this per week?</label>
                  <br />
                  <input type="text" name="lastname" placeholder="eg. 5" />
                  <br />
                  <input type="submit" value="Submit" />
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default PageBody;
