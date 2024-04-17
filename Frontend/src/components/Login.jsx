import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <div className="text-white ">
      <dialog id="my_modal_3" className="modal bg-base-900">
        <div className="modal-box bg-slate-800">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </Link>

            <h3 className="font-bold text-lg">Login</h3>
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
            <div className="mt-10 space-y-2">
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
            <div className="flex justify-around mt-8 items-center">
              <button
                className="px-5 rounded-md
           py-2 bg-pink-500  hover:bg-pink-700 duration-200"
              >
                Login
              </button>
              <p>
                Not registered?&nbsp;
                <Link
                  to="/signup"
                  className="underline text-blue-500 cursor-pointer"
                >
                  SignUp
                </Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
