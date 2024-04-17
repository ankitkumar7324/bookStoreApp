import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <div className="flex h-screen items-center justify-center text-slate-100">
      <div className="bg-base-900 ">
        <div className="modal-box bg-slate-800 p-5 shadow-md border-[1px] border-slate-400 rounded-lg w-[400px]">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </Link>

            <h3 className="font-bold text-lg">SignUp</h3>
            {/* Name */}
            <div className="mt-3 space-y-2">
              <span>Name</span>
              <br />
              <input
                type="text"
                placeholder="Enter your fullName"
                className="bg-slate-200 w-4/5 px-3 py-2 rounded-md border-slate-100 outline-none text-black font-medium"
                {...register("name", { required: true })}
              />
              <br />
              {errors.name && (
                <span className="text-red-600 text-sm">
                  This field is required
                </span>
              )}
            </div>
            {/* Email */}
            <div className="mt-4 space-y-2">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-slate-200 w-4/5 px-3 py-2 rounded-md border-slate-100 outline-none text-black font-medium"
                {...register("email", { required: true })}
              />
              <br />
              {errors.email && (
                <span className="text-red-600 text-sm">
                  This field is required
                </span>
              )}
            </div>
            {/* password */}
            <div className="mt-6 space-y-2">
              <span>Password</span>
              <br />
              <input
                type="password"
                placeholder="Enter your password"
                className="bg-slate-200 w-4/5 px-3 py-2 rounded-md border-slate-100 outline-none text-black font-medium"
                {...register("password", { required: true })}
              />
              <br />
              {errors.password && (
                <span className="text-red-600 text-sm">
                  This field is required
                </span>
              )}
            </div>
            {/* button */}
            <div className="flex justify-around mt-6 items-center space-x-16">
              <button
                className="px-5 rounded-md
           py-2 bg-pink-500  hover:bg-pink-700 duration-200"
              >
                SignUp
              </button>
              <p>
                Have Account?&nbsp;
                <button
                  className="underline text-blue-500 cursor-pointer"
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                >
                  LogIn
                </button>
                <Login />
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
