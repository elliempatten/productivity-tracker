import React from 'react';
import styles from './progress-bar.module.css';

class ProgressBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { goal, colour } = this.props;
    return (
      <div>
        <div className={styles.progressBar}>
          <div
            style={Object.assign(
              {},
              {
                width:
                  (goal.progress === 0
                    ? 0
                    : goal.progress * (100 / goal.goalRepeats)) + '%'
              },
              {
                borderTopRightRadius:
                  goal.progress === goal.goalRepeats ? 10 + 'px' : 7 + 'px'
              },
              {
                borderBottomRightRadius:
                  goal.progress === goal.goalRepeats ? 10 + 'px' : 7 + 'px'
              },
              {
                background: colour
              }
            )}
            className={styles.progressMarker}
          />
        </div>
      </div>
    );
  }
}

export default ProgressBar;
