"use client";

import { grtErrorMessageByPropertyName } from "@/utils/schema-validator";
import { Input } from "antd";
import { useFormContext, Controller } from "react-hook-form";

interface IInput {
	name: string;
	type?: string;
	size?: "large" | "small";
	value?: string | string[] | undefined;
	id?: string;
	placeholder?: string;
	validation?: object;
	label?: string;
}

const FormInput = ({
	name,
	type,
	size,
	value,
	id,
	placeholder,
	validation,
	label,
}: IInput) => {
	const {
		control,
		formState: { errors },
	} = useFormContext();

	const errorMessage = grtErrorMessageByPropertyName(errors, name);
	return (
		<>
			<div style={{ margin: "0.6rem 0", fontWeight: "500" }}>
				{label ? label : null}
			</div>
			<Controller
				control={control}
				name={name}
				render={({ field }) =>
					type === "password" ? (
						<Input.Password
							type={type}
							size={size}
							placeholder={placeholder}
							{...field}
							value={value ? value : field.value}
						/>
					) : (
						<Input
							type={type}
							size={size}
							placeholder={placeholder}
							{...field}
							value={value ? value : field.value}
						/>
					)
				}
			/>
			<small
				style={{
					color: "red",
					fontSize: "12px",
				}}
			>
				{errorMessage}
			</small>
		</>
	);
};

export default FormInput;
