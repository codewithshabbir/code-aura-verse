"use client";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex px-24 py-6 shadow-lg justify-center">
      <div>
        <Link href="/">
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 tracking-tight">
            Code Aura Verse
          </h1>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
