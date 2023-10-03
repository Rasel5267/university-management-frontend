import { Modal } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";

type ModalProps = {
	open: boolean;
	handleOk: () => void;
	handleCancel: () => void;
	confirmLoading: boolean;
	modalText: string;
};

const ModalPage = ({
	open,
	handleOk,
	handleCancel,
	confirmLoading,
	modalText,
}: ModalProps) => {
	return (
		<Modal
			title="Confirm"
			open={open}
			onOk={handleOk}
			confirmLoading={confirmLoading}
			onCancel={handleCancel}
			centered
			okText="Yes"
			okType="danger"
			cancelText="No"
			maskStyle={{ backgroundColor: "#8c8c8c47" }}
		>
			<div
				style={{
					display: "flex",
					alignItems: "center",
					gap: "0.8rem",
				}}
			>
				<ExclamationCircleOutlined
					style={{
						fontSize: "18px",
						color: "#fbc14f",
					}}
				/>
				<p>Do you Want to delete this {modalText}?</p>
			</div>
		</Modal>
	);
};

export default ModalPage;
