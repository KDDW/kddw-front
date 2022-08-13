import {
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	SelectChangeEvent,
	SelectProps,
	SxProps,
} from "@mui/material";
import React from "react";

interface MySelectProps {
	selectedValue: string;
	options: Array<{ value: string; label: string }>;
	handleChangeSelectedValue: (e: SelectChangeEvent<any>) => void;
	label: string;
	styles?: {
		formControlSx?: SxProps;
		labelSx?: SxProps;
		selectSx?: SxProps;
		menuItemSx?: SxProps;
	};
}

const MySelect = (props: MySelectProps) => {
	const { label, selectedValue, handleChangeSelectedValue, options } = props;
	const uid = React.useRef(Math.random().toString(36).substring(7));
	return (
		<FormControl
			sx={{ minWidth: 100, m: 2 }}
			size="small"
			{...props.styles?.formControlSx}
		>
			<InputLabel id={`${uid}`} {...props.styles?.labelSx}>
				{label}
			</InputLabel>
			<Select
				labelId={`${uid}`}
				id={`${uid}`}
				value={selectedValue}
				label={label}
				onChange={handleChangeSelectedValue}
				{...props.styles?.selectSx}
			>
				{options.map((option, i) => (
					<MenuItem
						key={i}
						value={option.value}
						{...props.styles?.menuItemSx}
					>
						{option.label}
					</MenuItem>
				))}
			</Select>
		</FormControl>
	);
};

export default MySelect;
