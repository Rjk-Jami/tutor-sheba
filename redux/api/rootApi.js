import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
import { headers } from "next/headers";

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
        onQueryStarted( arg, {dispatch,queryFulfilled}){
            try {
                
            } catch (error) {
                
            }
        }
    })
  })
});
