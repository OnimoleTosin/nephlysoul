'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function OTPPage() {
  const router = useRouter();
  const [timer, setTimer] = useState(30);

  // Countdown for resend OTP
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
      <div className="p-4 px-[40px] shadow-md bg-[#FAFAFA] font-sans">
        <div className="flex  items-center space-x-2">
          <div className="w-[48px] h-[48px] bg-black rounded-full "></div>
          <div className="h-[12px] w-[108px] bg-black rounded-[8px] "></div>
        </div>
      </div>
      <div className="min-h-screen flex items-center  justify-center bg-blue-50">
        <div className="mb-[400px] w-full max-w-md text-center">
          
          <h2 className="text-[24px] font-bold mb-4 text-[#645674]">OTP Verification</h2>
          <p className="text-sm text-[#333333] mb-15">Input the 6-digit code that was sent to <span className="font-medium">johnxyz@email.com</span></p>

          <div className='space-y-4'>
            <input
              type="text"
              maxLength={6}
              className="w-full px-4 py-3 border mb-10 rounded-md text-black border-[#A1A1A1] bg-white"
              placeholder="000000"
            />

            <button
              onClick={navigate}
              className="w-full bg-[#3566A0] cursor-pointer transition-transform duration-300 hover:scale-102 text-white font-semibold py-2 rounded-md hover:bg-[#2c5384]">
              Continue
            </button>

            <p className="text-sm text-black">
              Didn’t receive OTP? Resend in <span className="font-bold text-[#3566A0]">{`00:${timer.toString().padStart(2, '0')}`}</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

