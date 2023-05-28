import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useForm } from "react-hook-form";

export default function Resister() {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  // const handleResister = (event) => {
  //   event.preventDefault();
  //   const form = event.target;
  //   const name = form.name.value;
  //   const email = form.name.value;
  //   const password = form.name.value;
  //   createUser(email, password)
  //     .then((result) => {
  //       const loggedUser = result.user;
  //       console.log(loggedUser);
  //     })
  //     .catch((error) => console.log(error.message));
  // };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data.name);
    createUser(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;
        updateUserProfile(data.name);
        console.log(loggedUser);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  console.log(watch("example"));

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                name="name"
                className="input input-bordered"
                {...register("name", { required: true })}
              />
              {errors.name && <span>This field is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                {...register("email")}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                {...register("password")}
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Resister</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
