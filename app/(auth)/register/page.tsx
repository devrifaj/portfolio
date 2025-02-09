"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
// import toast from "react-hot-toast";
// import { registerUser } from "@/lib/actions/auth.action";
// import { useRouter } from "next/navigation";
import { loginFormSchema } from "@/lib/validator";

const Register = () => {
  // const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
  });

  async function onSubmit(values: z.infer<typeof loginFormSchema>) {
    /* const res = await registerUser(values.email, values.password);

    if (res?.error) {
      toast.error(res.error);
    } else {
      toast.success("User created successfully");
      router.push("/login");
    } */

      console.log(values)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-96 mx-auto flex flex-col justify-center h-screen"
    >
      <h2 className="text-primary-2 text-center mb-8">Register</h2>

      <input
        {...register("email")}
        className="form-control"
        placeholder="Enter Email"
      />
      {errors.email && (
        <p className="form-validation-error">{errors.email.message}</p>
      )}

      <input
        {...register("password")}
        type="password"
        className="form-control"
        placeholder="Enter Password"
      />
      {errors.password && (
        <p className="form-validation-error">{errors.password.message}</p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="form-button w-full"
      >
        {isSubmitting ? "Registering..." : "Register"}
      </button>
    </form>
  );
};

export default Register;
