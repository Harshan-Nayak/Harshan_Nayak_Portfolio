"use client";

import React from "react";
import { motion } from "framer-motion";

export default function WhatsAppFAB() {
  const phoneNumber = "917989628048";
  const defaultMessage = encodeURIComponent("Hi Harshan, I'd like to connect regarding an opportunity / project.");

  return (
    <motion.a
      href={`https://wa.me/${phoneNumber}?text=${defaultMessage}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Harshan on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-5 right-5 z-50 w-12 h-12 rounded-full bg-black text-white flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,0.4)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.5)] border-2 border-black transition-all cursor-pointer group"
      title="Chat on WhatsApp (+91 7989628048)"
    >
      {/* Official WhatsApp Icon matching screenshot */}
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="text-white group-hover:scale-105 transition-transform"
      >
        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.062-2.115-.527-1.705-.705-2.812-2.45-2.897-2.564-.085-.114-.689-.915-.689-1.745s.434-1.238.587-1.408c.153-.17.334-.213.447-.213.112 0 .225.001.323.006.104.005.244-.04.382.291.144.344.49 1.192.533 1.28.043.088.072.19.014.305-.058.115-.088.188-.175.291-.087.103-.183.23-.261.309-.09.09-.184.188-.079.369.105.181.468.772 1.004 1.249.691.614 1.274.805 1.455.895.181.09.288.077.394-.044.106-.121.454-.528.576-.708.121-.18.244-.15.408-.09.164.06 1.042.492 1.22.582.179.09.297.135.341.21.044.075.044.436-.1.841zM12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.66 1.434 5.178L2 22l4.982-1.39A9.957 9.957 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" />
      </svg>
    </motion.a>
  );
}
