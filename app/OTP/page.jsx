'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Logo from '@/components/logo';

export default function OTPPage() {
  const router = useRouter();
  const [timer, setTimer] = useState(30);

  useEffect(() => {
    if (timer > 0) {
      const countdown = setInterval(() => setTimer((t) => t - 1), 1000);
      return () => clearInterval(countdown);
    }
  }, [timer]);

  const navigate = () => {
    router.push('/SetUp');
  };

  return (
    <>
      {/* Top Header */}
      <div className="p-4 px-6 sm:px-10 shadow-md bg-[#FAFAFA] font-sans">
        <div className="flex items-center space-x-2">
          <Logo/>
          {/* <div className="w-10 h-10 bg-black rounded-full"></div>
          <div className="h-3 w-28 bg-black rounded-md"></div> */}
        </div>
      </div>

      {/* Main Content */}
      <div className="min-h-screen flex items-center justify-center bg-blue-50 px-4 sm:px-6 md:px-8">
        <div className="w-full max-w-sm sm:max-w-md md:max-w-lg text-center space-y-6 py-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#645674]">OTP Verification</h2>
          
          <p className="text-sm sm:text-base text-[#333333]">
            Input the 6-digit code sent to <span className="font-medium">johnxyz@email.com</span>
          </p>

          <input
            type="text"
            maxLength={6}
            className="w-full px-4 py-3 border rounded-md text-black border-[#A1A1A1] bg-white text-center tracking-widest text-xl sm:text-2xl"
            placeholder="000000"
          />

          <button
            onClick={navigate}
            className="w-full bg-[#3566A0] text-white font-semibold py-3 rounded-md transition-transform duration-300 hover:scale-105 hover:bg-[#2c5384]">
            Continue
          </button>

          <p className="text-sm text-black">
            Didn’t receive OTP? Resend in{' '}
            <span className="font-bold text-[#3566A0]">
              00:{timer.toString().padStart(2, '0')}
            </span>
          </p>
        </div>
      </div>
    </>
  );
}
