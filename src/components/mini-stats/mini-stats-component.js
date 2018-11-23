import React, { Component } from "react";
import styles from './mini-stats.module.css';

class MiniStats extends Component{
  constructor(props){
    super(props);
    this.state = { max: null };
    this.state = {min: null };
  }

  componentDidMount(){
    const { daysArray } = this.props;
    const firstEntry = daysArray[0];
    var goalsArray = Object.values(firstEntry);
    const goalCounters = goalsArray.map((item)=>{
      return {goal: item.name, value: 0}
    })
    console.log("value of goal 1", goalCounters[0].value);

    daysArray.map((day)=>{
      let goal1Progress = day.goal1.progress;
      let goal2Progress = day.goal2.progress;
      if (goal1Progress){
        goalCounters[0].value ++;
      }
      if (goal2Progress){
        goalCounters[1].value++;
      }}) 
      let maximum = 0;
      let maxGoal;
      let minimum = 100000;
      let minGoal;
      for (var i=0; i< goalCounters.length; i++){
        console.log("current goal",goalCounters[i]);
        if (goalCounters[i].value > maximum){
          maximum = goalCounters[i].value;
          maxGoal = goalCounters[i].goal;
        }
        if (goalCounters[i].value < minimum){
          minimum=goalCounters[i].value;
          minGoal = goalCounters[i].goal;
        }
      }
      console.log("maxGoal", maxGoal);
      console.log("mingoal", minGoal)
      this.setState({max: maxGoal});
      this.setState({min: minGoal});
    }

  render(){
    
    

  return(
        <ul className={styles.miniStats}>
          <li className={styles.listItem}> 💪🏼 Bossing: { this.state.max }          
          </li>
          <li className={styles.listItem}> 💔 Needs love: { this.state.min }</li>
        </ul>
    );
}

}
export default MiniStats;