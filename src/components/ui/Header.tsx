import { Button, Dropdown, Layout, Row } from "antd";
import type { MenuProps } from "antd";
import { Avatar, Space } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { getUserInfo, removeUserInfo } from "@/services/auth.service";
import { authKey } from "@/constants/storageKey";
import { useRouter } from "next/navigation";
const { Header: AntHeader } = Layout;

const Header = () => {
	const router = useRouter();
	const logOut = () => {
		removeUserInfo(authKey);
		router.push("/login");
	};

	const { role } = getUserInfo() as any;

	const items: MenuProps["items"] = [
		{
			key: "0",
			label: (
				<Button
					style={{ width: "100%" }}
					type="text"
					danger
					onClick={logOut}
				>
					Logout
				</Button>
			),
		},
	];

	return (
		<AntHeader style={{ background: "#fff", padding: "0 35px" }}>
			<Row justify="end" align="middle" style={{ height: "100%" }}>
				<Dropdown menu={{ items }} placement="bottomRight" arrow>
					<Space direction="vertical" size={16}>
						<Space wrap size={16} style={{ cursor: "pointer" }}>
							<span style={{ textTransform: "uppercase" }}>
								{role}
							</span>
							<Avatar size="large" icon={<UserOutlined />} />
						</Space>
					</Space>
				</Dropdown>
			</Row>
		</AntHeader>
	);
};

export default Header;
