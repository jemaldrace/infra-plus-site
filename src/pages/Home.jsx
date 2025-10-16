import React from "react";
import PageWrapper from "../components/PageWrapper.jsx";

export default function Home() {
  return (
    <PageWrapper>
      <section className="bg-gradient-to-b from-gray-50 to-white py-24 px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-brand-navy mb-6">
            Delivering Precision in <span className="text-brand-teal">Infrastructure</span> Projects
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
            Infra+ provides expert project management for data center deployments, migrations,
            and managed service enablement — ensuring your critical infrastructure launches
            on time and on budget.
          </p>
          <a
            href="/contact"
            className="bg-brand-teal text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-teal-600 transition"
          >
            Schedule a Consultation
          </a>
        </div>
      </section>
    </PageWrapper>
  );
}
