import React, { useState } from "react";
import PropTypes from "prop-types";
import {
	Wrapper,
	Layout,
	Label,
	Overlay,
	DropdownWrap,
	Dropdown,
	ListItems,
	Item,
	Input,
	InputContainer,
} from "./styles";
import { useEffect } from "react";

const DropdownModal = ({
	data,
	padding,
	handleSelect,
	initial,
	direction,
	canClick = true,
	weight,
	icon,
	type,
	placeholder,
	colour,
	hovBgColor,
	dropColor,
	dropHovColor,
	searchField = true,
	clearSelected = false,
}) => {
	const [openModal, setOpenModal] = useState(false);
	const [selected, setContent] = useState(initial || "Select");
	const [search, setSearch] = useState("");

	const handleSelectOption = (returnedValue, displayedValue, dropdownValue) => {
		setContent(displayedValue);
		setOpenModal(!openModal);
		handleSelect(returnedValue, displayedValue, dropdownValue);
	};

	useEffect(() => {
		clearSelected && setContent(initial || "Select");
	}, [clearSelected, initial]);



 

	const dropdownData = data.filter((value) =>
		value.displayedValue.toUpperCase().includes(search.toUpperCase())
	);

 

	return (
		<Wrapper>
			<Layout
				onClick={() => canClick && setOpenModal(!openModal)}
				canClick={canClick}
				padding={padding}
			>
				{type === "showmore" ? null : (
					<Label canClick={canClick} weight={weight} colour={colour}>
						{getDisplayedContent(selected, placeholder)}
					</Label>
				)}

				{ icon ? icon : ""}
				{/* {type === "showm/ore" ? icon : ""} */}
			</Layout>

			{openModal && (
				<Overlay onClick={() => {
					if(canClick){
						setOpenModal(!openModal)
						setSearch("")
					}
				} } />
			)}

			{openModal && (
				<DropdownWrap>
					
						{searchField ? (
							<InputContainer colour={colour}>
								<Input
									colour={dropColor}
									placeholder="Search"
									onChange={(e) => setSearch(e.target.value)}
								/>
							</InputContainer>
						) : null}
						{dropdownData?.length ? 
							<Dropdown direction={direction} searchField={searchField}>
								{

								dropdownData.map((item) => (
									<ListItems
										onClick={() =>{
											canClick && handleSelectOption( `${item?.returnedValue}`, `${item?.displayedValue}`, `${item?.dropdownValue}` )
											setSearch("")
										}}
										key={item.returnedValue}
										hovBgColor={hovBgColor}
										dropHovColor={dropHovColor}
									>
										{getDropdownContent(item, weight, dropColor)}
									</ListItems>
								))
								}
						
						 </Dropdown>
						: (
							<ListItems hovBgColor={hovBgColor} dropHovColor={dropHovColor}>
								<Item weight={weight} dropColor={dropColor}>
									No item found
								</Item>
							</ListItems>
						)}
					
				</DropdownWrap>
			)}
		</Wrapper>
	);
};

DropdownModal.propTypes = {
	data: PropTypes.array,
	padding: PropTypes.string,
	handleSelect: PropTypes.func,
	initial: PropTypes.any,
	direction: PropTypes.oneOf(["start", "end"]),
	canClick: PropTypes.bool,
	weight: PropTypes.string,
	icon: PropTypes.element,
	type: PropTypes.oneOf(["showmore", undefined]),
};
export default DropdownModal;

function getDropdownContent(item, weight, dropColor) {
	return typeof item.dropdownValue === "string" ? (
		<Item weight={weight} dropColor={dropColor}>
			{item.dropdownValue}
		</Item>
	) : (
		item.dropdownValue
	);
}

function getDisplayedContent(selected, placeholder) {
	return (selected === "Select" && placeholder) || selected || "Select";
}
