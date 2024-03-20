import { useEffect, useState } from "react";
import { UseContext } from "../../state/provider";






export const  useFindMe = ( searchString) =>  {
	const { setLatitude, setLongitude , state: { lat, lon, units } } = UseContext()
	const [error, setError] = useState("");

	const handleFindMe = () => {
		if (!navigator.geolocation){
			setError("Geolocation is not supported by your browser");
			return;
		}
		function success({ coords: {latitude, longitude} }) {
			setError("");
			setLatitude(latitude)
			setLongitude(longitude)
		}
		function error() {
			if(!searchString && !lat && !lon && !units){
				setError("Unable to retrieve your location");
			}
		}
		navigator.geolocation.getCurrentPosition(success, error, {enableHighAccuracy: true});
	}
 
	useEffect(() => {
		handleFindMe()
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return {    error , setError }
}