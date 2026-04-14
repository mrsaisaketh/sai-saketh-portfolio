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
        form,
        "sN7zS1nfzXjES987y"
      )
      .then(() => {
        alert("Message sent successfully ");
        setOpen(false);
        setForm({ user_email: "", user_phone: "", message: "" });
      })
      .catch(() => alert("Failed to send message "));
  };

  return (
    <div className="relative min-h-screen text-white font-sans overflow-hidden bg-[#0b0f1a]">
      {/* PREMIUM BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -right-40 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold mb-4">M Sai Saketh</h1>
            <p className="text-lg text-gray-300 mb-4">
              Software Developer | Java | Python | Cyber Security | Devops | Full-Stack Developer
            </p>
            <p className="text-gray-400 max-w-xl leading-relaxed">
              Detail-oriented and versatile software developer with strong
              proficiency in Java and Python, experienced in full stack
              development, database management, and data analysis.
            </p>
          </div>

          {/* PHOTO */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute inset-0 rounded-2xl border border-indigo-500/40 translate-x-3 translate-y-3" />
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
      <section className="max-w-5xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-semibold mb-4">About Me</h2>
        <p className="text-gray-300 leading-relaxed max-w-3xl">
         I’m a Computer Science Engineering student at NSRIT with a strong passion for full-stack development, AI, cybersecurity, and blockchain technologies.
        I enjoy building innovative and user-focused applications, with hands-on experience in projects like AI-powered certificate verification, telemedicine platforms, and virtual trial rooms.
          My technical foundation includes Python, Java, JavaScript, HTML, CSS, React, and cloud-based development workflows. Along with development, 
          I actively participate in hackathons and have led large student tech communities, which strengthened my leadership and problem-solving skills. 
          I’m driven by the goal of creating impactful digital solutions that solve real-world problems. 

        </p>
      </section>

      {/* SKILLS */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-10">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {["Java", "Python Development", "Full Stack", "MySQL", "HTML", "CSS", "Cyber Security, Flutter,"].map(
              (skill) => (
                <div
                  key={skill}
                  className="rounded-xl px-4 py-3 text-center bg-white/5 backdrop-blur hover:bg-white/10 transition"
                >
                  {skill}
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-semibold mb-12">Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Project title="Doctorly" desc="Telemedicine platform with real-time consultations." />
          <Project title="V-Mirror" desc="Virtual trial room with body size detection and recommendations." />
          <Project title="Agree the Culture" desc="AI-driven crop recommendation platform for farmers." />
            <Project title="CertiGuard" desc="AI-driven academic Certificate verification proccess, It will detect the wheather the certificate is original or fake. and stores the data in the DB which was highly secured with Blockchaiin Smartcontracts." />
         <Project title="Javers-AI" desc="AI-driven Smart Automachine with complete access of system. It use to take command with Voice,Actions,Text, & Sign language also." />
        </div>
      </section>

      {/* EDUCATION */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-8">Education</h2>
          <ul className="space-y-4 text-gray-300">
            <li><strong>B.Tech (2023–2027)</strong> — NSRIT (CGPA: 7.29)</li>
            <li><strong>Intermediate</strong> — Sri Chaitanya Junior College</li>
            <li><strong>SSC</strong> — Sri Chaitanya Techno School</li>
          </ul>
        </div>
      </section>

      {/* CONTACT */}
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
          <div className="bg-[#0f1424] rounded-2xl p-8 w-[90%] max-w-md">
            <h3 className="text-2xl font-semibold mb-2">Contact Me</h3>
            <p className="text-sm text-gray-400 mb-4">
              Prefer LinkedIn?
              <a
                href="https://www.linkedin.com/in/sai-saketh-2b97a6336/"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1 text-indigo-400 underline"
              >
                Reach me there
              </a>
            </p>
            <form onSubmit={sendEmail} className="space-y-4">
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
                value={form.user_email}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-white/5"
              />
              <input
                type="text"
                name="user_phone"
                placeholder="Contact Number"
                value={form.user_phone}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-white/5"
              />
              <textarea
                name="message"
                rows="4"
                placeholder="Your Message"
                required
                value={form.message}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-white/5"
              />
              <div className="flex justify-between items-center">
                <button type="button" onClick={() => setOpen(false)} className="text-gray-400">Cancel</button>
                <button type="submit" className="px-6 py-2 rounded-full bg-indigo-600">Send</button>
              </div>
            </form>
          </div>
        </div>
      )}

      <footer className="text-center py-10 text-gray-500 text-sm">
        © 2025 Sai Saketh Musti
      </footer>
    </div>
  );
}

function Project({ title, desc }) {
  return (
    <div className="rounded-2xl p-6 bg-white/5 backdrop-blur hover:bg-white/10 transition">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-300">{desc}</p>
    </div>
  );
}
