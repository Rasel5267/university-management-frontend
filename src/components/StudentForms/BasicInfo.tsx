import { Col, Row } from "antd";
import FormInput from "../Forms/FormInput";
import FormDatePicker from "../Forms/FormDatePicker";
import FormSelectField from "../Forms/FormSelectField";
import { bloodGroupOptions } from "@/constants/global";
import FormTextArea from "../Forms/FormTextArea";

const BasicInfo = () => {
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
					Student Basic Information
				</p>
				<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
					<Col className="gutter-row" span={8}>
						<FormInput
							type="email"
							name="student.email"
							label="Email address"
							size="large"
							placeholder="Enter your email address"
						/>
					</Col>
					<Col className="gutter-row" span={8}>
						<FormInput
							name="student.contactNo"
							label="Contact no."
							size="large"
							placeholder="Enter contact number"
						/>
					</Col>
					<Col className="gutter-row" span={8}>
						<FormInput
							name="student.emergencyContactNo"
							label="Emergency contact no."
							size="large"
							placeholder="Enter emergency contact number"
						/>
					</Col>
					<Col className="gutter-row" span={12}>
						<FormDatePicker
							name="student.dateOfBirth"
							label="Date of birth"
							size="large"
						/>
					</Col>
					<Col className="gutter-row" span={12}>
						<FormSelectField
							name="student.bloodGroup"
							label="Blood group"
							placeholder="Select blood group"
							options={bloodGroupOptions}
							size="large"
						/>
					</Col>
					<Col className="gutter-row" span={12}>
						<FormTextArea
							name="student.presentAddress"
							label="Present address"
							placeholder="Your present address"
							autoSize={{ minRows: 3, maxRows: 3 }}
						/>
					</Col>
					<Col className="gutter-row" span={12}>
						<FormTextArea
							name="student.permanentAddress"
							label="Permanent address"
							placeholder="Your permanent address"
							autoSize={{ minRows: 3, maxRows: 3 }}
						/>
					</Col>
				</Row>
			</div>
		</div>
	);
};

export default BasicInfo;
