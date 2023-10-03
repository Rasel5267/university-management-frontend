"use client";

import ActionBar from "@/components/ui/ActionBar";
import UMTable from "@/components/ui/UMTable";
import { Button, Input, message } from "antd";
import Link from "next/link";
import {
	EditOutlined,
	DeleteOutlined,
	ReloadOutlined,
} from "@ant-design/icons";
import {
	useDeleteDepartmentMutation,
	useDepartmentsQuery,
} from "@/redux/api/departmentApi";
import { useState } from "react";
import dayjs from "dayjs";
import { useDebounced } from "@/redux/hooks";
import ModalPage from "@/components/ui/Modal";

const ManageDepartmentPage = () => {
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

	const { data } = useDepartmentsQuery({ ...query });
	const [deleteDepartment, { isLoading }] = useDeleteDepartmentMutation();

	const departments = data?.data;
	const meta = data?.meta;

	const deleteHandler = async () => {
		try {
			const res = await deleteDepartment(itemId).unwrap();
			setShowModal(false);
			message.success(res?.message);
		} catch (error: any) {
			message.error(error?.data?.errorMessages[0]?.message);
			setShowModal(false);
		}
	};

	const columns = [
		{
			title: "Title",
			dataIndex: "title",
			key: "title",
		},
		{
			title: "CreatedAt",
			dataIndex: "createdAt",
			key: "createdAt",
			render: function (data: any) {
				return data && dayjs(data).format("MMM D, YYYY hh:mm A");
			},
			sorter: true,
		},
		{
			title: "Action",
			render: function (data: any) {
				return (
					<>
						<Link href={`/super_admin/department/edit/${data?.id}`}>
							<Button
								style={{
									margin: "0px 5px",
								}}
								type="primary"
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
							danger
						>
							<DeleteOutlined />
						</Button>
						<ModalPage
							open={showModal}
							handleOk={deleteHandler}
							handleCancel={() => setShowModal(false)}
							confirmLoading={isLoading}
							modalText="Department"
						/>
					</>
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
			<ActionBar title="Manage Department">
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
						<Link href="/super_admin/department/create">
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
					dataSource={departments}
					columns={columns}
					pageSize={size}
					total={meta?.total || 10}
					showSizeChanger={false}
					onPaginationChange={onPaginationChange}
					onTableChange={onTableChange}
					showPagination={true}
				/>
			</div>
		</div>
	);
};

export default ManageDepartmentPage;
