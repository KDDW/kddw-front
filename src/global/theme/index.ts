import { createTheme } from "@mui/material";

export const globalTheme = createTheme({
	palette: {
		mode: "dark",
		primary: {
			main: "#F0883D",
			dark: "#CC5D0C",
		},
		error: {
			main: "#F34C4C",
			dark: "#A92121",
		},
		success: {
			main: "#20D332",
			dark: "#1CA92A",
		},
	},
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					borderRadius: "3px",
					color: "#fff",
					padding: ".4rem 2rem",
				},
			},
		},
		MuiSelect: {
			styleOverrides: {
				// @ts-ignore
				root: {
					borderRadius: "6px",
				},
			},
		},
	},
});
