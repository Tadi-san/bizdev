"use client";
import React from "react";
import dynamic from "next/dynamic";
import eng from "./lang"
const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

const achievementsList = [
  {
    metric: eng.metricProjects,
    value: "100",
    postfix: "+",
  },
  {
    prefix: "~",
    metric: eng.metricClients,
    value: "80",
  },
  {
    metric: eng.metricAwards,
    value: "1",
  },
  {
    metric: eng.metricYears,
    value: "2",
  },
];

const AchievementsSection = () => {
  return (
    <div className="py-8 xl:gap-16 w-full">
      <div className="sm:border rounded-md w-full border border-slate-200 py-8 px-16 flex items-center justify-around sm:justify-between">
        {achievementsList.map((achievement, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
            >
              <h2 className="text-black text-4xl font-bold flex flex-row">
                {achievement.prefix}
                <AnimatedNumbers
                  includeComma
                  animateToNumber={parseInt(achievement.value)}
                  locale="en-US"
                  className="text-white text-4xl font-bold"
                  configs={(_, index) => {
                    return {
                      mass: 1,
                      friction: 100,
                      tensions: 140 * (index + 1),
                    };
                  }}
                />
                {achievement.postfix}
              </h2>
              <p className="text-slate-500 text-base">{achievement.metric}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AchievementsSection;
