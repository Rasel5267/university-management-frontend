"use client";

import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { getUserInfo } from "@/services/auth.service";

const ChangePasswordPage = () => {
	const { role } = getUserInfo() as any;
	return (
		<div>
			<UMBreadCrumb items={[{ label: `${role}`, link: `/${role}` }]} />
			<h1>Change password page</h1>
		</div>
	);
};

export default ChangePasswordPage;
