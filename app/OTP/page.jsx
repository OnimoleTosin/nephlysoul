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

  const skip = () => {
    router.push('/Groupie'); // 👈 change this to where "Skip" should take the user
  };

  return (
    <>
      {/* Top Header */}
      <div className="p-4 px-6 sm:px-10 shadow-md bg-[#FAFAFA] font-sans flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Logo />
        </div>

        {/* Skip Button */}
        <button
          onClick={skip}
          className="text-[#3566A0] font-semibold px-4 py-2 rounded-md border border-[#3566A0] hover:bg-[#3566A0] hover:text-white transition-colors"
        >
          Skip →
        </button>
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
            inputMode="numeric"        // shows number keypad on mobile
            pattern="[0-9]*"           // restricts to digits
            maxLength={6}              // only 6 numbers allowed
            onInput={(e) => {
              e.target.value = e.target.value.replace(/[^0-9]/g, ''); // remove non-numeric
            }}
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
