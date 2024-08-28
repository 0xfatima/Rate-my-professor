import React from "react";

export default function Features() {
  return (
    <section id="#features" className="p-10 bg-base-100 text-base-content">
      <h2 className="text-3xl font-bold text-center text-black mb-8">Key Features</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          className="card bg-neutral text-neutral-content shadow-xl transform transition duration-500 hover:scale-105 hover:bg-accent hover:text-black hover:shadow-2xl"
          aria-label="Rate Professors"
        >
          <div className="card-body">
            <h3 className="card-title flex items-center">
              {/* Replace the placeholder with an actual icon */}
              <span className="mr-2">⭐</span> Rate Professors
            </h3>
            <p>Rate and review professors based on your personal experiences to help others find the best educators.</p>
          </div>
        </div>
        <div
          className="card bg-neutral text-neutral-content shadow-xl transform transition duration-500 hover:scale-105 hover:bg-accent hover:text-black hover:shadow-2xl"
          aria-label="Find Professors"
        >
          <div className="card-body">
            <h3 className="card-title flex items-center">
              {/* Replace the placeholder with an actual icon */}
              <span className="mr-2">🔍</span> Find Professors
            </h3>
            <p>Search for professors by name, department, or course to find reviews and ratings easily.</p>
          </div>
        </div>
        <div
          className="card bg-neutral text-neutral-content shadow-xl transform transition duration-500 hover:scale-105 hover:bg-accent hover:text-black hover:shadow-2xl"
          aria-label="Chat with Support"
        >
          <div className="card-body">
            <h3 className="card-title flex items-center">
              {/* Replace the placeholder with an actual icon */}
              <span className="mr-2">💬</span> Chat with Support
            </h3>
            <p>Get assistance and answers to your questions through our integrated chatbot for a seamless experience.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
