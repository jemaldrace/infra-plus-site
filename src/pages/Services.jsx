import React from "react";
import PageWrapper from "../components/PageWrapper.jsx";

export default function Services() {
  const services = [
    {
      title: "Infrastructure Project Management",
      desc: "Comprehensive oversight from planning to delivery — ensuring every phase runs smoothly."
    },
    {
      title: "Data Center Enablement",
      desc: "End-to-end support for new colocation builds, migrations, and operational readiness."
    },
    {
      title: "Managed Services Coordination",
      desc: "Aligning vendors, service providers, and clients to deliver on performance and uptime commitments."
    }
  ];

  return (
    <PageWrapper>
      <section className="py-24 px-6 bg-gray-50 text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-brand-navy mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-sm hover:shadow-md transition p-8">
                <h3 className="text-xl font-semibold text-brand-navy mb-3">{s.title}</h3>
                <p className="text-gray-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
