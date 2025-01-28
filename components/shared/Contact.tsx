"use client";

import Link from "next/link";
import ContactForm from "../forms/ContactForm";
import { useAppContext } from "@/lib/context/appContext";
import Skeleton from "react-loading-skeleton";
import { useState } from "react";
import { RiFileCopyLine } from "react-icons/ri";
import { HiCheck } from "react-icons/hi";

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
        {/* Form part */}
        <div className="lg:w-7/12 pb-8 lg:pb-0">
          <h3 className="text-primary-2 mb-4">Let’s connect</h3>
          <ContactForm />
        </div>

        {/* Contacts list */}
        <div className="lg:w-5/12 flex flex-col lg:pl-16">
          {combinedContactListData.length > 0 ? (
            combinedContactListData.map(
              ({ id, mediaName, mediaData, link, icon: Icon }) => (
                <div key={id} className="mb-4">
                  {mediaName === "email" ? (
                    <div className="flex items-center gap-4">
                      <div className="icon-flip flex items-center justify-center w-12 h-12 border border-border-1 rounded-lg bg-bg-3">
                        <Icon className="text-primary-2" size={26} />
                      </div>
                      <div className="flex-1">
                        <span className="text-neutral-400 text-sm capitalize">
                          {mediaName}
                        </span>
                        <h6 className="text-lg break-all">{mediaData}</h6>
                      </div>
                      {/* Copy Button */}
                      <button
                        onClick={() => handleCopy(id, mediaData)}
                        className={`flex items-center justify-center w-10 h-10 rounded-lg border border-border-1 text-primary-2 bg-bg-3 ${
                          copiedId === id
                            ? "bg-bg-3"
                            : "hover:bg-bg-5 hover:text-neutral-0"
                        }`}
                        aria-label="Copy email"
                        title="Copy email"
                      >
                        {copiedId === id ? <HiCheck size={20}/> : <RiFileCopyLine size={20} />}
                      </button>
                    </div>
                  ) : (
                    <Link href={link} target="_blank" className="flex items-center gap-4">
                      <div className="icon-flip flex items-center justify-center w-12 h-12 border border-border-1 rounded-lg bg-bg-3">
                        <Icon className="text-primary-2" size={26} />
                      </div>
                      <div>
                        <span className="text-neutral-400 text-sm capitalize">
                          {mediaName}
                        </span>
                        <h6 className="text-lg break-all">{mediaData}</h6>
                      </div>
                    </Link>
                  )}
                </div>
              )
            )
          ) : (
            <Skeleton count={4} height={65} style={{ marginBottom: 15 }} />
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
