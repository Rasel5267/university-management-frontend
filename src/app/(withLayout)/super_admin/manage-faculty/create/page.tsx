"use client";

import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { getUserInfo } from "@/services/auth.service";

const CreateFacultyPage = () => {
	const { role } = getUserInfo() as any;
	return (
		<div>
			<UMBreadCrumb
				items={[
					{ label: `${role}`, link: `/${role}` },
					{
						label: `manage-faculty`,
						link: `/${role}/manage-faculty`,
					},
				]}
			/>
			<h1>Create Faculty Page</h1>
		</div>
	);
};

export default CreateFacultyPage;
