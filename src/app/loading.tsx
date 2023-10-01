import { Space, Spin } from "antd";

const Loading = () => {
	return (
		<div className="flex_middle">
			<Space size="middle">
				<Spin size="large" />
			</Space>
		</div>
	);
};

export default Loading;
