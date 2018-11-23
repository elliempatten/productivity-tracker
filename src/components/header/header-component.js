import React, { Component } from "react";
import styles from "./header-component.module.css";

class HeaderBar extends Component{
  constructor(props){
    super(props);
  }

  

  render(){
    
    

  return(
      <header className={styles.headerContainer}>
      <div className={styles.siteTitle}> Buzzzzzz</div>
        <nav>
          <ul>
            <li className={styles.listItem}> Home</li>
            <li className={styles.listItem}>About</li>
            <li className={styles.listItem}>Today</li>
          </ul>
        </nav>

      </header>
    );
}

}
export default HeaderBar;

//probably move the bossing/needs love out of the header