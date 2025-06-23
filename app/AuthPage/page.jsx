'use client';

import { useState } from 'react';
import { auth } from '@/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword,} from 'firebase/auth';
import { useRouter } from 'next/navigation';

export default function AuthPage() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      if (isLogin) {
        // Login mode
        await signInWithEmailAndPassword(auth, email, password);
      } else {
        // Sign-up mode
        await createUserWithEmailAndPassword(auth, email, password);
      }
      router.push('/dashboard'); // redirect after success
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <main className="max-w-md mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">
        {isLogin ? 'Login' : 'Sign Up'}
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="Email"
          className="border px-3 py-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="border px-3 py-2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit" className="bg-blue-600 text-white py-2 rounded">
          {isLogin ? 'Log In' : 'Sign Up'}
        </button>

        {error && <p className="text-red-600 text-sm">{error}</p>}
      </form>

      <p className="mt-4 text-sm text-center">
        {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
        <button
          type="button"
          className="text-blue-600 underline"
          onClick={() => setIsLogin(!isLogin)}
        >
          {isLogin ? 'Sign Up' : 'Log In'}
        </button>
      </p>
    </main>
  );
}
