import Image from 'next/image'
import React from 'react'

const RegisterLayout = ({children}) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="hidden lg:flex w-full items-center justify-center">
          <Image
            className="bounce-custom w-full max-w-[500px] max-h-[500px] h-auto"
            src="https://res.cloudinary.com/dpphpbkkz/image/upload/v1740577746/Mobile_login-bro.f79ed0f8_whutn1.svg"
            alt="login icon"
            width={500}
            height={500}
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 75vw, 50vw"
          />
        </div>
        <div className="">
        {children}
        </div>
      </div>
  )
}

export default RegisterLayout
