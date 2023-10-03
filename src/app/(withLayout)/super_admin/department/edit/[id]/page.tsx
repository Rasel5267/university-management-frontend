"use client";

import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import {
	useDepartmentQuery,
	useUpdateDepartmentMutation,
} from "@/redux/api/departmentApi";
import { departmentSchema } from "@/schemas/department";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Col, Row, message } from "antd";
import { SubmitHandler } from "react-hook-form";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

const antIcon = (
	<LoadingOutlined style={{ fontSize: 24, color: "#fff" }} spin />
);

type IDProps = {
	params: any;
};

type FormValues = {
	title: string;
};

const EditDepartmentPage = ({ params }: IDProps) => {
	const { id } = params;

	const { data } = useDepartmentQuery(id);
	const [updateDepartment, { isLoading }] = useUpdateDepartmentMutation();

	const onSubmit: SubmitHandler<FormValues> = async (values: {
		title: string;
	}) => {
		try {
			const res = await updateDepartment({ id, body: values }).unwrap();
			message.success(res?.message);
		} catch (error: any) {
			message.error(error?.data?.errorMessages[0]?.message);
		}
	};

	const defaultValues = {
		title: data?.data?.title || "",
	};

	return (
		<div>
			<UMBreadCrumb
				items={[
					{ label: `super_admin`, link: `/super_admin` },
					{
						label: `department`,
						link: `/super_admin/department`,
					},
				]}
			/>
			<h1 style={{ textAlign: "center", margin: "1rem 0" }}>
				Update Department
			</h1>
			<Form
				submitHandler={onSubmit}
				defaultValues={defaultValues}
				resolver={yupResolver(departmentSchema)}
			>
				<Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
					<Col span={8} style={{ margin: "10px 0" }}>
						<FormInput
							name="title"
							type="text"
							size="large"
							placeholder="Enter Department Title"
							label="Management Department Title"
						/>
					</Col>
				</Row>
				<Button type="primary" htmlType="submit">
					{isLoading ? (
						<Spin indicator={antIcon} />
					) : (
						"Update Department"
					)}
				</Button>
			</Form>
		</div>
	);
};

export default EditDepartmentPage;
