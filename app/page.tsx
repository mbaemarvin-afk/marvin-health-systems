export default function Home() {
  const skills = [
    {
      title: "Digital Health Systems & EMR Workflows",
      desc: "Designing patient records, appointment, and clinical workflow systems.",
    },
    {
      title: "Telemedicine & Hybrid Clinic Models",
      desc: "Building connected care systems combining physical and virtual healthcare.",
    },
    {
      title: "Healthcare IT Networking (Cisco)",
      desc: "Secure clinic networks, connectivity, and infrastructure design.",
    },
    {
      title: "Health Data Security & Privacy",
      desc: "Protecting patient data and building compliant digital health systems.",
    },
    {
      title: "Public Health Digital Programs",
      desc: "Digital tools for community health, surveillance, and outreach.",
    },
    {
      title: "Clinical Care & Nursing Practice",
      desc: "Frontline clinical experience informing practical digital health solutions.",
    },
    {
      title: "AI Agents & Automation (Jaseci + JacLang)",
      desc: "Intelligent agents for triage, follow-ups, reminders, reporting, decision support.",
    },
    {
      title: "Full-Stack Development (Python + Web Systems)",
      desc: "Healthcare apps, APIs, dashboards, automation tools, and digital platforms.",
    },
  ];

  const projects = [
    {
      name: "Smart Clinic Platform",
      role: "Founder & Digital Health Systems Designer",
      desc: "Designed a hybrid clinic model integrating physical care with telehealth workflows, digital triage, patient follow-up automation, and EMR planning to improve access, efficiency, and continuity of care.",
    },
    {
      name: "AI Patient Follow-up & Reminder System",
      role: "Digital Health Architect & AI Automation Designer",
      desc: "Designed a WhatsApp-based automation system for appointment reminders, medication adherence, post-visit follow-ups, and health education messaging using AI workflows and chatbot automation.",
    },
    {
      name: "Vision Programme — Community Eye Care (Village HopeCore International)",
      role: "Lead Nurse",
      desc: "Led a large-scale community eye care program: vision screening, ophthalmologist clinic coordination, and referral pathways to City Eye Hospital, Kikuyu Eye Hospital, and Chuka Teaching & Referral Hospital. Conducted staff CMEs, performed visual acuity assessments, administered dilation for advanced examinations, and ensured continuity of specialist care.",
    },
  ];

  const services = [
    {
      title: "Digital Health Systems Design & Implementation",
      desc: "EMR planning, patient registration, appointment management, clinical documentation, and hybrid care workflows.",
    },
    {
      title: "Telemedicine & Smart Clinic Solutions",
      desc: "Telehealth-ready clinic infrastructure, virtual consultation workflows, and connected clinic models.",
    },
    {
      title: "AI-Powered Healthcare Automation",
      desc: "AI-driven follow-ups, reminders, adherence workflows, education chatbots, and digital triage systems.",
    },
    {
      title: "Healthcare IT Networking",
      desc: "Secure clinic/hospital networks: LAN/WiFi setup, router/switch configuration, reliable telemedicine connectivity.",
    },
    {
      title: "Healthcare Cybersecurity & Data Protection",
      desc: "Security policies, access control, data protection workflows, BYOD practices, and healthcare security best practice.",
    },
    {
      title: "Public Health Digital Program Design",
      desc: "Digital reporting systems for community health programs, NGO projects, surveillance, M&E with automated reporting.",
    },
    {
      title: "Clinic Digital Transformation Consulting",
      desc: "Transition from paper to digital workflows, staff training, rollout support, and change management.",
    },
  ];

  const certifications = [
    {
      title: "Digital Transformation Programme",
      org: "Saïd Business School, University of Oxford (in partnership with UNICEF)",
      focus: "Digital transformation, innovation, and technology-driven public service delivery.",
    },
    {
      title: "Cybersecurity & Digital Health",
      org: "Digital Health Skills for Africa Programme",
      focus: "Healthcare systems security, digital health infrastructure, and health technology.",
    },
    {
      title: "Advocacy for Digital Justice",
      org: "Ahaki Institute",
      focus: "Digital rights, inclusion, and ethical technology in Africa.",
    },
    {
      title: "Diploma in Kenya Registered Nursing",
      org: "Nakuru West Medical College",
      focus: "Clinical foundation and healthcare delivery expertise.",
    },
    {
      title: "Cisco Networking Programme",
      org: "Cisco-accredited training",
      focus: "Enterprise networking, clinic IT infrastructure, connectivity, and secure systems.",
    },
  ];

  const focusAreas = [
    "Smart Clinics & Telemedicine Infrastructure",
    "AI-Powered Primary Healthcare Systems",
    "Full-Stack Healthcare Application Development",
    "Secure Healthcare Networks & Cybersecurity",
    "Digital Public Health Systems",
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-10">
        <div className="flex flex-col gap-6">
          <div className="inline-flex items-center gap-2 text-sm text-slate-600">
            <span className="px-3 py-1 rounded-full bg-white border">Marvin Health Systems</span>
            <span className="px-3 py-1 rounded-full bg-white border">Digital Health</span>
            <span className="px-3 py-1 rounded-full bg-white border">AI</span>
            <span className="px-3 py-1 rounded-full bg-white border">Cisco Networking</span>
            <span className="px-3 py-1 rounded-full bg-white border">Cybersecurity</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Marvin Mutugi Mbae
          </h1>

          <p className="text-lg md:text-xl text-slate-700 max-w-3xl">
            <span className="font-semibold">Kenya Registered Nurse & Digital Health Specialist.</span>{" "}
            Founder of Marvin Health Systems focused on telehealth, AI automation, and smart clinic infrastructure—building secure, scalable healthcare systems for modern care delivery across Africa.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="#contact"
              className="bg-slate-900 text-white px-5 py-3 rounded-xl font-semibold hover:bg-slate-800 transition"
            >
              Contact
            </a>
            <a
              href="#projects"
              className="bg-white border px-5 py-3 rounded-xl font-semibold hover:bg-slate-100 transition"
            >
              View Projects
            </a>
            <a
              href="#services"
              className="bg-white border px-5 py-3 rounded-xl font-semibold hover:bg-slate-100 transition"
            >
              Services
            </a>
          </div>

          <div className="mt-4 p-5 rounded-2xl bg-white border">
            <p className="text-slate-700">
              <span className="font-semibold">Personal Brand Statement:</span>{" "}
              Engineering the future of healthcare through AI, full-stack systems, and secure clinical networks.
            </p>
            <p className="text-slate-600 mt-2">
              <span className="font-semibold">Vision:</span>{" "}
              To transform public health delivery through intelligent digital systems, connected care, and data-driven decision-making.
            </p>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Core Expertise & Skills</h2>
        <div className="grid md:grid-cols-2 gap-5">
          {skills.map((s) => (
            <div key={s.title} className="p-5 rounded-2xl bg-white border">
              <h3 className="font-bold text-lg">{s.title}</h3>
              <p className="text-slate-600 mt-2">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="bg-white border-y">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Featured Projects & Experience</h2>

          <div className="grid lg:grid-cols-3 gap-6">
            {projects.map((p) => (
              <div key={p.name} className="p-6 rounded-2xl border bg-slate-50">
                <h3 className="font-bold text-lg">{p.name}</h3>
                <p className="text-sm text-slate-600 mt-1">{p.role}</p>
                <p className="text-slate-700 mt-3">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Professional Services</h2>
        <div className="grid md:grid-cols-2 gap-5">
          {services.map((s) => (
            <div key={s.title} className="p-5 rounded-2xl bg-white border">
              <h3 className="font-bold text-lg">{s.title}</h3>
              <p className="text-slate-600 mt-2">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section id="credentials" className="bg-white border-y">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Certifications & Training</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((c) => (
              <div key={c.title} className="p-6 rounded-2xl border bg-slate-50">
                <h3 className="font-bold text-lg">{c.title}</h3>
                <p className="text-slate-700 mt-1">{c.org}</p>
                <p className="text-slate-600 mt-2">
                  <span className="font-semibold">Focus:</span> {c.focus}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOCUS AREAS */}
      <section id="focus" className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Career Focus Areas</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {focusAreas.map((f) => (
            <div key={f} className="p-5 rounded-2xl bg-white border">
              <p className="font-semibold">{f}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <h2 className="text-2xl md:text-3xl font-bold">Contact</h2>
          <p className="text-slate-200 mt-3 max-w-2xl">
            Reach out for digital health consulting, smart clinic setup, AI automation, healthcare networking, and cybersecurity-focused support.
          </p>

          <div className="mt-6 grid md:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-slate-800">
              <p className="text-slate-300 text-sm">Email</p>
              <p className="font-semibold">mbaemarvin@gmail.com</p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-800">
              <p className="text-slate-300 text-sm">WhatsApp</p>
              <p className="font-semibold">+254702294517</p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-800">
              <p className="text-slate-300 text-sm">LinkedIn</p>
              <p className="font-semibold">Marvin Mutugi</p>
              <p className="text-slate-300 text-sm mt-1">
                (Tip: replace with your profile link when ready)
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-800">
              <p className="text-slate-300 text-sm">Location</p>
              <p className="font-semibold">Chogoria, Tharaka-Nithi County, Kenya</p>
            </div>
          </div>

          <p className="text-slate-400 text-sm mt-8">
            © {new Date().getFullYear()} Marvin Health Systems
          </p>
        </div>
      </section>
    </main>
  );
}
