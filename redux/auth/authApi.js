import { rootApi } from "../api/rootApi";
import { logout, Registration, setUserRole } from "./authSlice";

export const authApi = rootApi.injectEndpoints({
    endpoints: (builder) => ({
        registration: builder.mutation({
            query: (userInfo) => ({
                url: "/auth/registration",
                method: "POST",
                body: userInfo
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const res = await queryFulfilled;
                    console.log(res)
                    if(res?.data?.role === "student"){
                        dispatch(setUserRole({role:"student"}))
                    }

                    if(res?.data?.user){
                        console.log(res?.data?.user)
                        dispatch(Registration({user:res.data.user}))
                    }

                    
                    // console.log("Registration successful:", res);
                } catch (error) {
                    console.error("Registration failed:", error?.error?.data || error);
                }
            }
        }),

        logout: builder.mutation({
            query: () => ({
                url: "/auth/logout",
                method: "POST",
            }),            
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                   const res =  await queryFulfilled;
                //    console.log(res)
                    dispatch(logout());
                } catch (error) {
                    console.error("Logout failed:", error?.error?.data || error);
                }
            }
        }),
    })
})

export const { useRegistrationMutation, useLogoutMutation } = authApi;
