import React, { Component } from "react";
import styles from "./page-body.module.css";
import MiniStats from "../mini-stats/mini-stats-connector";


class PageBody extends Component {
  render() {
    const d = new Date();
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    return (
      <div className={styles.pageBodyContainer}>
      <div className={styles.panel}> 
      <div className={styles.banner}></div>
      <div className={styles.dateText}>{days[d.getDay()]+ " " + d.getDate() + " " + months[d.getMonth()]}</div>
      
      </div>
      
      <div className={styles.lists}>
      <div className={styles.goalsList}>
      <ul> <h2>Goals</h2>
      <li className={styles.listItem}>Learn ES6</li>
        <li className={styles.listItem}>Practice sketching</li></ul>
        </div>
        <div className={styles.centerPiece}>
        <MiniStats className={styles.miniStats}/>
        <div className={styles.todos}><h2>To Dos</h2></div></div>
        
        
        <div className={styles.notes}><h2>Notes</h2>
        <textarea className={styles.notesInput} type="text"></textarea></div>
        </div>
      </div>

    );
  }
}

export default PageBody;