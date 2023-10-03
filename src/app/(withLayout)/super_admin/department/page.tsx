import ActionBar from "@/components/ui/ActionBar";
import { Button } from "antd";
import Link from "next/link";

const ManageDepartmentPage = () => {
	return (
		<div>
			<ActionBar title="Manage Department Page">
				<Link href="/super_admin/department/create">
					<Button type="primary">Create Department</Button>
				</Link>
			</ActionBar>
		</div>
	);
};

export default ManageDepartmentPage;
