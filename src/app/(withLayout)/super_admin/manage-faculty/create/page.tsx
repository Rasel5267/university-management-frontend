"use client";

import Form from "@/components/Forms/Form";
import FormDatePicker from "@/components/Forms/FormDatePicker";
import FormInput from "@/components/Forms/FormInput";
import FormSelectField from "@/components/Forms/FormSelectField";
import FormTextArea from "@/components/Forms/FormTextArea";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import UploadImage from "@/components/ui/UploadImage";
import {
	acDepartmentOptions,
	bloodGroupOptions,
	genderOptions,
} from "@/constants/global";
import { facultySchema } from "@/schemas/faculty";
import { getUserInfo } from "@/services/auth.service";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Col, Row } from "antd";
import { SubmitHandler } from "react-hook-form";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

const antIcon = (
	<LoadingOutlined style={{ fontSize: 24, color: "#fff" }} spin />
);

const isLoading = false;

type FormValues = {
	id: string;
	password: string;
};

const CreateFacultyPage = () => {
	const { role } = getUserInfo() as any;

	const onSubmit: SubmitHandler<FormValues> = async (data: any) => {
		try {
			console.log(data);
		} catch (error: any) {
			console.log(error);
		}
	};
	return (
		<div>
			<UMBreadCrumb
				items={[
					{ label: `${role}`, link: `/${role}` },
					{
						label: `manage-faculty`,
						link: `/${role}/manage-faculty`,
					},
				]}
			/>
			<h1 style={{ textAlign: "center", margin: "1rem 0" }}>
				Create Faculty
			</h1>
			<div>
				<Form
					submitHandler={onSubmit}
					resolver={yupResolver(facultySchema)}
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
							Faculty Information
						</p>
						<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
							<Col className="gutter-row" span={6}>
								<FormInput
									name="faculty.name.firstName"
									type="text"
									size="large"
									placeholder="Enter Your First Name"
									label="First Name"
								/>
							</Col>
							<Col className="gutter-row" span={6}>
								<FormInput
									name="faculty.name.middleName"
									type="text"
									size="large"
									placeholder="Enter Your Middle Name"
									label="Middle Name"
								/>
							</Col>
							<Col className="gutter-row" span={6}>
								<FormInput
									name="faculty.name.lastName"
									type="text"
									size="large"
									placeholder="Enter Your Last Name"
									label="Last Name"
								/>
							</Col>
							<Col className="gutter-row" span={6}>
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
									name="faculty.gender"
									size="large"
									label="Gender"
									options={genderOptions}
									placeholder="Select a gender"
								/>
							</Col>
							<Col className="gutter-row" span={8}>
								<FormSelectField
									name="faculty.academicFaculty"
									size="large"
									label="Academic Faculty"
									options={acDepartmentOptions}
									placeholder="Select a Academic Faculty"
								/>
							</Col>
							<Col className="gutter-row" span={8}>
								<FormSelectField
									name="faculty.academicDepartment"
									size="large"
									label="Academic Department"
									options={acDepartmentOptions}
									placeholder="Select a Academic Department"
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
									name="faculty.email"
									type="text"
									size="large"
									placeholder="Enter Your Email Address"
									label="Email Address"
								/>
							</Col>
							<Col className="gutter-row" span={8}>
								<FormInput
									name="faculty.contactNo"
									type="text"
									size="large"
									placeholder="Enter Your Contact Number"
									label="Contact Number"
								/>
							</Col>
							<Col className="gutter-row" span={8}>
								<FormInput
									name="faculty.emergencyContactNo"
									type="text"
									size="large"
									placeholder="Enter Your Emergency Contact Number"
									label="Emergency Contact Number"
								/>
							</Col>
							<Col className="gutter-row" span={8}>
								<FormDatePicker
									name="faculty.dateOfBirth"
									size="large"
									label="Date of Birth"
								/>
							</Col>
							<Col className="gutter-row" span={8}>
								<FormSelectField
									name="faculty.bloodGroup"
									size="large"
									label="Blood Group"
									options={bloodGroupOptions}
									placeholder="Select a blood group"
								/>
							</Col>
							<Col className="gutter-row" span={8}>
								<FormInput
									name="faculty.designation"
									type="text"
									size="large"
									placeholder="Enter Your Designation"
									label="Designation"
								/>
							</Col>
							<Col className="gutter-row" span={8}>
								<FormTextArea
									name="faculty.presentAddress"
									placeholder="Enter Your Present Address"
									label="Present Address"
									autoSize={{ minRows: 3, maxRows: 3 }}
								/>
							</Col>
							<Col className="gutter-row" span={8}>
								<FormTextArea
									name="faculty.permanentAddress"
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
								"Create Faculty"
							)}
						</Button>
					</div>
				</Form>
			</div>
		</div>
	);
};

export default CreateFacultyPage;
