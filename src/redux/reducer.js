import { combineReducers } from 'redux';
import { statusFilters } from './constants';

const tasksInitialState = {
  tasks: [
    { id: 0, text: 'Learn HTML and CSS', completed: true },
    { id: 1, text: 'Get good at JavaScript', completed: true },
    { id: 2, text: 'Master React', completed: false },
    { id: 3, text: 'Discover Redux', completed: false },
    { id: 4, text: 'Build amazing apps', completed: false },
  ],
};

const tasksReducer = (state = tasksInitialState, action) => {
  switch (action.type) {
    case 'tasks/addTask':
      return [...state, action.payload];
    case 'tasks/deleteTask':
      return state.filter(task => task.id !== action.payload);
    case 'tasks/toggleCompleted':
      return state.map(task => {
        if (task.id !== action.payload) {
          return task;
        }
        return { ...task, completed: !task.completed };
      });
    default:
      return state;
  }
};

const filtersInitialState = {
  status: statusFilters.all,
};

const filtersReducer = (state = filtersInitialState, action) => {
  switch (action.type) {
    case 'filters/setStatusFilter':
      return {
        ...state,
        status: action.payload,
      };
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  tasks: tasksReducer,
  filters: filtersReducer,
});

//export const rootReducer = (state = {}, action) => {
//  return {
//    tasks: tasksReducer(state.tasks, action),
//    filters: filtersReducer(state.filters, action),
//  };
//};

//export const rootReducer = (state = initialState, action) => {
//  switch (action.type) {
//    case 'tasks/addTask': {
//      return {
//        ...state,
//        tasks: [...state.tasks, action.playload],
//      };
//    }
//    case 'tasks/deleteTask': {
//      return {
//        ...state,
//        tasks: [...state.tasks.filter(task => task.id !== action.playload)],
//      };
//    }
//    case 'tasks/toggleTask': {
//      return {
//        ...state,
//        tasks: state.tasks.map(task => {
//          if (task.id !== action.playload) {
//            return task;
//          }
//          return {
//            ...task,
//            completed: !task.completed,
//          };
//        }),
//      };
//    }
//    case 'filters/setStatusFilter':
//      return {
//        ...state,
//        filters: {
//          ...state.filters,
//          status: action.payload,
//        },
//      };
//    default:
//      return state;
//  }
//};
