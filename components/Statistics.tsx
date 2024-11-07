"use client";
import React, { useEffect, useState } from 'react';
import dynamic from "next/dynamic";
import { statistics } from "@/data";
import 'odometer/themes/odometer-theme-default.css';

const Odometer = dynamic(() => import("react-odometerjs"), { ssr: false });

const Statistics = () => {
  const [displayCounts, setDisplayCounts] = useState<number[]>([]);

  useEffect(() => {
    // Delayed update to trigger Odometer animation
    setTimeout(() => {
      setDisplayCounts(statistics.map(({ count }) => count));
    }, 100); // Adjust delay as needed
  }, []);

  return (
    <section className="bg-bg-3 py-[60px] border border-border-1 rounded-lg relative overflow-hidden mb-8">
      <div className="grid grid-cols-1 gap-4 md:gap-0 md:grid-cols-2 lg:grid-cols-4">
        {/* Statistics Items Start */}
        {statistics.map(({ id, countTag, icon: Icon }, index) => (
          <div key={id} className="flex-center">
            <div className="flex flex-col items-center lg:items-start">
              <Icon size={24} className="text-primary-2" />
              <h2 className="text-neutral-300 font-medium text-[50px] my-0 tracking-wider flex gap-6">
                <span className="text-neutral-0">
                    <Odometer
                      value={displayCounts[index] || 0}
                      format="(,ddd)"
                      duration={30000}
                      style={{fontFamily: "var(--font-dm-mono)"}}
                    />
                </span>
                <span>+</span>
              </h2>
              <p className="text-[16px] mb-0 text-neutral-0">{countTag}</p>
            </div>
          </div>
        ))}
        {/* Statistics Items End */}
      </div>

      {/* Background Image */}
      <div
        className="absolute top-0 left-0 w-full h-full dark:invert"
        style={{ backgroundImage: 'url("/static/bg.png")' }}
      ></div>
    </section>
  );
};

export default Statistics;
