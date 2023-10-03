"use client";

import { Button, Result } from "antd";
import Link from "next/link";

const ErrorPage = () => {
	return (
		<Result
			status="warning"
			title="Something went wrong"
			extra={
				<Button>
					<Link href="/">Back Home</Link>
				</Button>
			}
		/>
	);
};

export default ErrorPage;
