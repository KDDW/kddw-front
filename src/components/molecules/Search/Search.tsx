import { Button, TextField } from "@mui/material";
import React from "react";
import { i18n } from "../../../i18n";
import { useSearch } from "./useSearch";

export interface SearchProps {
	onSubmitSearch: (search: string) => void;
	onSearchChange: (search: string) => void;
	search: string;
	styleContainer?: React.CSSProperties;
	label?: string;
}

export const Search = (props: SearchProps) => {
	const { onSubmitSearch, onSearchChange } = useSearch(props);

	return (
		<form
			onSubmit={onSubmitSearch}
			style={{
				display: "flex",
				alignItems: "center",
				gap: "1rem",
				maxWidth: 400,
				...{ ...props.styleContainer },
			}}
		>
			<TextField
				label={props.label}
				variant="filled"
				size="small"
				fullWidth
				sx={{ minWidth: 200 }}
				onChange={onSearchChange}
				value={props.search}
			/>
			<Button type="submit" variant="contained" color="primary">
				<>{i18n.t("search")}</>
			</Button>
		</form>
	);
};
