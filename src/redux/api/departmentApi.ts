import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const DEPARTMENT_URL = "/management-departments";

export const departmentApi = baseApi.injectEndpoints({
	endpoints: (build) => ({
		departments: build.query({
			query: (arg: Record<string, any>) => ({
				url: `${DEPARTMENT_URL}`,
				method: "GET",
				params: arg,
			}),
			providesTags: [tagTypes.department],
		}),
		addDepartment: build.mutation({
			query: (data) => ({
				url: `${DEPARTMENT_URL}`,
				method: "POST",
				data: data,
			}),
			invalidatesTags: [tagTypes.department],
		}),
		department: build.query({
			query: (id) => ({
				url: `${DEPARTMENT_URL}/${id}`,
				method: "GET",
			}),
			providesTags: [tagTypes.department],
		}),
		updateDepartment: build.mutation({
			query: (data) => ({
				url: `${DEPARTMENT_URL}/${data.id}`,
				method: "PATCH",
				data: data.body,
			}),
			invalidatesTags: [tagTypes.department],
		}),
		deleteDepartment: build.mutation({
			query: (id) => ({
				url: `${DEPARTMENT_URL}/${id}`,
				method: "DELETE",
			}),
			invalidatesTags: [tagTypes.department],
		}),
	}),
});

export const {
	useDepartmentsQuery,
	useAddDepartmentMutation,
	useDepartmentQuery,
	useUpdateDepartmentMutation,
	useDeleteDepartmentMutation,
} = departmentApi;