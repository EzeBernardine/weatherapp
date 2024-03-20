import React, { createContext,   useReducer } from "react";
import { 
	SET_LATITUDE,
	SET_LONGITUDE,
	SET_SEARCH,
	SET_UNIT,
} from "./actions";
import { reducer } from "./reducer";

export const Context = createContext({});

const initialState = {
	let: "",
	lon: "",
	units: "standard",
	search: ""
};

export function ProviderContext({ children }) {
	const [state, dispatch] = useReducer(reducer, initialState);


	const setLatitude = (payload) => 	dispatch({ type: SET_LATITUDE, payload });
	const setLongitude = (payload) => 	dispatch({ type: SET_LONGITUDE, payload });
	const setUnit = (payload) => 	dispatch({ type: SET_UNIT, payload });
	const setSearch = (payload) => 	dispatch({ type: SET_SEARCH, payload });



		
 



	return (
		<Context.Provider
			value={{
				state,
				setLatitude,
				setLongitude,
				setUnit,
				setSearch
			}}
		>
			{children}
		</Context.Provider>
	);
}

export const UseContext = () => React.useContext(Context);
