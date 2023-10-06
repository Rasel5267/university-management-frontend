"use client";

import ActionBar from "@/components/ui/ActionBar";
import ModalPage from "@/components/ui/Modal";
import UMTable from "@/components/ui/UMTable";
import { useDebounced } from "@/redux/hooks";
import { Button, Input, message } from "antd";
import Link from "next/link";
import { useState } from "react";
import dayjs from "dayjs";
import {
	EditOutlined,
	DeleteOutlined,
	ReloadOutlined,
	EyeOutlined,
} from "@ant-design/icons";
import { useAdminsQuery, useDeleteAdminMutation } from "@/redux/api/adminApi";
import { IDepartment } from "@/types/common";

const ManageAdminPage = () => {
	const query: Record<string, any> = {};

	const [size, setSize] = useState<number>(10);
	const [page, setPage] = useState<number>(1);
	const [sortBy, setSortBy] = useState<string>("");
	const [sortOrder, setSortOrder] = useState<string>("");
	const [searchTerm, setSearchTerm] = useState<string>("");
	const [showModal, setShowModal] = useState<boolean>(false);
	const [itemId, setItemId] = useState<string>("");

	query["limit"] = size;
	query["page"] = page;
	query["sortBy"] = sortBy;
	query["sortOrder"] = sortOrder;

	const debouncedTerm = useDebounced({
		searchQuery: searchTerm,
		delay: 600,
	});

	if (!!debouncedTerm) {
		query["searchTerm"] = debouncedTerm;
	}

	const { data } = useAdminsQuery({ ...query });
	const [deleteAdmin, { isLoading }] = useDeleteAdminMutation();

	const admins = data?.data;
	const meta = data?.meta;

	const deleteHandler = async () => {
		try {
			const res = await deleteAdmin(itemId).unwrap();
			setShowModal(false);
			message.success(res?.message);
		} catch (error: any) {
			message.error(error?.data?.errorMessages[0]?.message);
			setShowModal(false);
		}
	};

	const columns = [
		{
			title: "Id",
			dataIndex: "id",
			sorter: true,
		},
		{
			title: "Name",
			dataIndex: "name",
			render: function (data: Record<string, string>) {
				const middleName = data?.middleName || "";
				const fullName = `${data?.firstName} ${middleName} ${data?.lastName}`;
				return <>{fullName}</>;
			},
		},
		{
			title: "Email",
			dataIndex: "email",
		},
		{
			title: "Department",
			dataIndex: "managementDepartment",
			render: function (data: IDepartment) {
				return <>{data?.title}</>;
			},
		},
		{
			title: "Designation",
			dataIndex: "designation",
		},
		{
			title: "Created at",
			dataIndex: "createdAt",
			render: function (data: any) {
				return data && dayjs(data).format("MMM D, YYYY hh:mm A");
			},
			sorter: true,
		},
		{
			title: "Contact no.",
			dataIndex: "contactNo",
		},
		{
			title: "Action",
			render: function (data: any) {
				return (
					<div
						style={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							gap: "2px",
							padding: "5px",
							fontSize: "12px",
						}}
					>
						<Link href={`/super_admin/admin/details/${data.id}`}>
							<Button
								onClick={() => console.log(data)}
								type="primary"
								size="small"
							>
								<EyeOutlined />
							</Button>
						</Link>
						<Link href={`/super_admin/admin/edit/${data.id}`}>
							<Button
								style={{
									margin: "0px 5px",
								}}
								type="primary"
								size="small"
							>
								<EditOutlined />
							</Button>
						</Link>
						<Button
							onClick={() => {
								setItemId(data?.id);
								setShowModal(true);
							}}
							type="primary"
							size="small"
							danger
						>
							<DeleteOutlined />
						</Button>
						<ModalPage
							open={showModal}
							handleOk={deleteHandler}
							handleCancel={() => setShowModal(false)}
							confirmLoading={isLoading}
							modalText="Admin"
						/>
					</div>
				);
			},
		},
	];

	const onPaginationChange = (page: number, pageSize: number) => {
		setPage(page);
		setSize(pageSize);
	};

	const onTableChange = (pagination: any, filter: any, sorter: any) => {
		const { order, field } = sorter;
		setSortBy(field as string);
		setSortOrder(order === "ascend" ? "asc" : "desc");
	};

	const resetFilters = () => {
		setSortBy("");
		setSortOrder("");
		setSearchTerm("");
	};

	return (
		<div>
			<ActionBar title="Manage Admin">
				<div
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "space-between",
						marginTop: "1rem",
					}}
				>
					<Input
						type="text"
						size="large"
						placeholder="Search..."
						style={{
							maxWidth: "250px",
						}}
						onChange={(e) => {
							setSearchTerm(e.target.value);
						}}
					/>
					<div>
						<Link href="/super_admin/admin/create">
							<Button type="primary">Create</Button>
						</Link>
						{(!!sortBy || !!sortOrder || !!searchTerm) && (
							<Button
								onClick={resetFilters}
								type="primary"
								style={{
									margin: "0px 5px",
								}}
							>
								<ReloadOutlined />
							</Button>
						)}
					</div>
				</div>
			</ActionBar>
			<div style={{ marginTop: "1rem" }}>
				<UMTable
					loading={isLoading}
					dataSource={admins}
					columns={columns}
					pageSize={size}
					total={meta?.total || 10}
					showSizeChanger={false}
					onPaginationChange={onPaginationChange}
					onTableChange={onTableChange}
					showPagination={true}
					scroll={{ x: 1450, y: 300 }}
				/>
			</div>
		</div>
	);
};

export default ManageAdminPage;
