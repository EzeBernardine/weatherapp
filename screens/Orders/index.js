
import React, { useState } from "react";
import { LoaderIcon } from "../../public/assets/svg";
import { Container } from "./styles";
import { Flex } from "../../components/Box/styles";


const OrderPage = () => {

	const [ready, setReady] = useState(false);


	return (
		<Container>
			{!ready ?
				<Container>
					<LoaderIcon
						color={"Black.default"}
						width={"70px"}
						height={"70px"}
					/>
				</Container>
				: null}

			<Flex className="winnings-main" style={{ display: ready ? "block" : "none" }} >
				<iframe
					src={process.env.PORTAL_URL}
					id="iframe"
					className="iframe"
					onLoad={() => setReady(true)}
					style={{ display: ready ? "block" : "none" }}
				/>
			</Flex>


		</Container>

	);
};

export default OrderPage;



