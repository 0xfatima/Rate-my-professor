'use client';

import React from "react";
import { useRouter } from 'next/navigation'; // Use 'next/navigation' for client-side navigation in the app directory

export default function Hero() {
  const router = useRouter();

  const openChatbot = () => {
    router.push('/chat'); // This should match the page where Chat.tsx is rendered
  };

  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url(/hero-bg.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-40 blur"></div>
      <div className="hero-content text-white text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Discover Your Perfect Professor</h1>
          <p className="mb-5">
          Rate, review, and find the best professors for your learning journey.
          </p>
          <button className="btn btn-primary" onClick={openChatbot}>
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
