import { INCREASE_PROGRESS } from '../actions/actions';
import { combineReducers } from 'redux';

const initialGoalsState = [
  { id: 0, name: 'Learn ES6', goalRepeats: 6, progress: 1, isFull: false },
  { id: 1, name: 'Write', goalRepeats: 10, progress: 2, isFull: false },
  { id: 2, name: 'Read for fun', goalRepeats: 3, progress: 0, isFull: false }
];

const initialDaysState = {
  date1: [
    {
      id: 1,
      progress: true
    },
    {
      id: 2,
      progress: false
    }
  ],
  date2: [
    {
      id: 1,
      name: 'Learn ES6',
      progress: false
    },
    {
      id: 3,
      name: 'Drink water',
      progress: false
    }
  ],
  date3: [
    {
      id: 1,
      name: 'Learn ES6',
      progress: true
    },
    {
      id: 3,
      name: 'Drink water',
      progress: true
    }
  ]
};

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

const days = (state = initialDaysState, action) => {
  return state;
};

const allReducers = combineReducers({ goals, days });

export default allReducers;
