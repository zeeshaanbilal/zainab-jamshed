"use client";

import { useActionState } from 'react';
import { login } from '@/app/actions/authActions';
import Link from 'next/link';

export default function LoginPage() {
  const [state, formAction] = useActionState(login, null);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-2xl shadow-xl">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Admin Login
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Enter your password to access the dashboard
          </p>
        </div>
        <form className="mt-8 space-y-6" action={formAction}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="appearance-none rounded-lg relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#7749F8] focus:border-[#7749F8] focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          {state?.error && (
            <div className="text-red-500 text-sm text-center font-medium">
              {state.error}
            </div>
          )}

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-[#7749F8] hover:bg-[#59168B] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#7749F8] transition-colors"
            >
              Sign in
            </button>
          </div>
          
          <div className="text-center mt-4">
            <Link href="/" className="text-sm font-medium text-[#7749F8] hover:text-[#59168B]">
              &larr; Back to Website
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
