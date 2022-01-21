import { FETCH_START, FETCH_FAIL, FETCH_SUCCESS, ADD_SMURF, SET_ERROR} from './../actions';

export const initialState = {
    smurfs: [],
    isFetching: false,
    error: ''
}

const reducer = (state = initialState, action)=>{
    switch (action.type) {
        case FETCH_START:
            return {
              ...state,
              smurf: {},
              isFetching: true,
              error: ''
            }
		case FETCH_FAIL:
			return {
				...state,
				smurf:{},
				isFetching: false,
				error: action.payload
			}
			case FETCH_SUCCESS:
			return {
				...state,
				smurf: action.payload,
				isFetching: false,
				error: ''
			}
			case ADD_SMURF:
			const newSmurf = {

				id: Date.now(),
				...action.payload
				// name: action.payload,
				// position: action.payload,
				// nickname: action.payload,
				// description: action.payload,
			};
			return({
				...state,
				smurfs: [...state.smurfs, newSmurf]
			})
		case SET_ERROR:
			return({
				...state,
				errorMessage: action.payload
			})
			default:
			return state;
	}
};

//**************DO NOT EDIT ANY CODE BEYOND THIS POINT**************//
export default reducer;

//Task List:
//1. Adds the following state values into the initialState:
//  - an array of smurfs
//  - a boolean indicating if the app is loading
//  - a string indicating a possible error message

//2. Add in the arguments needed to complete a standard reducer function.
//3. Add in a reducer case to accommodate the start of a smurf fetch.
//4. Add in a reducer case to accommodate the successful smurf api fetch.
//5. Add in a reducer cases to accommodate the failed smurf api fetch.
//6. Add in a reducer case to accommodate adding a smurf (including the name, nickname, position, summary and an internally generated id) into your smurf list.
//7. Add in a reducer case that adds in a value to the error message.