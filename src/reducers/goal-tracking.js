import { INCREASE_PROGRESS } from '../actions/actions';
import { combineReducers } from 'redux';

const initialGoalsState = [
  { id: 0, name: 'Learn ES6', goalRepeats: 6, progress: 1, isFull: false },
  { id: 1, name: 'Write', goalRepeats: 10, progress: 2, isFull: false },
  { id: 2, name: 'Read for fun', goalRepeats: 3, progress: 0, isFull: false }
];

const goals = (state = initialGoalsState, action) => {
  switch (action.type) {
    case INCREASE_PROGRESS:
      const goalId = action.goalId;
      const goalToEdit = state.filter(goal => {
        return goal.id === goalId;
      })[0];
      const newProgress = state[goalId].progress + 1;
      const isItFull = newProgress === goalToEdit.goalRepeats ? true : false;
      const newState = {
        ...state,
        [goalId]: {
          ...goalToEdit,
          progress: newProgress,
          isFull: isItFull
        }
      };
      const stateArray = Object.values(newState);
      return stateArray;

    default:
      return state;
  }
};

const allReducers = combineReducers({ goals });

export default allReducers;
