import { useState } from "react";
import api from "../components/Api.jsx";

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
    await api.post("/form-submit", form);
    alert("Form submitted!");
  };

  return (
    <form onSubmit={handleSubmit}>

      <input
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
      />

      <input
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
      />

      <textarea
        name="message"
        placeholder="Message"
        value={form.message}
        onChange={handleChange}
      ></textarea>

      <button type="submit">Send</button>

    </form>
  );
}
