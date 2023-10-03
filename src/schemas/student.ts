import * as yup from "yup";

export const studentSchema = yup.object().shape({
	password: yup.string().min(6).max(32).required(),
	student: yup.object().shape({
		name: yup.object().shape({
			firstName: yup.string().required("First Name is required"),
			middleName: yup.string().required("Middle Name is required"),
			lastName: yup.string().required("Last Name is required"),
		}),
		email: yup.string().email().required("Email is required"),
		dateOfBirth: yup.string().required("Date of Birth is required"),
		contactNo: yup.string().required("Contact number is required"),
		emergencyContactNo: yup
			.string()
			.required("Emergency Contact number is required"),
		guardian: yup.object().shape({
			fatherName: yup.string().required("Father name is required"),
			fatherOccupation: yup
				.string()
				.required("Father Occupation is required"),
			fatherContactNo: yup
				.string()
				.required("Father Contact number is required"),
			motherName: yup.string().required("Mother name is required"),
			motherOccupation: yup
				.string()
				.required("Mother Occupation is required"),
			motherContactNo: yup
				.string()
				.required("Mother Contact number is required"),
			address: yup.string().required("Address is required"),
		}),
		localGuardian: yup.object().shape({
			name: yup.string().required("Name is required"),
			occupation: yup.string().required("Occupation is required"),
			contactNo: yup.string().required("Contact number is required"),
			address: yup.string().required("Address is required"),
		}),
	}),
});
