"use client";

import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { getUserInfo } from "@/services/auth.service";

const ManageUserPage = () => {
	const { role } = getUserInfo() as any;
	return (
		<div>
			<UMBreadCrumb items={[{ label: `${role}`, link: `/${role}` }]} />
			<h1>Manage User Page</h1>
		</div>
	);
};

export default ManageUserPage;
