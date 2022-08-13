import React from "react";

export interface MainWrapperProps {
	children: React.ReactNode;
}
const MainWrapper = ({ children }: MainWrapperProps) => {
	return (
		<div
			style={{
				padding: "1rem",
				width: "100%",
				height: "100%",
				maxWidth: "1920px",
				margin: "0 auto",
			}}
		>
			{children}
		</div>
	);
};

export default MainWrapper;
