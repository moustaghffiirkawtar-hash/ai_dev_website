import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! (Simulation, no backend)");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    // Bootstrap container to center everything
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          {/* Title */}
          <h1 className="text-center mb-5 fw-bold text-dark">Contact Us</h1>

          {/* Form Card */}
          <div className="card shadow-lg border-0 rounded-3 p-4 p-md-5">
            <form onSubmit={handleSubmit}>
              {/* Name Field */}
              <div className="mb-4">
                <label className="form-label fw-bold text-secondary">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="form-control form-control-lg"
                  placeholder="Your full name"
                />
              </div>

              {/* Email Field */}
              <div className="mb-4">
                <label className="form-label fw-bold text-secondary">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="form-control form-control-lg"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Message Field */}
              <div className="mb-4">
                <label className="form-label fw-bold text-secondary">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="form-control form-control-lg"
                  placeholder="Write your message here..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="btn btn-primary w-100 py-3 fw-bold fs-5"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
