import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <div className="bg-black text-white py-4">
      <div className="text-center">
        <p className="text-sm">&copy; 2025 Design and Developed by <Link className='font-bold' href='https://codewithshabbir.vercel.app/'>Muhammad Shabbir</Link></p>
      </div>
    </div>
  );
};

export default Footer;