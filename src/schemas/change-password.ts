import * as yup from "yup";

export const changePasswordSchema = yup.object().shape({
	oldPassword: yup.string().min(6).max(32).required(),
	newPassword: yup.string().min(6).max(32).required(),
});
