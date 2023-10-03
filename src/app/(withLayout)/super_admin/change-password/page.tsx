"use client";

import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { changePasswordSchema } from "@/schemas/change-password";
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
	oldPassword: string;
	newPassword: string;
};

const ChangePasswordPage = () => {
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
			<UMBreadCrumb items={[{ label: `${role}`, link: `/${role}` }]} />
			<h1 style={{ textAlign: "center", margin: "1rem 0" }}>
				Change Password
			</h1>
			<div>
				<Form
					submitHandler={onSubmit}
					resolver={yupResolver(changePasswordSchema)}
				>
					<div
						style={{
							border: "1px solid #d9d9d9",
							borderRadius: "5px",
							padding: "15px",
							marginBottom: "10px",
						}}
					>
						<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
							<Col className="gutter-row" span={12}>
								<FormInput
									name="oldPassword"
									type="password"
									size="large"
									placeholder="Enter Your old Password"
									label="Old Password"
								/>
							</Col>
							<Col className="gutter-row" span={12}>
								<FormInput
									name="newPassword"
									type="password"
									size="large"
									placeholder="Enter Your new Password"
									label="New Password"
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
								"Change Password"
							)}
						</Button>
					</div>
				</Form>
			</div>
		</div>
	);
};

export default ChangePasswordPage;
