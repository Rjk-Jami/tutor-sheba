import UserLogin from "@/components/LoginSengments/UserLogin";
import LoginUserType from "@/components/RegisterSegments/RegisterUserType/LoginUserType";
import RegisterUserType from "@/components/RegisterSegments/RegisterUserType/RegisterUserType";
import Underline from "@/components/ui/Underline";

const LoginPage = () => {
  return (
    <div className="my-3">
      <div className="p-8 border border-gray-300 rounded-md">
        <h1 className="text-2xl font-normal text-center">Register</h1>
        <Underline className="h-[1px] !bg-[#cf1da3] mb-6 mt-3 !w-1/2 mx-auto"></Underline>
        <div className="">
          <LoginUserType />
        </div>
        <div className="mt-5">
          <UserLogin />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
