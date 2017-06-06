import { combineReducers } from 'redux';

const homeReducer = (state = {
  isFetching: false
}, action) => {
  switch (action.type) {
    case 'START_FETCHING':
      return Object.assign({}, state, {
        isFetching: true
      });
    default:
      return state;
  }
};

// we used combineReducers() to combine several reducers into one
const reducer = combineReducers({
  home: homeReducer
});

export default reducer;
