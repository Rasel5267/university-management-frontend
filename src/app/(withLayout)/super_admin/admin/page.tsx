import ActionBar from "@/components/ui/ActionBar";
import { Button } from "antd";
import Link from "next/link";

const ManageAdminPage = () => {
	return (
		<div>
			<ActionBar title="Manage Admin Page">
				<Link href="/super_admin/admin/create">
					<Button type="primary">Create Admin</Button>
				</Link>
			</ActionBar>
		</div>
	);
};

export default ManageAdminPage;
