import { Button, Dropdown, Layout, Row } from "antd";
import type { MenuProps } from "antd";
import { Avatar, Space } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { removeUserInfo } from "@/services/auth.service";
import { authKey } from "@/constants/storageKey";
import { useRouter } from "next/navigation";
const { Header: AntHeader } = Layout;

const Header = () => {
	const router = useRouter();
	const logOut = () => {
		removeUserInfo(authKey);
		router.push("/login");
	};

	const items: MenuProps["items"] = [
		{
			key: "0",
			label: (
				<Button type="text" danger onClick={logOut}>
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
						<Space wrap size={16}>
							<Avatar
								size="large"
								icon={<UserOutlined />}
								style={{ cursor: "pointer" }}
							/>
						</Space>
					</Space>
				</Dropdown>
			</Row>
		</AntHeader>
	);
};

export default Header;
