
import { SearchContainer } from "./styles";

import {   CancelIcon, SearchIcon } from "../../public/assets/svg";
import React, { useCallback, useEffect, useState }  from "react";
import * as _ from "underscore";



const Search = ({handleChange,  value, disabled , noIcon = false, placeholder, type , delay = 2000} ) => {
	const [active, setActive] = useState(false)
	const [typedValue, setTypedValue] = useState(value || "")


	// eslint-disable-next-line react-hooks/exhaustive-deps
	const optimisedTriggerHandler = useCallback(
		_.throttle((e) => (( e) => handleChange( e) )(e), delay, { leading: false })
	, [])

	useEffect(() => {
		setTypedValue(value)
	},  [value ])
    
	return (
		<SearchContainer width='auto' height='auto' active={active || value} bgColor="common.white" radius="32px">
			<input 
				placeholder={placeholder || 'Enter a location'} 
				onChange={(e) => {
					setTypedValue( e.target.value)
					optimisedTriggerHandler( e.target.value)
				}} 
				value={typedValue} 
				type={type || "text"}
				disabled={disabled}
				onFocus={() => setActive(true)}
				onBlur={() => setActive(false)}
			/>
			{
				noIcon ? null : 
				typedValue?.length > 0 ?
					<button 
						onClick={() =>  {
							setTypedValue("")
							handleChange("")
							setActive(false)
						}}
					>
						<CancelIcon colour='Black.20' width='15' height='15'  />
					</button>
					:<SearchIcon colour='Black.20' width='20' height='24' />
			}
		</SearchContainer>
	);
};
 
export default Search;