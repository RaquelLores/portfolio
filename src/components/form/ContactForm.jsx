import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("https://formspree.io/f/xjkyenpa", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setStatus("¡Mensaje enviado!");
      setFormData({ name: "", email: "", message: "" });
    } else {
      setStatus("Error al enviar el mensaje.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Your name"
        required
        className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 w-full text-gray-900" // Updated text color
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Your email"
        required
        className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 w-full text-gray-900" // Updated text color
      />
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Your message"
        required
        className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 w-full text-gray-900" // Updated text color
      />
      <button
        type="submit"
        className="p-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
      >
        Send
      </button>
      <p>{status}</p>
    </form>
  );
};

export default ContactForm;