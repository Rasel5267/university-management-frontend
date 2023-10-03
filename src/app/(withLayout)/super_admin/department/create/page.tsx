"use client";

import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { getUserInfo } from "@/services/auth.service";

const CreateDepartmentPage = () => {
	const { role } = getUserInfo() as any;
	return (
		<div>
			<UMBreadCrumb
				items={[
					{ label: `${role}`, link: `/${role}` },
					{
						label: `department`,
						link: `/${role}/department`,
					},
				]}
			/>
			<h1>Create Department Page</h1>
		</div>
	);
};

export default CreateDepartmentPage;
