import { SET_LATITUDE, SET_LONGITUDE, SET_SEARCH, SET_UNIT } from "./actions";

export const reducer = (state, action) => {
	switch (action.type) {
	case SET_LATITUDE:
		return {
			...state,
			lat: action.payload,
		};
	case SET_LONGITUDE:
		return {
			...state,
			lon: action.payload,
		};
	case SET_UNIT:
		return {
			...state,
			units: action.payload,
		};
 
	case SET_SEARCH:
		return {
			...state,
			search: action.payload,
		};
 

	default:
		return state;
	}
};
