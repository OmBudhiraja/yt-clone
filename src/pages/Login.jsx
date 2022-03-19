import { useState } from 'react';
import { BiHide, BiShow, BiLoaderAlt } from 'react-icons/bi';
import { toast } from 'react-toastify';
// import http from "utils/http";

const AdminSignInForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });
  const [loadingRes, setLoadingRes] = useState(false);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    // if (loginData.email && loginData.password) {
    //   try {
    //     setLoadingRes(true);

    //     const res = await http.post("/auth/login", {
    //       email: loginData.email,
    //       password: loginData.password,
    //     });

    //     console.log(res);
    //     setLoadingRes(false);
    //     toast.success("Signed successfully");
    //     // router.push("/admin-panel/dashboard");
    //   } catch (err) {
    //     setLoadingRes(false);
    //     toast.error(err.response?.data?.message || "Something Went Wrong.");
    //   }
    // }
  };

  const onChangeHandler = (e) => {
    setLoginData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="h-screen bg-zinc-900 flex items-center justify-center px-6">
      <div className="bg-zinc-800 text-white px-3 py-7 sm:p-6 rounded-xl w-96 max-w-full ">
        <h1 className="text-3xl text-center mb-8 text-blue-300 font-bold">
          Sign In Here...
        </h1>
        <form onSubmit={onSubmitHandler}>
          <div className="mb-6">
            <label className="block text-gray-300 mb-2" htmlFor="email">
              Email:
            </label>
            <input
              className="bg-zinc-900 border-none outline-none px-3 py-2 rounded w-full placeholder-zinc-700"
              type="email"
              name="email"
              id="email"
              required
              value={loginData.email}
              placeholder="example@email.com"
              autoFocus={true}
              onChange={onChangeHandler}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-300 mb-2" htmlFor="password">
              Password:
            </label>
            <div className="relative ">
              <input
                className="bg-zinc-900 border-2 border-transparent outline-none pl-3 pr-8 py-2 rounded w-full placeholder-zinc-700 tracking-wider focus:border-2 focus:border-gray-600"
                type={showPassword ? 'text' : 'password'}
                id="pasword"
                name="password"
                required
                placeholder="password"
                value={loginData.password}
                onChange={onChangeHandler}
              />
              <div
                role="button"
                className="absolute top-1/2 right-3 translate-y-[-50%] cursor-pointer"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? <BiShow /> : <BiHide />}
              </div>
            </div>
          </div>
          <button
            role="form"
            disabled={loadingRes}
            className="bg-blue-700 px-5 py-2 w-full rounded-md mt-5 text-center disabled:bg-blue-500 hover:bg-blue-800 active:outline outline-2 outline-gray-400"
          >
            {loadingRes ? (
              <BiLoaderAlt size={'20px'} className="inline animate-spin" />
            ) : (
              'Sign In'
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminSignInForm;
