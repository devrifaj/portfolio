import { contactListData } from "@/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CooperationContacts = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-4">
      {/* Circle Profile Start */}
      <div>
        <div className="w-[124px] h-[124px] rounded-full border border-border-1 relative z-0">
          <div className="w-[82px] h-[82px] rounded-full border border-border-1 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
              <Image
                className="w-full h-full rounded-full"
                width={40}
                height={40}
                src="/avatar.png"
                alt="rifajul"
              />
              <svg
                className="text-primary-2 absolute bottom-0 end-0"
                xmlns="http://www.w3.org/2000/svg"
                width="9"
                height="9"
                viewBox="0 0 5 6"
                fill="none"
              >
                <circle cx="2.5" cy="3" r="2.5" fill="#A8FF53"></circle>
              </svg>
            </div>
          </div>
        </div>
      </div>
      {/* Circle Profile End */}

      {/* Contacts List Start */}
      <div className="flex flex-col gap-2">
        {contactListData
          .filter((contact) => contact.mediaName !== "address") // Exclude Address
          .map(({ id, mediaName, mediaData, link, icon: Icon }) => (
            <Link
              key={id}
              href={link}
              className="flex gap-3 text-neutral-0 group"
            >
              <Icon
                size={24}
                className="text-neutral-0 group-hover:text-primary-2"
              />
              <span className="text-neutral-300">
                [{mediaName === "phone number" ? "phone" : mediaName}]
                  <span className="text-secondary-2"> {mediaData}</span>
              </span>
            </Link>
          ))}
      </div>

      {/* Contacts List End */}
    </div>
  );
};

export default CooperationContacts;
