import { Col, Row } from "antd";
import FormInput from "../Forms/FormInput";

const LocalGuardianInfo = () => {
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
						fontSize: "16px",
						marginBottom: "10px",
					}}
				>
					Local Guardian Information
				</p>
				<Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
					<Col span={6}>
						<FormInput
							name="student.localGuardian.name"
							label="Local Guardian name"
							size="large"
							placeholder="Enter your Local Guardian name"
						/>
					</Col>
					<Col span={6}>
						<FormInput
							name="student.localGuardian.occupation"
							label="Local Guardian occupation"
							size="large"
							placeholder="Enter your Local Guardian occupation"
						/>
					</Col>
					<Col span={6}>
						<FormInput
							name="student.localGuardian.contactNo"
							label="Local Guardian contact no"
							size="large"
							placeholder="Enter your Local Guardian contact number"
						/>
					</Col>
					<Col span={6}>
						<FormInput
							name="student.localGuardian.address"
							label="Address"
							size="large"
							placeholder="Enter your Local Guardians address"
						/>
					</Col>
				</Row>
			</div>
		</div>
	);
};

export default LocalGuardianInfo;
