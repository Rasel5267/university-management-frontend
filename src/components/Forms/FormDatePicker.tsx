"use client";

import { DatePicker, DatePickerProps } from "antd";
import { useFormContext, Controller } from "react-hook-form";
import dayjs, { Dayjs } from "dayjs";

type SelectFieldProps = {
	onChange?: (valOne: Dayjs | null, valTwo: string) => void;
	name: string;
	label?: string;
	value?: Dayjs;
	size?: "large" | "small";
};

const FormDatePicker = ({ onChange, name, size, label }: SelectFieldProps) => {
	const { control, setValue } = useFormContext();

	const handleOnChange: DatePickerProps["onChange"] = (date, dateString) => {
		onChange ? onChange(date, dateString) : null;
		setValue(name, dateString);
	};
	return (
		<>
			<div style={{ margin: "0.6rem 0", fontWeight: "500" }}>
				{label ? label : null}
			</div>
			<Controller
				control={control}
				name={name}
				render={({ field }) => (
					<DatePicker
						name={name}
						defaultValue={dayjs(field.value) || ""}
						size={size}
						onChange={handleOnChange}
						style={{ width: "100%" }}
					/>
				)}
			/>
		</>
	);
};

export default FormDatePicker;
