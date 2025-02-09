"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import toast from "react-hot-toast";
import { loginFormSchema } from "@/lib/validator";
import { useEffect } from "react";

const Login = () => {
  const { data: session } = useSession();
  const router = useRouter();

  // Redirect if already logged in
  useEffect(() => {
    if (session) {
      router.push("/adminProfile");
    }
  }, [session, router]);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
  });

  async function onSubmit(values: z.infer<typeof loginFormSchema>) {
    const response = await signIn("credentials", {
      ...values,
      redirect: false,
    });

    if (response?.error) {
      toast.error(response.error);
    } else {
      toast.success("Logged in successfully");
      router.push("/adminProfile");
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-96 mx-auto flex flex-col justify-center h-screen"
    >
      <h2 className="text-primary-2 text-center mb-8">Login</h2>
      <div className="mb-4">
        <input
          {...register("email")}
          className="form-control"
          placeholder="Enter Email"
        />
        {errors.email && (
          <p className="form-validation-error">{errors.email.message}</p>
        )}
      </div>

      <div className="mb-6">
        <input
          {...register("password")}
          type="password"
          className="form-control"
          placeholder="Enter Password"
        />
        {errors.password && (
          <p className="form-validation-error">{errors.password.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="form-button w-full"
      >
        {isSubmitting ? "Logging in..." : "Login"}
      </button>
    </form>
  );
};

export default Login;
