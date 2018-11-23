const initialState = {
      date1:{
      goal1: {
      id: 1,
      name: "Learn ES6",
      progress: true
    },
    goal2: {
      id: 2,
      name: "Drink water",
      progress: false
    }},
    
      date2:{
      goal1: {
      id: 1,
      name: "Learn ES6",
      progress: false
    },
    goal2: {
      id: 2,
      name: "Drink water",
      progress: false
    }},
      date3:{
      goal1: {
      id: 1,
      name: "Learn ES6",
      progress: true
    },
    goal2: {
      id: 2,
      name: "Drink water",
      progress: true
    }
  }
}

const days = (state = initialState, action)=>{
  return state;
}

export default days;