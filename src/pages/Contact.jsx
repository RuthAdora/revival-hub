import { useState } from "react";
import emailjs from "emailjs-com";
import { MessageCircle, Mail } from "lucide-react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .send(
        "service_oe1avbw",
        "template_t8hbe86",
        formData,
        "SmPsNSZlQ-CaYxFLy"
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error(error);
          setStatus("Failed to send message.");
        }
      );
  };

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800">
        Contact Us
      </h2>

      {/* Contact Options */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* WhatsApp Card */}
        <a
          href="https://wa.me/+254111755539?text=Hello%20RevivalHub%2C%20I%20would%20like%20to%20connect."
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center bg-green-100 shadow-md rounded-2xl p-8 hover:shadow-xl hover:bg-green-200 transition"
        >
          <MessageCircle className="w-12 h-12 text-green-700 mb-3" />
          <h3 className="text-xl font-semibold mb-2">Chat on WhatsApp</h3>
          <p className="text-gray-700 text-center">
            Reach us instantly via WhatsApp. We’d love to hear from you!
          </p>
        </a>

        {/* Email Card */}
        <div className="shadow-md rounded-2xl p-8 bg-white hover:shadow-xl transition">
          <div className="flex items-center mb-4">
            <Mail className="w-8 h-8 text-indigo-600 mr-2" />
            <h3 className="text-xl font-semibold">Send an Email</h3>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-50"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-50"
              required
            />
            <textarea
              rows="4"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="w-full rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-50"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
            >
              Send Message
            </button>
            {status && (
              <p className="text-center mt-2 text-sm text-gray-700">{status}</p>
            )}
          </form>
        </div>
      </div>

      {/* Bible Verse */}
      <div className="text-center mt-12 bg-indigo-100 rounded-xl p-6 shadow-md">
        <p className="text-lg italic text-gray-700">
          “Cast all your anxiety on Him because He cares for you.”
        </p>
        <span className="block mt-2 font-semibold text-indigo-800">
          — 1 Peter 5:7
        </span>
      </div>
    </section>
  );
}

export default Contact;
