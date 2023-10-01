"use client";

import Contents from "@/components/ui/Contents";
import Sidebar from "@/components/ui/Sidebar";
import { isLoggedIn } from "@/services/auth.service";
import { Layout, Space, Spin } from "antd";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
	const userLoggedIn = isLoggedIn();
	const router = useRouter();
	const [isLoading, setIsLoading] = useState<boolean>(false);

	useEffect(() => {
		if (!userLoggedIn) {
			router.push("/login");
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
	return (
		<Layout hasSider>
			<Sidebar />
			<Contents>{children}</Contents>
		</Layout>
	);
};

export default DashboardLayout;