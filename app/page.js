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

export default function AuthPage() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const user = localStorage.getItem('currentUser');
    if (user) router.push('/HomePage');
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    const users = JSON.parse(localStorage.getItem('users')) || [];

    if (isLogin) {
      const user = users.find(u => u.email === email && u.password === password);
      if (user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        router.push('/HomePage');
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
      router.push('/HomePage');
    }
  };

  return (
    <div className="flex min-h-screen p-10">
      {/* LEFT: IMAGE */}
      <div className="hidden md:block w-1/2 relative">
        <Image
          src="/assets/Auth.png" // your image in /public folder
          alt="Group of people"
          fill
          className="object-cover"
        />
      </div>

      {/* RIGHT: FORM */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-[#f6f8fb]">
        <div className="bg-white rounded-xl shadow-md w-full max-w-md p-8 relative">
          {/* Top right toggle */}
          <div className="absolute top-4 right-4 text-sm">
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-blue-500 font-medium"
            >
              {isLogin ? 'Sign up' : 'Sign in'}
            </button>
          </div>

          <h2 className="text-2xl font-semibold text-center mb-6 text-black">
            {isLogin ? 'Sign in' : 'Sign up'}
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <>
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full px-4 py-3 border rounded-md text-black border-1 border-black"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full px-4 py-3 border rounded-md text-black border-1 border-black"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </>
            )}

            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 border rounded-md text-black border-1 border-black"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 border rounded-md text-black border-1 border-black"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            {isLogin && (
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 text-black">
                  <input type="checkbox" className="accent-blue-600 " />
                  Remember
                </label>
                <a href="#" className="text-blue-600">Forgot Password?</a>
              </div>
            )}

            {error && <p className="text-red-600 text-sm">{error}</p>}

            <button
              type="submit"
              className="w-full bg-[#3566A0] text-white py-3 rounded-md font-semibold"
            >
                           {isLogin ? 'Sign In' : 'Sign Up'}

            </button>
          </form>

          {/* Divider */}
          <div className="my-4 flex items-center ">
            <hr className="flex-grow border-black" />
            <span className="mx-3 text-sm text-black">or</span>
            <hr className="flex-grow border-black" />
          </div>

          {/* Social Buttons */}
          <div className="space-y-3">
            <button className="w-full flex items-center justify-center gap-2 border py-2 rounded-md text-black">
              <Image src="/assets/Google-icon.png" alt="Google" width={20} height={20} />
              Continue with Google
            </button>
            <button className="w-full flex items-center justify-center gap-2 border py-2 rounded-md text-black">
              <Image src="/assets/Facebook-icon.png" alt="Facebook" width={20} height={20} />
              Continue with Facebook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
