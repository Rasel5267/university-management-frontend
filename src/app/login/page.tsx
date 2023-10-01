"use client";

import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import { useUserLoginMutation } from "@/redux/api/authApi";
import { isLoggedIn, storeUserInfo } from "@/services/auth.service";
import { Button, Col, Row, Space, Spin } from "antd";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";

type FormValues = {
	id: string;
	password: string;
};

const LoginPage = () => {
	const router = useRouter();
	const [userLogin] = useUserLoginMutation();

	const userLoggedIn = isLoggedIn();
	const [isLoading, setIsLoading] = useState<boolean>(false);

	useEffect(() => {
		if (userLoggedIn) {
			router.push("/profile");
		}
		setIsLoading(true);
	}, [userLoggedIn, router]);

	if (!isLoading) {
		return (
			<div className="flex_middle">
				<Space size="middle">
					<Spin size="large" />
				</Space>
			</div>
		);
	}

	const onSubmit: SubmitHandler<FormValues> = async (data: any) => {
		try {
			const res = await userLogin({ ...data }).unwrap();
			if (res?.data?.accessToken) {
				router.push("/profile");
			}
			toast.success(res.message);
			storeUserInfo({ accessToken: res?.data?.accessToken });
		} catch (error: any) {
			toast.error(error?.data?.errorMessages[0]?.message);
		}
	};
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
				<h1 style={{ margin: "15px 0" }}>First Login Your Account</h1>
				<div>
					<Form submitHandler={onSubmit}>
						<div>
							<FormInput
								name="id"
								type="text"
								size="large"
								placeholder="Enter Your id"
								label="User ID"
							/>
						</div>
						<div style={{ margin: "15px 0" }}>
							<FormInput
								name="password"
								type="password"
								size="large"
								placeholder="Enter Your password"
								label="User Password"
							/>
						</div>
						<Button type="primary" htmlType="submit">
							Login
						</Button>
					</Form>
				</div>
			</Col>
		</Row>
	);
};

export default LoginPage;
