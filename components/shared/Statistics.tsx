"use client";
import React, { useEffect, useState, useRef } from "react";
import dynamic from "next/dynamic";
import "odometer/themes/odometer-theme-default.css";
import { useAppContext } from "@/lib/context/appContext";
import * as RiIcons from "react-icons/ri";
import Skeleton from "react-loading-skeleton";

const Odometer = dynamic(() => import("react-odometerjs"), { ssr: false });

const Statistics = () => {
  const { statistics } = useAppContext();
  const [displayCounts, setDisplayCounts] = useState<number[]>(() =>
    statistics.map(() => 0)
  );
  const [key, setKey] = useState(0);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const triggerAnimation = () => {
      setKey((prev) => prev + 1);
      setDisplayCounts(statistics.map(() => 0));
      setTimeout(() => {
        setDisplayCounts(statistics.map(({ count }) => count));
      }, 100);
    };

    const currentSectionRef = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          triggerAnimation();
        }
      },
      { threshold: 0.5 }
    );

    if (currentSectionRef) {
      observer.observe(currentSectionRef);
    }

    return () => {
      if (currentSectionRef) {
        observer.unobserve(currentSectionRef);
      }
    };
  }, [statistics]);

  return (
    <section
      ref={sectionRef}
      key={key}
      className="bg-bg-3 py-[60px] border border-border-1 rounded-lg relative overflow-hidden mb-8"
    >
      <div className="grid grid-cols-1 gap-6 md:gap-0 md:grid-cols-2 lg:grid-cols-4">
        {statistics.length > 0 ? (
          statistics.map(({ _id, stats_title, icon_name }, index) => {
            const IconComponent = RiIcons[icon_name as keyof typeof RiIcons];

            return (
              <div key={_id} className="flex-center mb-0 md:mb-7 lg:mb-0">
                <div className="flex flex-col items-center lg:items-start">
                  {IconComponent ? (
                    <IconComponent className="w-6 h-6 text-primary-2" />
                  ) : null}
                  <h2 className="text-neutral-300 font-medium text-[40px] md:text-[50px] my-0 tracking-wider flex gap-2 md:gap-4">
                    <span className="text-neutral-0">
                      <Odometer
                        value={displayCounts[index] || 0}
                        format="(,ddd)"
                        duration={200}
                        style={{ fontFamily: "var(--font-dm-mono)" }}
                      />
                    </span>
                    <span>+</span>
                  </h2>
                  <p className="text-[16px] mb-0 text-neutral-0">
                    {stats_title}
                  </p>
                </div>
              </div>
            );
          })
        ) : (
          <>
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="w-4/5 mx-auto">
                <Skeleton height={25} style={{ marginBottom: "10px" }} />
                <Skeleton height={40} style={{ marginBottom: "10px" }} />
                <Skeleton height={25} />
              </div>
            ))}
          </>
        )}
      </div>

      <div className="absolute top-0 left-0 w-full h-full bg-[url('/static/bg.png')] dark:invert"></div>
    </section>
  );
};

export default Statistics;
