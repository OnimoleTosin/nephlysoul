// 'use client';

// import { useState } from 'react';
// import { auth } from '@/lib/firebase'; 
// import { createUserWithEmailAndPassword, signInWithEmailAndPassword,} from 'firebase/auth';
// import { useRouter } from 'next/navigation';

// export default function AuthPage() {
//   const router = useRouter();
//   const [isLogin, setIsLogin] = useState(false);
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');

//     try {
//       if (isLogin) {
//         // Login mode
//         await signInWithEmailAndPassword(auth, email, password);
//       } else {
//         // Sign-up mode
//         await createUserWithEmailAndPassword(auth, email, password);
//       }
//       router.push('/dashboard'); // redirect after success
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   return (
//     <main className="max-w-md mx-auto p-4">
//       <h2 className="text-xl font-bold mb-4">
//         {isLogin ? 'Login' : 'Sign Up'}
//       </h2>

//       <form onSubmit={handleSubmit} className="flex flex-col gap-4">
//         <input
//           type="email"
//           placeholder="Email"
//           className="border px-3 py-2"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />

//         <input
//           type="password"
//           placeholder="Password"
//           className="border px-3 py-2"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />

//         <button type="submit" className="bg-blue-600 text-white py-2 rounded">
//           {isLogin ? 'Log In' : 'Sign Up'}
//         </button>

//         {error && <p className="text-red-600 text-sm">{error}</p>}
//       </form>

//       <p className="mt-4 text-sm text-center">
//         {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
//         <button
//           type="button"
//           className="text-blue-600 underline"
//           onClick={() => setIsLogin(!isLogin)}
//         >
//           {isLogin ? 'Sign Up' : 'Log In'}
//         </button>
//       </p>
//     </main>
//   );
// }


'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { FaExclamationCircle } from 'react-icons/fa';

export default function AuthPage() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem('currentUser');
    if (user) router.push('/');
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    const users = JSON.parse(localStorage.getItem('users')) || [];

    if (isLogin) {
      const user = users.find(u => u.email === email && u.password === password);
      if (user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        router.push('/'); // ✅ LOGIN redirects to homepage
      } else {
        setError('Invalid email or password');
      }
    } else {
      const exists = users.find(u => u.email === email);
      if (exists) {
        setError('User already exists');
        return;
      }

      const newUser = { firstName, lastName, email, password };
      users.push(newUser);
      localStorage.setItem('users', JSON.stringify(users));
      localStorage.setItem('currentUser', JSON.stringify(newUser));
      router.push('/OTP'); // ✅ SIGNUP redirects to OTP
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Left image side (desktop only) */}
      <div className="hidden md:block w-1/2 relative">
        <Image
          src="/assets/Auth.png"
          alt="Group of people"
          fill
          className="object-cover"
        />
      </div>

      {/* Right form area */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-[#f6f8fb] px-4">
        <div className="bg-[#f6f8fb] flex flex-col w-full max-w-md relative space-y-6 rounded-lg">

          {/* Spinner logo */}
          <div className="flex justify-center items-center space-x-2">
            <div className="w-[48px] h-[48px] border-t-transparent rounded-full animate-spin border-2 border-black"></div>
            <div className="h-[12px] w-[108px] bg-black rounded-[8px]" />
          </div>

          {/* Switch button top-right */}
          <div className="absolute top-4 right-4 text-sm">
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-sm cursor-pointer text-[#3566A0] hover:text-black-600"
            >
              {isLogin ? 'Sign up' : 'Sign in'}
            </button>
          </div>

          <h2 className="text-2xl font-semibold text-gray-800">
            {isLogin ? 'Sign in' : 'Sign up'}
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <>
                <div>
                  <label className="block font-medium text-black">First Name</label>
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full px-4 py-3 border rounded-md text-black border-black bg-white"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label className="block font-medium text-black">Last Name</label>
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full px-4 py-3 border rounded-md text-black border-black bg-white"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                </div>
              </>
            )}

            <div>
              <label className="block font-medium text-black">Email</label>
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 border rounded-md text-black border-black bg-white"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="relative">
              <label className="block font-medium text-black">Password</label>
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                className="w-full px-4 py-3 border rounded-md text-black border-black bg-white pr-10"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <div
                className="absolute top-[38px] right-3 cursor-pointer text-gray-600"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
              </div>
            </div>

            {isLogin && (
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 text-black">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded-full border border-black accent-blue-600"
                  />
                  Remember
                </label>
                <a href="#" className="text-blue-600">Forgot Password?</a>
              </div>
            )}

            {error && <p className="flex text-red-600 text-sm"><FaExclamationCircle size={18} /> {error}</p>}

            <button
              type="submit"
              className="w-full bg-[#3566A0] cursor-pointer text-white font-semibold py-2 rounded-md hover:bg-[#2c5384]"
            >
              {isLogin ? 'Sign In' : 'Sign Up'}
            </button>
          </form>

          <div className="flex items-center">
            <hr className="flex-grow border-black" />
            <span className="mx-3 text-sm text-black">or</span>
            <hr className="flex-grow border-black" />
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <button className="bg-white flex items-center justify-center w-full border py-2 rounded-md text-black gap-2">
              <Image src="/assets/Google-icon.png" alt="Google" width={20} height={20} />
              Continue with Google
            </button>
            <button className="bg-white flex items-center justify-center w-full h-11 border py-2 rounded-md gap-2 text-black">
              <Image src="/assets/Facebook-icon.png" alt="Facebook" width={20} height={20} />
              Continue with Facebook
            </button>
          </div>

          <p className="text-xs text-center text-black">
            By signing up, you agree to Terms of Service
          </p>
        </div>
      </div>
    </div>
  );
}
