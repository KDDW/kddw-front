import React from "react";
import { SearchProps } from "./Search";

export const useSearch = (props: SearchProps) => {
	const onSubmitSearch = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		props.onSubmitSearch(props.search);
	};
	const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		props.onSearchChange(e.target.value);
	};

	return {
		onSubmitSearch,
		onSearchChange,
	};
};
