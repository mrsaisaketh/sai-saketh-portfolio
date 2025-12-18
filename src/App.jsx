import React, { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Portfolio() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    user_email: "",
    user_phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_zjb3glf",
        "template_05mk1yc",
        {
          user_email: form.user_email,
          user_phone: form.user_phone,
          message: form.message,
        },
        "sN7zS1nfzXjES987y"
      )
      .then(() => {
        alert("Message sent successfully 🚀");
        setOpen(false);
        setForm({ user_email: "", user_phone: "", message: "" });
      })
      .catch(() => {
        alert("Failed to send message ❌");
      });
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans">
      {/* HERO SECTION */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h1 className="text-5xl font-bold mb-4">M Sai Saketh</h1>
            <p className="text-lg text-gray-300 mb-4">
              Software Developer | Java | Python | Full Stack
            </p>
            <p className="text-gray-400 max-w-xl">
              Detail-oriented and versatile software developer with strong
              proficiency in Java and Python, experienced in full stack
              development, database management, and data analysis.
            </p>
          </div>

          {/* PHOTO FRAME */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              {/* Frame */}
              <div className="absolute inset-0 rounded-2xl border-4 border-indigo-500 translate-x-3 translate-y-3" />

              {/* Photo */}
              <img
                src="/sai-saketh.jpg"
                alt="Sai Saketh"
                className="relative w-72 h-96 object-cover rounded-2xl bg-gray-800"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-gray-300 leading-relaxed">
          I am currently pursuing my 3rd year B.Tech at Nadimpalli Sathayanarayana
          Raju Institute of Technology (NSRIT). I enjoy building innovative
          applications and working on real-world problem-solving projects.
        </p>
      </section>

      {/* SKILLS */}
      <section className="bg-slate-800 py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {["Java", "Python developer", "HTML", "CSS", "React","cyber security analyst" ].map(
              (skill) => (
                <div
                  key={skill}
                  className="bg-slate-700 rounded-xl p-4 text-center hover:bg-slate-600 transition"
                >
                  {skill}
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-10">Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Project title="Doctorly" desc="Telemedicine platform with real-time video consultations." />
          <Project title="V-Mirror" desc="Virtual trial room with body size detection and outfit recommendations." />
          <Project title="Agree the Culture" desc="AI-driven crop recommendation platform for farmers." />
        </div>
      </section>

      {/* EDUCATION */}
      <section className="bg-slate-800 py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">Education</h2>
          <ul className="space-y-4 text-gray-300">
            <li><strong>B.Tech (2023–2027)</strong> – NSRIT (CGPA: 7.1)</li>
            <li><strong>Intermediate</strong> – Sri Chaitanya Junior College</li>
            <li><strong>SSC</strong> – Sri Chaitanya Techno School</li>
          </ul>
        </div>
      </section>

      {/* CONTACT BUTTON */}
      <section className="py-24 flex justify-center">
        <button
          onClick={() => setOpen(true)}
          className="px-10 py-4 rounded-full bg-indigo-600 hover:bg-indigo-700 transition text-lg font-semibold"
        >
          Contact Me
        </button>
      </section>

      {/* CONTACT MODAL */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
          <div className="bg-slate-900 rounded-2xl p-8 w-[90%] max-w-md">
            <h3 className="text-2xl font-bold mb-4">Contact Me</h3>
            <form onSubmit={sendEmail} className="space-y-4">
              <input type="email" name="user_email" placeholder="Your Email" required value={form.user_email} onChange={handleChange} className="w-full p-3 rounded-lg bg-slate-800" />
              <input type="text" name="user_phone" placeholder="Contact Number" required value={form.user_phone} onChange={handleChange} className="w-full p-3 rounded-lg bg-slate-800" />
              <textarea name="message" placeholder="Your Message" rows="4" required value={form.message} onChange={handleChange} className="w-full p-3 rounded-lg bg-slate-800" />
              <div className="flex justify-between items-center">
                <button type="button" onClick={() => setOpen(false)} className="text-gray-400">Cancel</button>
                <button type="submit" className="px-6 py-2 rounded-full bg-indigo-600">Send</button>
              </div>
            </form>
          </div>
        </div>
      )}

      <footer className="text-center py-8 text-gray-500 text-sm">
        © 2025 Sai Saketh Musti
      </footer>
    </div>
  );
}

function Project({ title, desc }) {
  return (
    <div className="bg-slate-800 rounded-2xl p-6 hover:bg-slate-700 transition">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-300">{desc}</p>
    </div>
  );
}
