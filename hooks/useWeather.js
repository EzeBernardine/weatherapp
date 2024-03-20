
import { useCallback, useEffect, useState } from "react";
 
import axios from "axios";
import { API_KEY, DATA_URL } from "../constant/url";
import { UseContext } from "../state/provider";


 

 
 


export const useGetWeatherData = ({   location }) => {
	const [  data, setData ] = useState(null)
	const [ error , setError ] = useState(null)
	const [ loading , setLoading ] = useState(false)
	const  [ trackInitialLoad, setTrackInitialLoad ] = useState(0);
	const { state: { lat, lon, units }} = UseContext()
 
	
	
	const handleAPICall =useCallback( async  () => {
		setLoading(true)
		try{
			const response = await   axios.get(`${DATA_URL}/weather?appid=${API_KEY}${lat ? `&lat=${lat}` : ""}${lon ? `&lon=${lon}` : ""}${location ? `&q=${location}` : ""}${units ? `&units=${units}` : `&units=standard`}`);
			setLoading(false)
			setError(null);
			if(response?.data) {
				setData(response?.data)
			}
		}catch(error){
			setLoading(false)
			setError(error?.response?.data?.message)
		}
		
	},  [lat, lon, location, units])


	useEffect(() => {
		if( trackInitialLoad >  2)  {
			handleAPICall()
		};
	}, [lat, lon, location, handleAPICall, trackInitialLoad ]);
 


	useEffect(() => {
		setTrackInitialLoad(prev => prev + 1)
	}, [ lat, lon, location ,]);
 

	return {   loading ,  data, error,   handleAPICall    };
};


 