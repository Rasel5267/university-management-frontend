"use client";

import { Table } from "antd";

type UMTableProps = {
	columns: any;
	loading: boolean;
	dataSource: any;
	pageSize?: number;
	total?: number;
	showSizeChanger?: boolean;
	onPaginationChange?: (pageSize: number, total: number) => void;
	onTableChange?: (pagination: any, filter: any, sorter: any) => void;
	showPagination?: boolean;
	scroll: any;
};

const UMTable = ({
	columns,
	loading = false,
	dataSource,
	pageSize,
	total,
	showSizeChanger = false,
	onPaginationChange,
	onTableChange,
	showPagination = true,
	scroll,
}: UMTableProps) => {
	const paginationConfig = showPagination
		? {
				pageSize: pageSize,
				total: total,
				showSizeChanger: showSizeChanger,
				onChange: onPaginationChange,
		  }
		: false;

	return (
		<Table
			loading={loading}
			columns={columns}
			dataSource={dataSource}
			pagination={paginationConfig}
			onChange={onTableChange}
			scroll={scroll}
			bordered
			style={{ whiteSpace: "nowrap" }}
		/>
	);
};

export default UMTable;
