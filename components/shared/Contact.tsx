import { contactListData } from "@/data";
import Link from "next/link";
import ContactForm from "../forms/ContactForm";

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
              <ContactForm/>
              {/* Form End */}
            </div>
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
