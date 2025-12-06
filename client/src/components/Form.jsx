import { useState } from "react";
import axios from "axios";

export default function FormPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("/api/forms/submit", form);
    alert("Form submitted!");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 space-y-6"
    >

      <input
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
        className="w-full px-4 py-3 rounded-lg border border-gray-300 
                   focus:ring-2 focus:ring-red-400 outline-none shadow-sm"
      />

      <input
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        className="w-full px-4 py-3 rounded-lg border border-gray-300 
                   focus:ring-2 focus:ring-orange-400 outline-none shadow-sm"
      />

      <textarea
        name="message"
        placeholder="Message"
        value={form.message}
        onChange={handleChange}
        rows="5"
        className="w-full px-4 py-3 rounded-lg border border-gray-300 
                   focus:ring-2 focus:ring-purple-400 outline-none shadow-sm resize-none"
      ></textarea>

      <button
        type="submit"
        className="w-full py-3 bg-gradient-to-r from-red-500 to-orange-500 
                   text-white rounded-lg font-semibold text-lg hover:opacity-90 
                   transition-all shadow-md"
      >
        Send Message
      </button>
    </form>
  );
}
