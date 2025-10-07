"use client";
import React from "react";
import { Spotlight } from "@/components/ui/spotlight";
import CountdownTimer from "@/app/_components/Timer";
import { useRouter } from "next/navigation";

export default function SpotlightPreview() {
  const router = useRouter();

  const handleRegister = () => {
    router.push("/events");
  };

  return (
    <div className="relative flex flex-col items-center min-h-screen w-full antialiased bg-gradient-to-b from-indigo-900 via-black to-gray-900 overflow-y-auto">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-800 to-gray-900 opacity-95 z-0"></div>

      {/* Spotlight */}
      <Spotlight
        className="absolute top-1/4 left-1/2 transform -translate-x-1/2 scale-125 sm:scale-[1.75] lg:scale-[2] blur-xl z-10"
        fill="green"
      />

      {/* Content Section */}
      <div className="relative z-20 w-full max-w-6xl flex flex-col items-center text-center space-y-8 sm:space-y-10 px-6 pt-16 sm:pt-20 pb-12">
        {/* Title */}
        <h1 className="bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-300 font-extrabold text-transparent text-4xl sm:text-5xl lg:text-6xl tracking-tight drop-shadow-lg animate-pulse">
          ADVITIYA 2K25
        </h1>

        {/* Description */}
        <p className="text-gray-300 text-sm sm:text-lg md:text-xl max-w-3xl leading-relaxed drop-shadow-lg">
          <span className="font-semibold text-cyan-400">ADVITIYA 2K25</span> is
          a technology-focused event by the{" "}
          <span className="font-semibold text-purple-300">
            CSE (Data Science) Department
          </span>{" "}
          of <span className="text-teal-400 font-semibold">RGMCET</span>,
          featuring{" "}
          <span className="text-yellow-300 font-semibold">
            coding challenges
          </span>
          , <span className="text-pink-300 font-semibold">Poster Presentations</span>,{" "}
          <span className="text-blue-300 font-semibold">Paper Presentations</span>, and{" "}
          <span className="text-red-300 font-semibold">Web Development</span>. Join us
          to learn and showcase your skills in an immersive and vibrant
          environment.
        </p>

        {/* Register Section */}
        <div className="space-y-2">
          {/* Small Note Above Registration Ends */}
          <p className="text-xs sm:text-sm text-gray-400 font-light italic">
            Hurry up! Limited spots available.
          </p>

          {/* Registration Ends Message */}
          <p className="text-sm sm:text-base md:text-lg text-gray-300 font-medium mb-1">
            Registration ends on{" "}
            <span className="text-yellow-300 font-semibold">
              October 13th at 6 PM
            </span>
          </p>

          {/* Register Button */}
          <button
            onClick={handleRegister}
            className="px-6 sm:px-8 py-1 sm:py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold text-sm sm:text-lg rounded-lg shadow-lg hover:scale-105 transition-transform"
          >
            Register Here
          </button>
        </div>
      </div>

      {/* Countdown Timer Section */}
      <div className="relative z-20 w-full px-4 py-6 rounded-lg bg-gray-800 bg-opacity-20 flex flex-col items-center">
        <h3 className="text-lg sm:text-xl md:text-2xl text-pink-400 font-semibold mb-4">
          Event Countdown
        </h3>
        <CountdownTimer targetDate="2025-10-15T00:00:00" />
      </div>
    </div>
  );
}
