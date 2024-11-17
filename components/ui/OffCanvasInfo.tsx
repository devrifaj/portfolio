import { contactListData, socialLinks } from "@/data";
import React from "react";
import { RiCloseLine } from "react-icons/ri";

interface OffCanvasInfoProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const OffCanvasInfo: React.FC<OffCanvasInfoProps> = ({ isOpen, setIsOpen }) => {
  return (
    <>
      <div
        className={`bg-neutral-1000 h-full p-[30px] fixed left-0 top-0 transition-transform !duration-300 ease-custom-ease overflow-y-scroll w-[340px] z-50 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ scrollbarWidth: "none" }}
      >
        {/* Offcanvas Close Icon Start */}
        <div className="-mt-4 text-right">
          <button
            className="text-primary-2 bg-transparent border-none cursor-pointer text-xl p-0"
            onClick={() => setIsOpen(false)}
          >
            <RiCloseLine size={25} />
          </button>
        </div>
        {/* Offcanvas Close Icon End */}

        {/* Offcanvas Content */}
        <div className="mb-8">
          <h3 className="h3 mb-0">Get in touch</h3>
        </div>

        <div className="border-t border-primary-2 mb-[30px] pt-[25px]">
          {/* Contact Details Start */}
          <div className="mb-[30px]">
            <p className="font-medium mb-8 text-neutral-200 text-base !leading-[26px]">
              I&apos;m always excited to take on new projects and collaborate
              with innovative minds.
            </p>

            {contactListData.map(({ id, mediaName, mediaData }) => (
              <div key={id} className="mb-4">
                <span className="text-neutral-400 text-[19px] capitalize">
                  {mediaName}
                </span>
                <p className="mb-0 overflow-x-scroll" style={{ scrollbarWidth: "none" }}>{mediaData}</p>
              </div>
            ))}
          </div>
          {/* Contact Details End */}

          {/* Social Contacts List Start */}
          <div className="contact-list">
            <p className="text-neutral-400 text-[19px] mb-2">Social</p>
            <div className="md:flex items-center hidden gap-4 text-neutral-0">
              {socialLinks.map(({id, link, icon: Icon}) => (
                <a
                key={id}
                className="transition-all duration-300 hover:text-primary-2"
                href={link}
              >
                <Icon size={18} className="text-xl"/>
              </a>
              ))}
            </div>
          </div>
          {/* Social Contacts List End */}
        </div>
      </div>

      {/* Offcanvas Overlay Start */}
      {isOpen && (
        <div
          className="fixed bg-black top-0 left-0 h-full w-full z-40 transition-all !duration-300 opacity-70"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
      {/* Offcanvas Overlay End */}
    </>
  );
};

export default OffCanvasInfo;
