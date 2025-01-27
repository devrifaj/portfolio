"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { RiArrowRightUpLine } from "react-icons/ri";
import { contactFormSchema } from "@/lib/validator";
import toast from "react-hot-toast";
import { sendMail } from "@/lib/send-mail";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
  });

  async function onSubmit(values: z.infer<typeof contactFormSchema>) {
    try {
      await sendMail({
        ...values,
        phone: values.phone || "",
      });
      reset();
      toast.success("Message sent successfully!");
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("Failed to send message. Please try again later.");
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-2 gap-4">
        {/* Name */}
        <div>
          <input
            {...register("name")}
            className="form-control"
            placeholder="Your name"
          />
          {errors.name && (
            <p className="form-validation-error">{errors.name.message}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <input
            {...register("phone")}
            className="form-control"
            placeholder="Phone (optional)"
          />
          {errors.phone && (
            <p className="form-validation-error">{errors.phone.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <input
            {...register("email")}
            className="form-control"
            placeholder="Email"
          />
          {errors.email && (
            <p className="form-validation-error">{errors.email.message}</p>
          )}
        </div>

        {/* Subject */}
        <div>
          <input
            {...register("subject")}
            className="form-control"
            placeholder="Subject"
          />
          {errors.subject && (
            <p className="form-validation-error">{errors.subject.message}</p>
          )}
        </div>

        {/* Text area */}
        <div className="col-span-2">
          <textarea
            {...register("message")}
            className="form-control !min-h-[205px]"
            placeholder="Message"
          />
          {errors.message && (
            <p className="form-validation-error">{errors.message.message}</p>
          )}
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="group flex items-center gap-2 text-neutral-1000 bg-primary-2 mt-4 transition-all duration-300 ease-in-out text-[14px] font-bold leading-[14px] font-secondary px-3 md:px-6 py-3 md:py-4 text-center rounded-lg overflow-hidden disabled:opacity-50 disabled:pointer-events-none"
      >
        {isSubmitting ? "Sending Message" : "Send Message"}
        <span className="relative inline-block">
          <RiArrowRightUpLine
            size={24}
            className="transition-transform duration-400 ease-in-out group-hover:animate-hover-icon-exit absolute w-[20px] md:w-[24px]"
          />
          <RiArrowRightUpLine
            size={24}
            className="transition-transform duration-400 ease-in-out group-hover:animate-hover-icon-enter w-[20px] md:w-[24px]"
          />
        </span>
      </button>
    </form>
  );
};

export default ContactForm;
