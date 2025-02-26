
import React from 'react'
import { useFormik } from "formik";
import * as Yup from "yup";
import Select from "react-select";
import Underline from '@/components/ui/Underline';

const LoginPage = () => {
  return (
    <div className=''>
      <h1 className='text-2xl font-normal text-center'>Login</h1>
      <Underline className="h-[1px] bg-[#cf1da3] mb-6 mt-3 w-1/2 mx-auto"></Underline>
    </div>
  )
}

export default LoginPage
