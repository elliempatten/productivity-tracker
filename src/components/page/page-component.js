import React from 'react';
import styles from './page-component.module.css';
import Header from '../header/header-component';
import PageBody from '../main-page/page-body-component';

class Page extends React.Component {
  
  render(){
    return(
      <div className={styles.pageContainer}>
        <Header/>
        <PageBody />
      </div>
    )
  }
}

export default Page;