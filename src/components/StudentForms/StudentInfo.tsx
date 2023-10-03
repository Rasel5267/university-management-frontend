"use client";

import { Col, Row } from "antd";
import FormInput from "../Forms/FormInput";
import FormSelectField from "../Forms/FormSelectField";
import {
	acDepartmentOptions,
	acSemesterOptions,
	facultyOptions,
	genderOptions,
} from "@/constants/global";
import UploadImage from "../ui/UploadImage";

const StudentInfo = () => {
	return (
		<div>
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
					Student Information
				</p>
				<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
					<Col className="gutter-row" span={8}>
						<FormInput
							name="student.name.firstName"
							type="text"
							size="large"
							placeholder="Enter Your First Name"
							label="First Name"
						/>
					</Col>
					<Col className="gutter-row" span={8}>
						<FormInput
							name="student.name.middleName"
							type="text"
							size="large"
							placeholder="Enter Your Middle Name"
							label="Middle Name"
						/>
					</Col>
					<Col className="gutter-row" span={8}>
						<FormInput
							name="student.name.lastName"
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
							name="student.academicDepartment"
							size="large"
							label="Academic Department"
							options={acDepartmentOptions}
							placeholder="Select Academic Department"
						/>
					</Col>
					<Col className="gutter-row" span={8}>
						<FormSelectField
							name="student.academicFaculty"
							size="large"
							label="Academic Faculty"
							options={facultyOptions}
							placeholder="Select Academic Faculty"
						/>
					</Col>
					<Col className="gutter-row" span={8}>
						<FormSelectField
							name="student.academicSemester"
							size="large"
							label="Academic Semester"
							options={acSemesterOptions}
							placeholder="Select Academic Semester"
						/>
					</Col>
					<Col className="gutter-row" span={8}>
						<FormSelectField
							name="student.gender"
							size="large"
							label="Gender"
							options={genderOptions}
							placeholder="Select Gender"
						/>
					</Col>
					<Col
						className="gutter-row"
						span={6}
						style={{ marginTop: "0.5rem" }}
					>
						<UploadImage name="file" />
					</Col>
				</Row>
			</div>
		</div>
	);
};

export default StudentInfo;
