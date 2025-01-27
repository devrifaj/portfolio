"use client";
import Link from "next/link";
import ContactForm from "../forms/ContactForm";
import { useAppContext } from "@/lib/context/appContext";
import Skeleton from "react-loading-skeleton";
import { useState } from "react";
import { RiFileCopyLine } from "react-icons/ri";

const Contact = () => {
  const { combinedContactListData } = useAppContext();
  const [copiedId, setCopiedId] = useState<number | null>(null);

  const handleCopy = (id: number, value: string) => {
    navigator.clipboard.writeText(value).then(() => {
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    });
  };

  return (
    <section id="contact" className="relative pb-[60px] overflow-hidden">
      <div className="lg:flex items-center">
        {/* Form part start */}
        <div className="lg:w-7/12 pb-8 lg:pb-0">
          <div className="relative">
            <div className="relative z-20">
              <h3 className="text-primary-2 mb-4">Let’s connect</h3>
              {/* Form */}
              <ContactForm />
            </div>
          </div>
        </div>
        {/* Form part end */}

        {/* Contacts list part */}
        <div className="lg:w-5/12 flex flex-col lg:pl-16">
          {combinedContactListData.length > 0 ? (
            combinedContactListData.map(
              ({ id, mediaName, mediaData, link, icon: Icon }) => (
                <div key={id}>
                  {mediaName === "email" ? (
                    <div className="items-center mb-4 relative inline-flex">
                      <div className="inline-block">
                        <div className="icon-flip flex-nowrap inline-flex items-center justify-center text-center align-middle w-12 sm:w-16 h-12 sm:h-16 leading-[4rem] border border-border-1 rounded-lg bg-bg-3">
                          <Icon
                            size={26}
                            className="text-primary-2 w-[20px] sm:w-[26px]"
                          />
                        </div>
                      </div>
                      <div className="pl-4 h-full flex flex-col sm:flex-row items-center gap-2">
                        <div className="flex-1">
                          <span className="text-neutral-400 text-[16px] capitalize">
                            {mediaName}
                          </span>
                          <h6 className="mb-0 text-[18px] sm:text-[20px] break-all">
                            {mediaData}
                          </h6>
                        </div>
                        {/* Copy Button */}
                        <button
                          onClick={() => handleCopy(id, mediaData)}
                          className={`p-2 rounded-lg border border-border-1 bg-bg-3 ${
                            copiedId === id
                              ? "text-primary-2"
                              : "hover:text-primary-2 transition"
                          }`}
                          title="Copy email"
                        >
                          {copiedId === id ? "Copied!" : <RiFileCopyLine size={20} />}
                        </button>
                      </div>
                    </div>
                  ) : (
                    <Link href={link} target="_blank">
                      <div className="items-center mb-4 relative inline-flex">
                        <div className="inline-block">
                          <div className="icon-flip flex-nowrap inline-flex items-center justify-center text-center align-middle w-12 sm:w-16 h-12 sm:h-16 leading-[4rem] border border-border-1 rounded-lg bg-bg-3">
                            <Icon
                              size={26}
                              className="text-primary-2 w-[20px] sm:w-[26px]"
                            />
                          </div>
                        </div>
                        <div className="pl-4 h-full">
                          <span className="text-neutral-400 text-[16px] capitalize">
                            {mediaName}
                          </span>
                          <h6 className="mb-0 text-[18px] sm:text-[20px] break-all">
                            {mediaData}
                          </h6>
                        </div>
                      </div>
                    </Link>
                  )}
                </div>
              )
            )
          ) : (
            <div>
              <Skeleton count={4} height={65} style={{ marginBottom: 15 }} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;