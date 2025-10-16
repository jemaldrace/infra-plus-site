import React, { useState } from "react";
import PageWrapper from "../components/PageWrapper.jsx";

export default function Contact() {
  const [status, setStatus] = useState(null);

  return (
    <PageWrapper>
      <section className="py-24 bg-brand-navy text-white px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">Let’s Talk About Your Next Project</h2>
          <p className="text-lg mb-10 text-center text-gray-300">
            Fill out the form and we’ll get back to you within 1–2 business days.
          </p>

          <form
            action="https://formspree.io/f/your_form_id"
            method="POST"
            className="bg-white text-gray-800 rounded-2xl shadow p-6 space-y-4"
            onSubmit={() => setStatus('submitted')}
          >
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input name="name" type="text" required className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-teal" />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input name="email" type="email" required className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-teal" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Company</label>
                <input name="company" type="text" className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-teal" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Project Details</label>
              <textarea name="message" rows="5" required className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-teal"></textarea>
            </div>
            <input type="hidden" name="_subject" value="New inquiry from infra-plus.io" />
            <button
              type="submit"
              className="bg-brand-teal text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-600 transition"
            >
              Send Message
            </button>
            <p className="text-sm text-gray-500">
              Prefer email? <a className="text-brand-teal underline" href="mailto:info@infra-plus.io">info@infra-plus.io</a>
            </p>
          </form>

          {status === 'submitted' && (
            <p className="mt-4 text-center text-green-300">
              Thanks! If you don’t see a confirmation page, we’ll still receive your message.
            </p>
          )}
        </div>
      </section>
    </PageWrapper>
  );
}
