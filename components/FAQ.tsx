import React from "react";

export default function FAQ() {
  return (
    <section id="faq" className="bg-base-100 text-base-content py-10">
      <div className="container mx-auto flex flex-col md:flex-row">
        <div className="md:w-1/3 flex flex-col justify-center items-center text-center md:text-left md:items-start mb-8 md:mb-0">
          <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
        </div>
        <div className="md:w-2/3 space-y-4">
          <div className="bg-primary collapse">
            <input type="checkbox" className="peer" />
            <div className="collapse-title bg-primary text-primary-content peer-checked:bg-primary peer-checked:text-primary-content transition-colors">
              What is RateMyProfessor?
            </div>
            <div className="collapse-content bg-secondary text-secondary-content peer-checked:bg-primary peer-checked:text-primary-content transition-colors animate-fadeIn">
              <p>RateMyProfessor is a platform that allows students to rate and review their professors.</p>
            </div>
          </div>
          <div className="bg-primary collapse">
            <input type="checkbox" className="peer" />
            <div className="collapse-title bg-primary text-primary-content peer-checked:bg-primary peer-checked:text-primary-content transition-colors">
              How do I rate a professor?
            </div>
            <div className="collapse-content bg-secondary text-secondary-content peer-checked:bg-primary peer-checked:text-primary-content transition-colors animate-fadeIn">
              <p>Search for your professor and click &apos;Rate&apos; to submit your review.</p>
            </div>
          </div>
          <div className="bg-primary collapse">
            <input type="checkbox" className="peer" />
            <div className="collapse-title bg-primary text-primary-content peer-checked:bg-primary peer-checked:text-primary-content transition-colors">
              Can I edit or delete my review?
            </div>
            <div className="collapse-content bg-secondary text-secondary-content peer-checked:bg-primary peer-checked:text-primary-content transition-colors animate-fadeIn">
              <p>Yes, you can edit or delete your review from your account dashboard at any time.</p>
            </div>
          </div>
          <div className="bg-primary collapse">
            <input type="checkbox" className="peer" />
            <div className="collapse-title bg-primary text-primary-content peer-checked:bg-primary peer-checked:text-primary-content transition-colors">
              Is my review anonymous?
            </div>
            <div className="collapse-content bg-secondary text-secondary-content peer-checked:bg-primary peer-checked:text-primary-content transition-colors animate-fadeIn">
              <p>Yes, all reviews are anonymous to protect your privacy while providing honest feedback.</p>
            </div>
          </div>
          {/* Add more FAQs as needed */}
        </div>
      </div>
    </section>
  );
}
