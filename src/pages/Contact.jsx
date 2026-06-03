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
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          
          {/* Title */}
          <h1 className="text-center mb-4 fw-bold text-dark">Contact Us</h1>

          {/* Social Media Links avec Noms */}
          <div className="d-flex justify-content-center gap-4 mb-5">
            
            {/* Facebook Card */}
            <a 
              href="https://www.facebook.com/profile.php?id=61552792641869" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-decoration-none text-center d-flex flex-column align-items-center p-3 rounded-4 shadow-sm bg-white"
              style={{ width: "120px", transition: "all 0.3s ease", border: "1px solid #e0e7ff" }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 10px 20px rgba(59, 89, 152, 0.2)'; e.currentTarget.style.borderColor = '#3b5998'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = '#e0e7ff'; }}
            >
              <i className="bi bi-facebook fs-1 mb-2" style={{ color: "#3b5998" }}></i>
              <span className="fw-bold text-dark fs-6">Facebook</span>
            </a>

            {/* Instagram Card */}
            <a 
              href="https://www.instagram.com/aidev_communityfsbm?igsh=OHQwMjEwamFtZGY2" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-decoration-none text-center d-flex flex-column align-items-center p-3 rounded-4 shadow-sm bg-white"
              style={{ width: "120px", transition: "all 0.3s ease", border: "1px solid #fce7f3" }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 10px 20px rgba(225, 48, 108, 0.2)'; e.currentTarget.style.borderColor = '#E1306C'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = '#fce7f3'; }}
            >
              <i className="bi bi-instagram fs-1 mb-2" style={{ color: "#E1306C" }}></i>
              <span className="fw-bold text-dark fs-6">Instagram</span>
            </a>

          </div>

          {/* Form Card (Rahi b7al b7al kifma kant) */}
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