import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { logout } from '../auth/authSlice';

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
  endpoints:(builder)=>({
    verifySession: builder.mutation({
        query:()=>({
            url:`/auth/verify-session`,
            method:"GET",
            
        }),
        //  need to add logic
        async onQueryStarted( arg, {dispatch,queryFulfilled}){
            try {
              const { data } = await queryFulfilled; // Await API response
              // console.log(data, "verifySession");
            } catch (error) {
              dispatch(logout())
                // console.log(error, "verifySession");
            }
        }
    })
  })
});
export const {  } = rootApi;
