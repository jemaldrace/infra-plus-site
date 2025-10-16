import React from "react";
import PageWrapper from "../components/PageWrapper.jsx";

export default function About() {
  return (
    <PageWrapper>
      <section className="py-24 px-6 bg-white max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-brand-navy mb-6">About Infra+</h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          Infra+ simplifies complex infrastructure projects and delivers predictable outcomes.
          With extensive experience in data center deployments and managed services, we help
          organizations plan, coordinate, and execute every stage of their infrastructure journey.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed">
          From initial planning to go-live, our project management approach emphasizes clarity,
          accountability, and technical precision — ensuring your investments in infrastructure
          deliver measurable value.
        </p>
      </section>
    </PageWrapper>
  );
}
