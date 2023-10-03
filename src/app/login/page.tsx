import LoginForm from "@/components/ui/LoginForm";
import { Col, Row } from "antd";
import { Metadata } from "next";
import Image from "next/image";
import { LoadingOutlined } from "@ant-design/icons";

export const metadata: Metadata = {
	title: "UMS | Login",
	description: "University Management",
};

const LoginPage = () => {
	return (
		<Row
			justify="center"
			align="middle"
			style={{
				minHeight: "100vh",
				padding: "0 2rem",
				gap: "1rem",
				margin: "3rem 0",
			}}
		>
			<Col sm={24} md={12} lg={10}>
				<div className="imgWrapper">
					<Image
						src="/login-image.png"
						alt="Next.js Logo"
						fill
						priority
						sizes="(max-width:768px) 100vw"
					/>
				</div>
			</Col>
			<Col sm={24} md={12} lg={10}>
				<LoginForm />
			</Col>
		</Row>
	);
};

export default LoginPage;
