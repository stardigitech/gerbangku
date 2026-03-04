"use client";

import { useState } from "react";
import { toast } from "sonner";

export default function DemoPage() {
  const [showOther, setShowOther] = useState(false);

  const [form, setForm] = useState({
    name: "",
    company: "",
    industry: "",
    otherIndustry: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    if (name === "industry") {
      setShowOther(value === "Others");
    }

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const finalIndustry =
      form.industry === "Others"
        ? form.otherIndustry
        : form.industry;

    const { otherIndustry, ...rest } = form;

    const finalData = {
      ...rest,
      industry: finalIndustry,
    };

    console.log("Demo Request:", finalData);

    // 🔥 Toast Success
    toast.success("Demo request sent successfully!", {
      description: "Our team will contact you soon.",
    });

    setForm({
      name: "",
      company: "",
      industry: "",
      otherIndustry: "",
      email: "",
      message: "",
    });

    setShowOther(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white flex items-center justify-center px-6 py-20">
      <div className="max-w-2xl w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-10 shadow-2xl">

        <h1 className="text-3xl font-semibold mb-4 text-center">
          Request a Demo
        </h1>

        <p className="text-gray-400 text-center mb-10">
          See how Gerbangku can structure and scale your business operations.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            value={form.name}
            onChange={handleChange}
            className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:border-white focus:ring-2 focus:ring-white/20 transition"
          />

          <input
            type="text"
            name="company"
            placeholder="Company Name"
            required
            value={form.company}
            onChange={handleChange}
            className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:border-white focus:ring-2 focus:ring-white/20 transition"
          />

          <select
            name="industry"
            required
            value={form.industry}
            onChange={handleChange}
            className="w-full bg-white/10 text-white border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:border-white focus:ring-2 focus:ring-white/20 transition"
          >
            <option value="" className="bg-gray-900 text-white">
              Select Industry
            </option>
            <option value="Technology" className="bg-gray-900 text-white">
              Technology
            </option>
            <option value="Retail" className="bg-gray-900 text-white">
              Retail
            </option>
            <option value="Manufacturing" className="bg-gray-900 text-white">
              Manufacturing
            </option>
            <option value="Real Estate" className="bg-gray-900 text-white">
              Real Estate
            </option>
            <option value="Others" className="bg-gray-900 text-white">
              Others
            </option>
          </select>

          {showOther && (
            <input
              type="text"
              name="otherIndustry"
              placeholder="Please specify your industry"
              required
              value={form.otherIndustry}
              onChange={handleChange}
              className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:border-white focus:ring-2 focus:ring-white/20 transition"
            />
          )}

          <input
            type="email"
            name="email"
            placeholder="Work Email"
            required
            value={form.email}
            onChange={handleChange}
            className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:border-white focus:ring-2 focus:ring-white/20 transition"
          />

          <textarea
            name="message"
            placeholder="Tell us about your business needs..."
            rows={4}
            value={form.message}
            onChange={handleChange}
            className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:border-white focus:ring-2 focus:ring-white/20 transition"
          />

          <button
            type="submit"
            className="w-full bg-white text-black font-medium py-3 rounded-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
          >
            Schedule Demo
          </button>

        </form>
      </div>
    </div>
  );
}