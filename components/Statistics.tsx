import { statistics } from "@/data";
import React from "react";

const Statistics = () => {
  return (
    <section className="bg-bg-3 py-[60px] border border-border-1 rounded-lg relative overflow-hidden">
        <div className="grid grid-cols-1 gap-4 md:gap-0 md:grid-cols-2 lg:grid-cols-4">
          {/* statistics items start */}
          {statistics.map(({ id, count, countTag, icon: Icon }) => (
            <div key={id} className="flex-center">
              <div className="flex flex-col items-center lg:items-start">
                <Icon size={24} className="text-primary-2" />
                <h2 className="text-neutral-300 font-medium text-[50px] my-0 tracking-wider">
                  <span className="text-neutral-0 ">{count}</span>
                  <span className="">+</span>
                </h2>
                <p className="text-[16px] mb-0 text-neutral-0">{countTag}</p>
              </div>
            </div>
          ))}
          {/* statistics items end */}
        </div>

      {/* bg image start */}
      <div className="absolute top-0 left-0 w-full h-full dark:invert" style={{ backgroundImage: 'url("/static/bg.png")' }}></div>
      {/* bg image end */}
    </section>
  );
};

export default Statistics;