const initialState = {
  goals: {
    goal1: { id: 1, name: "Learn ES6", times: 2 },
    goal2: { id: 2, name: "Write", times: 1 },
    goal3: { id: 3, name: "Read for fun", times: 5 }
  },
  days: {
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
        name: "Learn ES6",
        progress: false
      },
      {
        id: 3,
        name: "Drink water",
        progress: false
      }
    ],
    date3: [
      {
        id: 1,
        name: "Learn ES6",
        progress: true
      },
      {
        id: 3,
        name: "Drink water",
        progress: true
      }
    ]
  }
};

const goalTracking = (state = initialState, action) => {
  return state;
};

export default goalTracking;
