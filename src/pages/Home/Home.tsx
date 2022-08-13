import { Box } from "@mui/material";
import React from "react";
import Image from "../../components/atoms/Image/Image";
import { Logo } from "../../components/molecules/Logo/Logo";

const Home = () => {
	return (
		<>
			<Box
				component="header"
				sx={{
					display: "flex",
					width: "100%",
					justifyContent: "space-between",
				}}
			>
				<Logo />
				<Image
					src="https://picsum.photos/200"
					alt="random img"
					sx={{
						width: 80,
						height: 80,
						borderRadius: "50%",
						border: "1px solid white",
						cursor: "pointer",
					}}
				/>
			</Box>
		</>
	);
};

export default Home;
