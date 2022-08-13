import React from "react";
import { useLogo } from "./useLogo";
import { Box, BoxProps } from "@mui/material";

export interface ImageProps extends BoxProps {
	src: string;
	alt: string;
}

const Image = (props: ImageProps) => {
	return <Box component="img" {...props} />;
};

export default Image;
