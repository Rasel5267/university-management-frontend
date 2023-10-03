import { Col, Row } from "antd";
import FormInput from "../Forms/FormInput";

const GuardianInfo = () => {
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
					Guardian Information
				</p>
				<Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
					<Col span={8}>
						<FormInput
							name="student.guardian.fatherName"
							label="Father name"
							size="large"
							placeholder="Enter your father name"
						/>
					</Col>
					<Col span={8}>
						<FormInput
							name="student.guardian.fatherOccupation"
							label="Father occupation"
							size="large"
							placeholder="Enter your father occupation"
						/>
					</Col>
					<Col span={8}>
						<FormInput
							name="student.guardian.fatherContactNo"
							label="Father contact no."
							size="large"
							placeholder="Enter your father contact number"
						/>
					</Col>
					<Col span={8}>
						<FormInput
							name="student.guardian.motherName"
							label="Mother name"
							size="large"
							placeholder="Enter your mother name"
						/>
					</Col>
					<Col span={8}>
						<FormInput
							name="student.guardian.motherOccupation"
							label="Mother occupation"
							size="large"
							placeholder="Enter your mother occupation"
						/>
					</Col>
					<Col span={8}>
						<FormInput
							name="student.guardian.motherContactNo"
							label="Mother contact no."
							size="large"
							placeholder="Enter your mother contact number"
						/>
					</Col>
					<Col span={8}>
						<FormInput
							name="student.guardian.address"
							label="Address"
							size="large"
							placeholder="Enter your guardians address"
						/>
					</Col>
				</Row>
			</div>
		</div>
	);
};

export default GuardianInfo;
