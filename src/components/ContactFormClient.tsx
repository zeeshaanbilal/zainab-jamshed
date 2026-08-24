"use client";

import React, { useState } from 'react';
import { submitContactMessage } from '@/app/actions/contactActions';

type ContactFormProps = {
  namePlaceholder: string;
  emailPlaceholder: string;
  subjectPlaceholder: string;
  messagePlaceholder: string;
  sendButton: string;
};

export default function ContactFormClient({
  namePlaceholder,
  emailPlaceholder,
  subjectPlaceholder,
  messagePlaceholder,
  sendButton
}: ContactFormProps) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg(null);
    setSuccess(false);

    const formData = new FormData(e.currentTarget);
    const result = await submitContactMessage(formData);

    if (result.error) {
      setErrorMsg(result.error);
    } else if (result.success) {
      setSuccess(true);
      (e.target as HTMLFormElement).reset();
    }
    
    setLoading(false);
  };

  return (
    <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
      {success && (
        <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-md shadow-sm">
          <p className="text-green-700 font-medium text-sm">Message sent successfully!</p>
        </div>
      )}
      
      {errorMsg && (
        <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-md shadow-sm">
          <p className="text-red-700 font-medium text-sm">{errorMsg}</p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <input 
          type="text"
          name="name"
          required
          placeholder={namePlaceholder} 
          className="w-full px-4 py-3.5 rounded-lg border border-gray-200 bg-[#FAFAFA] text-[15px] focus:outline-none focus:border-[#7749F8] focus:ring-1 focus:ring-[#7749F8] transition-colors placeholder:text-gray-400"
        />
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <svg className="h-[18px] w-[18px] text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <input 
            type="email"
            name="email"
            required
            placeholder={emailPlaceholder} 
            className="w-full pl-11 pr-4 py-3.5 rounded-lg border border-gray-200 bg-[#FAFAFA] text-[15px] focus:outline-none focus:border-[#7749F8] focus:ring-1 focus:ring-[#7749F8] transition-colors placeholder:text-gray-400"
          />
        </div>
      </div>
      
      <input 
        type="text"
        name="subject"
        required
        placeholder={subjectPlaceholder} 
        className="w-full px-4 py-3.5 rounded-lg border border-gray-200 bg-[#FAFAFA] text-[15px] focus:outline-none focus:border-[#7749F8] focus:ring-1 focus:ring-[#7749F8] transition-colors placeholder:text-gray-400"
      />
      
      <textarea 
        name="message"
        required
        placeholder={messagePlaceholder} 
        rows={5}
        className="w-full px-4 py-3.5 rounded-lg border border-gray-200 bg-[#FAFAFA] text-[15px] focus:outline-none focus:border-[#7749F8] focus:ring-1 focus:ring-[#7749F8] transition-colors placeholder:text-gray-400 resize-none"
      ></textarea>
      
      <div className="flex justify-end mt-2">
        <button 
          type="submit" 
          disabled={loading}
          className="bg-[#7749F8] hover:bg-[#59168B] disabled:opacity-70 disabled:cursor-not-allowed text-white font-medium py-[14px] px-8 rounded-lg transition-colors duration-300"
        >
          {loading ? 'Sending...' : sendButton}
        </button>
      </div>
    </form>
  );
}
