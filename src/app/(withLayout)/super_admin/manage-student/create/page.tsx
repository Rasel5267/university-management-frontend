"use client";

import StepperForm from "@/components/StepperForm/StepperForm";
import BasicInfo from "@/components/StudentForms/BasicInfo";
import GuardianInfo from "@/components/StudentForms/GuardianInfo";
import LocalGuardianInfo from "@/components/StudentForms/LocalGuardianInfo";
import StudentInfo from "@/components/StudentForms/StudentInfo";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { getUserInfo } from "@/services/auth.service";

const CreateStudentPage = () => {
	const { role } = getUserInfo() as any;

	const steps = [
		{
			title: "Student Information",
			content: <StudentInfo />,
		},
		{
			title: "Basic Information",
			content: <BasicInfo />,
		},
		{
			title: "Guardian Information",
			content: <GuardianInfo />,
		},
		{
			title: "Local Guardian Information",
			content: <LocalGuardianInfo />,
		},
	];

	const handleStudentSubmit = async (data: any) => {
		try {
			console.log(data);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div>
			<UMBreadCrumb
				items={[
					{ label: `${role}`, link: `/${role}` },
					{
						label: `manage-student`,
						link: `/${role}/manage-student`,
					},
				]}
			/>
			<h1 style={{ textAlign: "center", margin: "1rem 0" }}>
				Create Student
			</h1>
			<StepperForm
				submitHandler={(value) => handleStudentSubmit(value)}
				steps={steps}
			/>
		</div>
	);
};

export default CreateStudentPage;
