"use client";

import Form from "@/components/Forms/Form";
import FormDatePicker from "@/components/Forms/FormDatePicker";
import FormInput from "@/components/Forms/FormInput";
import FormSelectField from "@/components/Forms/FormSelectField";
import FormTextArea from "@/components/Forms/FormTextArea";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import UploadImage from "@/components/ui/UploadImage";
import { bloodGroupOptions, genderOptions } from "@/constants/global";
import { adminSchema } from "@/schemas/admin";
import { getUserInfo } from "@/services/auth.service";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Col, Row, message } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import { useDepartmentsQuery } from "@/redux/api/departmentApi";
import { IDepartment } from "@/types/common";
import { useAddAdminWithFormDataMutation } from "@/redux/api/adminApi";

const antIcon = (
	<LoadingOutlined style={{ fontSize: 24, color: "#fff" }} spin />
);

const CreateAdminPage = () => {
	const { role } = getUserInfo() as any;
	const { data } = useDepartmentsQuery({ limit: 100, page: 1 });
	const departments: IDepartment[] = data?.data;

	const departmentOptions =
		departments &&
		departments.map((department) => {
			return {
				label: department.title,
				value: department.id,
			};
		});

	const [addAdminWithFormData, { isLoading }] =
		useAddAdminWithFormDataMutation();

	const onSubmit = async (values: any) => {
		const obj = { ...values };
		const file = obj["file"];
		delete obj["file"];
		const data = JSON.stringify(obj);
		const formData = new FormData();
		formData.append("file", file as Blob);
		formData.append("data", data);
		try {
			const res = await addAdminWithFormData(formData).unwrap();
			message.success(res?.message);
			window.location.reload();
		} catch (error: any) {
			message.error(error?.data?.errorMessages[0]?.message);
		}
	};
	return (
		<div>
			<UMBreadCrumb
				items={[
					{ label: `${role}`, link: `/${role}` },
					{
						label: `admin`,
						link: `/${role}/admin`,
					},
				]}
			/>
			<h1 style={{ textAlign: "center", margin: "1rem 0" }}>
				Create Admin
			</h1>
			<div>
				<Form
					submitHandler={onSubmit}
					resolver={yupResolver(adminSchema)}
				>
					<div
						style={{
							border: "1px solid #d9d9d9",
							borderRadius: "5px",
							padding: "15px",
							marginBottom: "10px",
						}}
					>
						<p
							style={{
								fontSize: "18px",
								marginBottom: "10px",
							}}
						>
							Admin Information
						</p>
						<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
							<Col className="gutter-row" span={8}>
								<FormInput
									name="admin.name.firstName"
									type="text"
									size="large"
									placeholder="Enter Your First Name"
									label="First Name"
								/>
							</Col>
							<Col className="gutter-row" span={8}>
								<FormInput
									name="admin.name.middleName"
									type="text"
									size="large"
									placeholder="Enter Your Middle Name"
									label="Middle Name"
								/>
							</Col>
							<Col className="gutter-row" span={8}>
								<FormInput
									name="admin.name.lastName"
									type="text"
									size="large"
									placeholder="Enter Your Last Name"
									label="Last Name"
								/>
							</Col>
							<Col className="gutter-row" span={8}>
								<FormInput
									name="password"
									type="password"
									size="large"
									placeholder="Enter Your Password"
									label="Password"
								/>
							</Col>
							<Col className="gutter-row" span={8}>
								<FormSelectField
									name="admin.gender"
									size="large"
									label="Gender"
									options={genderOptions}
									placeholder="Select a gender"
								/>
							</Col>
							<Col className="gutter-row" span={8}>
								<FormSelectField
									name="admin.managementDepartment"
									size="large"
									label="Management Department"
									options={departmentOptions}
									placeholder="Select a Management Department"
								/>
							</Col>
							<Col
								className="gutter-row"
								span={8}
								style={{ marginTop: "0.5rem" }}
							>
								<UploadImage name="file" />
							</Col>
						</Row>
					</div>
					<div
						style={{
							border: "1px solid #d9d9d9",
							borderRadius: "5px",
							padding: "15px",
							marginBottom: "10px",
						}}
					>
						<p
							style={{
								fontSize: "18px",
								marginBottom: "10px",
							}}
						>
							Basic Information
						</p>
						<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
							<Col className="gutter-row" span={8}>
								<FormInput
									name="admin.email"
									type="text"
									size="large"
									placeholder="Enter Your Email Address"
									label="Email Address"
								/>
							</Col>
							<Col className="gutter-row" span={8}>
								<FormInput
									name="admin.contactNo"
									type="text"
									size="large"
									placeholder="Enter Your Contact Number"
									label="Contact Number"
								/>
							</Col>
							<Col className="gutter-row" span={8}>
								<FormInput
									name="admin.emergencyContactNo"
									type="text"
									size="large"
									placeholder="Enter Your Emergency Contact Number"
									label="Emergency Contact Number"
								/>
							</Col>
							<Col className="gutter-row" span={8}>
								<FormDatePicker
									name="admin.dateOfBirth"
									size="large"
									label="Date of Birth"
								/>
							</Col>
							<Col className="gutter-row" span={8}>
								<FormSelectField
									name="admin.bloodGroup"
									size="large"
									label="Blood Group"
									options={bloodGroupOptions}
									placeholder="Select a blood group"
								/>
							</Col>
							<Col className="gutter-row" span={8}>
								<FormInput
									name="admin.designation"
									type="text"
									size="large"
									placeholder="Enter Your Designation"
									label="Designation"
								/>
							</Col>
							<Col className="gutter-row" span={8}>
								<FormTextArea
									name="admin.presentAddress"
									placeholder="Enter Your Present Address"
									label="Present Address"
									autoSize={{ minRows: 3, maxRows: 3 }}
								/>
							</Col>
							<Col className="gutter-row" span={8}>
								<FormTextArea
									name="admin.permanentAddress"
									placeholder="Enter Your Permanent Address"
									label="Permanent Address"
									autoSize={{ minRows: 3, maxRows: 3 }}
								/>
							</Col>
						</Row>
					</div>
					<div
						style={{
							marginTop: "1rem",
							display: "flex",
							justifyContent: "end",
						}}
					>
						<Button type="primary" htmlType="submit">
							{isLoading ? (
								<Spin indicator={antIcon} />
							) : (
								"Create Admin"
							)}
						</Button>
					</div>
				</Form>
			</div>
		</div>
	);
};

export default CreateAdminPage;
