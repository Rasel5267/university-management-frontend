import ActionBar from "@/components/ui/ActionBar";
import { Button } from "antd";
import Link from "next/link";

const ManageFacultyPage = () => {
	return (
		<div>
			<ActionBar title="Manage Faculty Page">
				<Link href="/super_admin/manage-faculty/create">
					<Button type="primary">Create Faculty</Button>
				</Link>
			</ActionBar>
		</div>
	);
};

export default ManageFacultyPage;
