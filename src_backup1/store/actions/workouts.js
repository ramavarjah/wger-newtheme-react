// import axios from 'axios';
// import {authSuccess} from './auth';
// import {ADD_WORKOUT, DELETE_WORKOUT, GET_WORKOUT} from './actionTypes';

// //ADD WORKOUT

// export const addWorkout = (work) => (dispatch, getState) => {
//     axios
//       .post('http://127.0.0.1:8080/en/workout/day/1/day/add/', work, authSuccess(getState))
//       .then((res) => {
//         dispatch(createMessage({ addWorkout: 'Workout Added' }));
//         dispatch({
//           type: ADD_WORKOUT,
//           payload: res.data,
//         });
//       })
//       .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
//   };

 