import { BoxProps } from "@mui/material";
import React from "react";
import Image, { ImageProps } from "../../atoms/Image/Image";
import { LogoDefaultStyles } from "./LogoStyles";

export type LogoProps = BoxProps;

export const Logo = (props: LogoProps) => {
	return (
		<Image
			src="/logo.svg"
			alt="KDDW logo"
			sx={LogoDefaultStyles}
			{...props}
		/>
	);
};
