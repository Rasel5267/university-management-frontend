import ActionBar from "@/components/ui/ActionBar";
import { Button } from "antd";
import Link from "next/link";

const ManageStudentPage = () => {
	return (
		<div>
			<ActionBar title="Manage Student Page">
				<Link href="/super_admin/manage-student/create">
					<Button type="primary">Create Student</Button>
				</Link>
			</ActionBar>
		</div>
	);
};

export default ManageStudentPage;
