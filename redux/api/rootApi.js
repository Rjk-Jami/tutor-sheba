import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { logout } from "../auth/authSlice";

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_SERVER_API,
  credentials: "include",
  prepareHeaders: (headers) => {
    headers.set("Content-Type", "application/json");
    return headers;
  },
});

export const rootApi = createApi({
  reducerPath: "api",
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    verifySession: builder.mutation({
      query: () => ({
        url: `/auth/verify-session`,
        method: "GET",
      }),
      //  need to add logic
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          // console.log(data, "verifySession");
          if (!data.success) {
            dispatch(logout());
          }
        } catch (error) {
          dispatch(logout());
          // console.log(error, "verifySession");
        }
      },
    }),
    getDistricts: builder.query({
      query: () => `/user/districts`,
    }),

    getLocations: builder.query({
      query: (districtId) => `/user/locations?district=${districtId}`,
    }),

    getMediums: builder.query({
      query: () => `/user/mediums`,
    }),
    getClasses: builder.query({
      query: (mediumId) => `/user/classes?medium=${mediumId}`,
    }),
    getFilteredTuitions: builder.query({
      query: ({ filters, page, limit }) => ({
        url:"/user/tuitions",
        method:"GET",
        params:{...filters,page,limit}
      }),
      transformResponse: (response) => {
        return response;
      },
        // providesTags: ["Tuitions"],
    })
  }),
});
export const {
  useGetDistrictsQuery,
  useGetLocationsQuery,
  useGetMediumsQuery,
  useGetClassesQuery,
  useGetFilteredTuitionsQuery
} = rootApi;
