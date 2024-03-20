 
import React  from "react";

 
import {  Card, LocationName, Section1, Today,  } from "./styles";
import { Bold, Header1, Paragraph, Small, Span,  } from "../../../components/fonts/styles";
 
import { Spacer } from "../../../components/Spacer";
import { WeatherData } from "../../../constant/weatherCode";
import { Flex } from "../../../components/Box/styles";
import { formatAMPM,   } from "../../../utils";
import { LocationIcon, SunRiseIcon, SunsetIcon } from "../../../public/assets/svg";




const LeftSection = ({ data, country }) => {
	  
	const timeInHours = (timezone) =>  {
		if(timezone){
		const hrs = timezone / 3600  ;
		return hrs > 0 ? `+${hrs}` : `${hrs}`
		}else return 0
	}

 


	const  isCountryName = data?.name === country?.name ;
	return ( 
		<Section1 direction="column" width="auto" alignItems="flex-start">
			<LocationName fontFamily={"medium"} weight="500" lineHeight="96" size="64"colour={ "common.white"}  textAlign="start">
				<LocationIcon height={20} colour={"Error.default"} width={20}/>  {data?.name || "Somewhere"}   {isCountryName ? `${country?.flag} today` : ""}
			</LocationName>
			


			{
				isCountryName  ? null :
				<Flex height="auto" width="auto">
					<Bold fontFamily={"medium"} weight="500" lineHeight="50" size="40"colour={ "Black.10" }  textAlign="start">
						{ 
							country?.name ?
								<Small fontFamily={"medium"} weight="500" lineHeight="32" size="22"colour={ "common.white"}  textAlign="start">
									in {" "}
								</Small> : null
						}
						{country?.name } {country?.flag} 	{" "}
					</Bold>
					<Today fontFamily={"medium"} weight="500" lineHeight="28" size="21"colour={ "Black.10" }  textAlign="start">
						{" "}	today
					</Today>
				</Flex>
			}


			<Spacer height="30px" />
			<Paragraph fontFamily={"regular"} weight="400" lineHeight="21" size="14"colour={ "common.white"}  textAlign="start">
				The weather today features {WeatherData[ data?.weather?.[0]?.id ]?.Description}
			</Paragraph>


			<Flex height="auto" margin="35px 0" justifyContent="flex-start">
				<Card direction="column" width="auto" height="auto">
					<SunRiseIcon height={50} width={50}/>
					<Span fontFamily={"medium"} weight="500" lineHeight="21" size="14"colour={ "Yellow.80"}  textAlign="start">
						Sun rise at  
					</Span>
					<Span fontFamily={"medium"} weight="500" lineHeight="21" size="14"colour={ "Black.10"}  textAlign="start">
						   {formatAMPM(data?.sys?.sunrise * 1000) }
					</Span>
				</Card>

				<Card direction="column" width="auto" height="auto">
					<SunsetIcon height={50} width={50}/>
					<Span fontFamily={"medium"} weight="500" lineHeight="21" size="14"colour={ "Yellow.default"}  textAlign="start">
						Sun set  @
					</Span>
					<Span fontFamily={"medium"} weight="500" lineHeight="21" size="14"colour={ "Black.10"}  textAlign="start">
						  {formatAMPM(data?.sys?.sunset * 1000)} 
					</Span>
				</Card>
		 
			</Flex>
			{
				data?.timezone ?
					<Card width="auto" height="auto">
						
						<Span fontFamily={"medium"} weight="500" lineHeight="28" size="18"colour={ "Yellow.80"}  textAlign="start">
							Timezone:    {  timeInHours(data?.timezone )} hr(s)
						</Span> 
					</Card>
					: null
			}
		</Section1> 
	);
};

export default LeftSection;



