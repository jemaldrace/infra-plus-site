import React from "react";
import PageWrapper from "../components/PageWrapper.jsx";

export default function Projects() {
  return (
    <PageWrapper>
      <section className="py-24 px-6 bg-white max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-brand-navy mb-6">Recent Projects</h2>
        <p className="text-gray-700 text-lg mb-12">
          A few examples of infrastructure deployments and data center programs we’ve supported.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-100 p-8 rounded-2xl">Project A – Migration for Fortune 500</div>
          <div className="bg-gray-100 p-8 rounded-2xl">Project B – Global Colocation Setup</div>
          <div className="bg-gray-100 p-8 rounded-2xl">Project C – Managed Service Launch</div>
        </div>
      </section>
    </PageWrapper>
  );
}
