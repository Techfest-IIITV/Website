import { actionTypes } from '../actions/userPhoneActions';

const initialState = {
	phone: null
};

export const userPhoneReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.LOAD_PHONE:
			return {
				...state,
				phone: action.phone
			};
		default:
			return state;
	}
};
