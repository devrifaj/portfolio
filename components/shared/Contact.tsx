import { contactListData } from "@/data";
import Link from "next/link";
import React from "react";
import { RiArrowRightUpLine } from "react-icons/ri";

const Contact = () => {
  return (
    <section id="contact" className="relative pb-[60px] overflow-hidden">
      <div className="lg:flex items-center">
        {/* Form part */}
        <div className="lg:w-7/12 pb-8 lg:pb-0">
          <div className="relative">
            <div className="relative z-20">
              <h3 className="text-primary-2 mb-4">Let’s connect</h3>

              {/* Form Start */}
              <form action="#">
                <div className="grid grid-cols-2 gap-4">
                  {/* Name */}
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Your name"
                    aria-label="username"
                  />

                  {/* Phone */}
                  <input
                    type="text"
                    className="form-control"
                    id="phone"
                    name="phone"
                    placeholder="Phone"
                    aria-label="phone"
                  />

                  {/* Email */}
                  <input
                    type="text"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Email"
                    aria-label="email"
                  />

                  {/* Subject */}
                  <input
                    type="text"
                    className="form-control"
                    id="subject"
                    name="subject"
                    placeholder="Subject"
                    aria-label="subject"
                  />

                  {/* Text area */}
                  <div className="col-span-2">
                    <textarea
                      className="form-control !min-h-[205px]"
                      id="message"
                      name="message"
                      placeholder="Message"
                      aria-label="With textarea"
                    ></textarea>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="group flex items-center gap-2 text-neutral-1000 bg-primary-2 mt-4 transition-all duration-300 ease-in-out text-[14px] font-bold leading-[14px] font-secondary px-3 md:px-6 py-3 md:py-4 text-center rounded-lg overflow-hidden"
                >
                  Send Message
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
              {/* Form End */}
            </div>
            <div className="z-0 bg-primary-dark rectangle-bg z-1 rounded-3"></div>
          </div>
        </div>

        {/* Contacts list */}
        <div className="lg:w-5/12 flex flex-col lg:pl-16">
          {contactListData.map(
            ({ id, mediaName, mediaData, link, icon: Icon }) => (
              <Link key={id} href={link} target="_blank">
                <div className="items-center mb-4 relative inline-flex">
                  <div className="inline-block">
                    <div className="icon-flip flex-nowrap inline-flex items-center justify-center text-center align-middle w-12 sm:w-16 h-12 sm:h-16 leading-[4rem] border border-border-1 rounded-lg bg-bg-3">
                      <Icon size={26} className="text-primary-2 w-[20px] sm:w-[26px]" />
                    </div>
                  </div>
                  <div className="pl-4 h-full">
                    <span className="text-neutral-400 text-[16px] capitalize">
                      {mediaName}
                    </span>
                    <h6 className="mb-0 text-[18px] sm:text-[20px]">{mediaData}</h6>
                  </div>
                </div>
              </Link>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
