"use client";

import { Input } from "antd";
import { useFormContext, Controller } from "react-hook-form";

type AutoSizeProps = {
	minRows: number;
	maxRows: number;
};

type SelectFieldProps = {
	name: string;
	autoSize?: AutoSizeProps;
	value?: string | string[] | undefined;
	placeholder?: string;
	label?: string;
};

const FormTextArea = ({
	name,
	autoSize,
	value,
	placeholder,
	label,
}: SelectFieldProps) => {
	const { control } = useFormContext();
	return (
		<>
			<div style={{ margin: "0.6rem 0", fontWeight: "500" }}>
				{label ? label : null}
			</div>
			<Controller
				control={control}
				name={name}
				render={({ field }) => (
					<Input.TextArea
						autoSize={autoSize}
						placeholder={placeholder}
						{...field}
						defaultValue={value}
					/>
				)}
			/>
		</>
	);
};

export default FormTextArea;
