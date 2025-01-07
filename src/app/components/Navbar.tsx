"use client";
import Link from "next/link";
import React from "react";

const Navbar = () => {
//   const [theme, setTheme] = useState("light");

// const toggleTheme = () => {
//   console.log('hello');
  
// }

//   const toggleTheme = () => {
//     const newTheme = theme === "light" ? "dark" : "light";
//     setTheme(newTheme);
//     localStorage.setItem("theme", newTheme);
//     document.documentElement.classList.toggle("dark", newTheme === "dark");
//   };

  return (
    <div className="flex px-10 py-6 shadow-lg justify-between">
      <div>
        <Link href='/'>
          <h1>Code Aura Verse</h1>
        </Link>
      </div>
      <nav>
        <ul className="flex gap-6">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/Blogs">Blog</Link>
          </li>
          <li>
            <Link href="#">Categories</Link>
          </li>
          <li>
            <Link href="#">Contact</Link>
          </li>
        </ul>
      </nav>
      <div>
        {/* <div
          onClick={toggleTheme}
          className={`relative inline-flex h-6 w-12 cursor-pointer rounded-full transition-colors ${
            theme === "dark" ? "bg-gray-800" : "bg-gray-300"
          }`}
        >
          <span
            className={`absolute left-0 top-0.5 h-5 w-5 transform rounded-full bg-white shadow-md transition-transform ${
              theme === "dark" ? "translate-x-6" : "translate-x-1"
            }`}
          />
        </div> */}
        {/* <div onClick={toggleTheme} className={`relative bg-red-400 h-6 w-12 rounded-full ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-300'}`}>
            <span className="absolute top-0.5 left-0 h-5 w-5 bg-black rounded-full translate-x-1"></span>
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;
