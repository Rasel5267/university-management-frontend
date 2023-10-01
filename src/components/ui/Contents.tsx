"use client";

import { Layout, theme } from "antd";
import UMBreadCrumb from "./UMBreadCrumb";
import Header from "./Header";
const { Content } = Layout;

const Contents = ({ children }: { children: React.ReactNode }) => {
	const base = "admin";

	return (
		<Content style={{ minHeight: "100vh" }}>
			<Header />
			<div style={{ padding: "1rem" }}>
				<UMBreadCrumb
					items={[
						{ label: `${base}`, link: `/${base}` },
						{ label: "student", link: `/${base}/student` },
					]}
				/>
				{children}
			</div>
		</Content>
	);
};

export default Contents;
