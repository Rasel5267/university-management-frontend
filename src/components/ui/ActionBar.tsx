"use client";

import { getUserInfo } from "@/services/auth.service";
import UMBreadCrumb from "./UMBreadCrumb";

type ActionBarProps = {
	title?: string;
	children?: React.ReactElement | React.ReactNode;
};

const ActionBar = ({ title, children }: ActionBarProps) => {
	const { role } = getUserInfo() as any;
	return (
		<div>
			<UMBreadCrumb items={[{ label: `${role}`, link: `/${role}` }]} />
			<h1>{title}</h1>
			<div style={{ display: "flex" }}>{children}</div>
		</div>
	);
};

export default ActionBar;
