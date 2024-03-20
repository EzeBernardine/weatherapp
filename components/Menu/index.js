
import { Button, DeleteButton, MainContainer, MenuContainer, SaerchContainer,   SecletContainer, SubContainer } from "./styles";

import {    DropDownArrowsIcon, LocationIcon,   } from "../../public/assets/svg";
import React, { useState }   from "react";
import * as _ from "underscore";
import { Flex } from "../Box/styles";
import { Bold } from "../fonts/styles";
import Search from "../Search";
import DropdownModal from "../Dropdown";
import { UseContext } from "../../state/provider";



const Menu =  () => {
	const { setLatitude, setLongitude, setUnit, setSearch } = UseContext();
	const intiValue = {lat:   "", lon:  "", units: "standard"}

	const [state, setState] = useState(intiValue)

 
 
	 const Units = [
		{name: "Standard", value: "standard",},
		{name: "Metric", value: "metric",},
		{name: "Imperial", value: "imperial",},
	 ]

    
	return (
		<MenuContainer >
			
			<MainContainer justifyContent="space-between">
				<Flex height="auto" width="max-content">
					<LocationIcon height={30} width={30} colour={"Error.default"}/>
					<Bold fontFamily={"regular"} weight="400" lineHeight="21" size="24"colour={ "common.black"}>
						WeatherApp
					</Bold>
				</Flex>

				<SubContainer width="auto" wrap="nowrap">
					<SaerchContainer width="auto" wrap="nowrap" radius="8px"> 
						<Search delay={0} noIcon  placeholder="Lat" type="number"  handleChange={e => setState(prev =>( {...prev,lat: e }))} value={state.lat}/>
						<Search  delay={0}  noIcon  placeholder="Lon" type="number" handleChange={e => setState(prev =>( {...prev, lon: e }))}  value={state.lon}/>
					</SaerchContainer>
 

					<SecletContainer margin=" 0 10px">
						<DropdownModal
							weight="300"
							direction="start"
							colour="Black.default"
							dropColor="Black.default"
							dropHovColor="Black.default"
							hovBgColor="Black.80"
							searchField={false}
							clearSelected
							initial={  state.units || "Select unit"}
							icon={<DropDownArrowsIcon height={12} width={12} colour={"Black.20"}/>}
							handleSelect={(selected) =>   setState(prev =>( {...prev, units: selected })) }
							data={Units?.map(data => (
										{
											displayedValue: data.name, 
											returnedValue: data.value,
											dropdownValue: data.name,
										}
									))
							}
						/>
					</SecletContainer>


					<Button
						disabled={!state.lat && !state.lon &&  !state.units}
						onClick={() => {
							state.lat && setLatitude(state.lat)
							state.lon && setLongitude(state.lon)
							state.units && setUnit(state.units)
							if(state.lat &&  state.lon){
								setSearch("")
							}
						}}
					>Search</Button>
					
					{
						state.lat || state.lon  ?  
							<DeleteButton
								onClick={() => {
									setLatitude("")
									setLongitude("")
									setUnit("standard")
									setState(intiValue)
								}}
							>Clear</DeleteButton>
							: null
					}
				</SubContainer>

			</MainContainer>
		</MenuContainer>
	);
};
 
export default Menu;