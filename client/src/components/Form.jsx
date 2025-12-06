import { useState } from "react";
import api from "./Api.jsx";

export default function FormPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await api.post("/api/forms/submit", form);
      alert("Thank you! Your message has been sent.");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("Submission error:", err);
      alert("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Send Us a Message
        </h2>
        <p className="text-gray-600">
          Fill out the form below and we'll get back to you as soon as possible.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200"
      >
        <div className="space-y-6">
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Your Name
            </label>
            <input
              name="name"
              placeholder="Enter your name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 
                       focus:ring-2 focus:ring-red-400 focus:border-red-400 outline-none 
                       transition-all duration-200"
              disabled={isSubmitting}
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Email Address
            </label>
            <input
              name="email"
              type="email"
              placeholder="your@email.com"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 
                       focus:ring-2 focus:ring-orange-400 focus:border-orange-400 outline-none 
                       transition-all duration-200"
              disabled={isSubmitting}
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Message
            </label>
            <textarea
              name="message"
              placeholder="What would you like to tell us?"
              value={form.message}
              onChange={handleChange}
              rows="5"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 
                       focus:ring-2 focus:ring-purple-400 focus:border-purple-400 outline-none 
                       transition-all duration-200 resize-none"
              disabled={isSubmitting}
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3 rounded-lg font-semibold text-lg transition-all
              ${isSubmitting 
                ? "bg-gray-400 cursor-not-allowed" 
                : "bg-gradient-to-r from-red-500 to-orange-500 hover:shadow-lg"
              } text-white`}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </div>
      </form>

      <div className="mt-6 text-center text-gray-500 text-sm">
        We'll respond to your message within 24 hours.
      </div>
    </div>
  );
}