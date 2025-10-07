"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Timer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = new Date(targetDate) - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timeKeys = [
    { key: "days", label: "Days" },
    { key: "hours", label: "Hours" },
    { key: "minutes", label: "Minutes" },
    { key: "seconds", label: "Seconds" },
  ];

  return (
    <div className="flex flex-col items-center rounded-lg p-4 sm:p-6 w-full max-w-3xl mx-auto">
      {/* Header */}
      <motion.h1
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-2xl md:text-3xl font-bold text-white bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent mb-6 text-center"
      >
        Countdown to October 15, 2025
      </motion.h1>

      {/* Timer - Centered */}
      <div className="flex gap-4 sm:gap-6 md:gap-8 justify-center w-full">
        {timeKeys.map((item, index) => (
          <motion.div
            key={item.key}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="flex flex-col items-center justify-center bg-gradient-to-br from-indigo-600 to-purple-800 hover:from-pink-600 hover:to-purple-500 rounded-lg p-4 sm:p-6 w-20 sm:w-24 h-32 transform transition-transform duration-300 hover:scale-105"
          >
            <div className="text-3xl sm:text-4xl font-extrabold text-white">
              {timeLeft[item.key] < 10
                ? `0${timeLeft[item.key]}`
                : timeLeft[item.key]}
            </div>
            <div className="text-xs sm:text-sm text-gray-200 uppercase mt-2 tracking-wide">
              {item.label}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer Message */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="text-gray-300 text-sm md:text-base mt-6 text-center"
      >
        {timeLeft.days + timeLeft.hours + timeLeft.minutes + timeLeft.seconds === 0
          ? "The countdown has ended!"
          : "Mark your calendars and get ready for the big day!"}
      </motion.p>
    </div>
  );
};

export default Timer;
