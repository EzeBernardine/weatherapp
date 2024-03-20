 
import React, { useEffect, useState }  from "react";

 
import { BackgroundStyle,   MainStyle, MajorStyle, SearchStyle, SectionContainer,  } from "./styles";
import {   useGetWeatherData } from "../../hooks/useWeather";
import Image from "next/image";
 import Cloudy from "../../public/assets/istockphoto.webp"
 import Rainy from "../../public/assets/rainy.webp"
 import Thunderstorm from "../../public/assets/Thunderstorm.jpg"
 import Snow from "../../public/assets/snow.jpg"
 import Mist from "../../public/assets/Mist.jpg"
import Search from "../../components/Search";
import Countries from "../../constant/countries.json";
import RightSection from "./rightSection";
import LeftSection from "./leftSection";
import { Flex } from "../../components/Box/styles";
import { Span } from "../../components/fonts/styles";
import { LoaderIcon, WarningIcon } from "../../public/assets/svg";
import { useFindMe } from "../../hooks/handlers/useLocation";
import { objIsEmpty } from "../../utils";
import { Spacer } from "../../components/Spacer";
import { UseContext } from "../../state/provider";




const LandingPage = () => {
	const [country, setCountry] = useState();
	const { state: { search }, setSearch,  setLongitude, setLatitude} = UseContext()
 

	const {  error: geoLocationError, setError  } = useFindMe(search)

 
	const { data , loading, error } =   useGetWeatherData(search ? {location: search}  : {})

 


	useEffect(() => {
		if( data?.sys?.country ){
			setCountry( Countries.find(code => code.code ===  data?.sys?.country))
		}
	}, [ data?.sys?.country ])


	useEffect(() => {
		setError("");
	}, [ search , setError ])

	const weatherBackgrounImage = {
		Mist: Mist,
		Rain: Rainy,
		Drizzle: Rainy,
		Clouds: Cloudy,
		Thunderstorm: Thunderstorm,
		Snow: Snow,
		Clear: ""
	}


 
 
	return (
		<MainStyle>
			
			<BackgroundStyle>
				{
					weatherBackgrounImage[data?.weather?.[0]?.main ] ? <Image src={weatherBackgrounImage[data?.weather?.[0]?.main ]} alt="rainy" /> : null
				}
			</BackgroundStyle>
 
 

			<MajorStyle>

				<SearchStyle>
					<Search handleChange={(e) => {
						setSearch(e)
						setLatitude("")
						setLongitude("")
					}} value={search}/>
				</SearchStyle>

				{
					loading ?
					<Flex height="auto" margin="100px auto" direction="column">
						<LoaderIcon height={40} width={40} colour={"Black.10"}/>
						<Span fontFamily={"regular"} weight="400" lineHeight="21" size="16"colour={ "common.white"}  textAlign="start">
							Loading;..
						</Span>
					</Flex>
					: error || geoLocationError  ?
						<Flex height="auto" margin="100px auto" direction="column">
							<Flex height="auto"  >
								<WarningIcon height={20} width={20} colour={ "Error.default"} />
								<Span fontFamily={"regular"} weight="400" lineHeight="21" size="16"colour={ "common.white"}  textAlign="start">
									{geoLocationError ||  error ||  "We are having trouble getting the weather data for your search."}
								</Span>
							</Flex>
							
							{
								geoLocationError ?
								<>
									<Span fontFamily={"regular"} weight="400" lineHeight="19" size="14"colour={ "Black.10"}  textAlign="start">
										 Please enable allow your browser access your location
									</Span>
									<Spacer height="10px" />
									<Span fontFamily={"regular"} weight="400" lineHeight="19" size="14"colour={ "Black.10"}  textAlign="start">
										Or type in your destination address in the search bar
									</Span> 
								</>
									: null
							}
						</Flex>
						:
						!objIsEmpty(data) ?
							<SectionContainer justifyContent="space-between" margin="70px 0 50px" alignItems="stretch">
								<LeftSection  country={country}  data={data} />

								<RightSection data={data}/>
							</SectionContainer>
							:
							<Flex height="auto" margin="100px auto" direction="column">
								<Flex height="auto"  >
									<Span fontFamily={"regular"} weight="400" lineHeight="21" size="16"colour={ "common.white"}  textAlign="start">
										You have not entered a location yet
									</Span>
								</Flex>
								<Span fontFamily={"regular"} weight="400" lineHeight="19" size="14"colour={ "Black.10"}  textAlign="start">
									Please type in your destination address in the search bar
								</Span>
							</Flex>
				}
			</MajorStyle>

 

		 
		</MainStyle>

	);
};

export default LandingPage;



