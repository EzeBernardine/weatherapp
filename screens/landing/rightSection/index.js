 
import React  from "react";

 
import {  CardStyles, Section2, SectionSub1, TemperatureContainer, TemperatureUnit, TemperatureValue } from "./styles";
import {   Small, Span,   } from "../../../components/fonts/styles";
import Image from "next/image"; 
import { Flex, Frame } from "../../../components/Box/styles";
import { UseContext } from "../../../state/provider";
import Constants from "../../../constant";




const RightSection = ({data}) => {

	const weatherIcon = (icon) => `http://openweathermap.org/img/wn/${icon}@2x.png`;
	const { state : { units }} = UseContext()

	const details = [
		{name: "Humidity", value: data?.main?.humidity , unit: "%"},
		{name:" Wind Speed", value:   data?.wind?.speed, unit: Constants.units.windSpeed[ units]},
		{name:"Atmospheric pressure on the sea level", value:   data?.main?.sea_level , unit: "hPa"},
		{name:"Atmospheric pressure on the ground level", value: data?.main?.grnd_level, unit : "hPa"},
		{name:"Latitude", value: data?.coord?.lat, unit : ""},
		{name:"Longitude", value: data?.coord?.lon, unit : ""},
	]

	return (
	 

		<Section2 alignItems="flex-end">
			<Flex height="auto" width="auto">
				<Frame width="130px" height={"130px"} >
					<Image src={weatherIcon(data?.weather?.[0]?.icon)} alt="" fill/>
				</Frame>
				<Span fontFamily={"regular"} weight="400" lineHeight="21" size="16"colour={ "common.white"}  textAlign="start">
					{data?.weather?.[0]?.main}
				</Span>
			</Flex>

			<TemperatureContainer width="auto" margin=" 0 0 70px auto">
				<TemperatureValue fontFamily={"regular"} weight="500" lineHeight="96" size="80"colour={ "common.white"}  textAlign="start">
					{data?.main?.temp}
					<TemperatureUnit>{Constants.units.temperature[ units]}</TemperatureUnit>
				</TemperatureValue>
			</TemperatureContainer>

			<SectionSub1 gap="20px">
				{
					details.map(detail => {
						if(!detail.value) return;
						return (
							<CardStyles justifyContent="space-between" height="auto" key={detail.name}>
								<Span fontFamily={"regular"} weight="400" lineHeight="21" size="16"colour={ "common.white"}  textAlign="start">
									{detail.name}
								</Span>
								<Small fontFamily={"light"} weight="400" lineHeight="21" size="14"colour={ "Black.5"}  textAlign="start">
									{detail.value} {detail.unit}
								</Small>
							</CardStyles>
						)
					})
				}
			</SectionSub1>
		</Section2>

 

	);
};

export default RightSection;



