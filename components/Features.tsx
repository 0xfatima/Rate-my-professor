import React from "react";

export default function Features() {
  return (
    <section id="#features" className="p-10 bg-base-100 text-base-content">
      <h2 className="text-3xl font-bold text-center text-black mb-8">Key Features</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          className="card bg-neutral text-neutral-content shadow-xl transform transition duration-500 hover:scale-105 hover:bg-accent hover:text-black hover:shadow-2xl"
          aria-label="Create Flashcards"
        >
          <div className="card-body">
            <h3 className="card-title flex items-center">
              {/* Replace the placeholder with an actual icon */}
              <span className="mr-2">📚</span> Create Flashcards
            </h3>
            <p>Easily create flashcards with text, images, and custom formatting to make learning efficient.</p>
          </div>
        </div>
        <div
          className="card bg-neutral text-neutral-content shadow-xl transform transition duration-500 hover:scale-105 hover:bg-accent hover:text-black hover:shadow-2xl"
          aria-label="Organize Decks"
        >
          <div className="card-body">
            <h3 className="card-title flex items-center">
              {/* Replace the placeholder with an actual icon */}
              <span className="mr-2">🗂</span> Organize Decks
            </h3>
            <p>Organize flashcards into decks by topic, subject, or category for easy retrieval and study.</p>
          </div>
        </div>
        <div
          className="card bg-neutral text-neutral-content shadow-xl transform transition duration-500 hover:scale-105 hover:bg-accent hover:text-black hover:shadow-2xl"
          aria-label="Track Progress"
        >
          <div className="card-body">
            <h3 className="card-title flex items-center">
              {/* Replace the placeholder with an actual icon */}
              <span className="mr-2">📈</span> Track Progress
            </h3>
            <p>Track your learning progress and get insights into your strengths and weaknesses over time.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
