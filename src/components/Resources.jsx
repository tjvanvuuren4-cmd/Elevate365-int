export default function Resources() {
  const documents = [
    {
      title: "Student Handbook",
      desc: "Policies, procedures and important student information.",
      href: "/Documents/elevate365-student-handbook.pdf",
    },
    {
      title: "Sample Certificate",
      desc: "View a sample Elevate365 certificate of completion.",
      href: "/Documents/elevate365-certificate.pdf",
    },
    {
      title: "Refund Policy",
      desc: "Understand our refund eligibility and process.",
      href: "/Documents/elevate365-refund-policy.pdf",
    },
    {
      title: "Terms & Conditions",
      desc: "Review our student terms and learning policies.",
      href: "/Documents/elevate365-terms-conditions.webp",
    },
  ];

  return (
    <section id="resources" className="bg-[#05030d] px-6 py-24 text-white">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-purple-400">
          Student Resources
        </h2>

        <p className="mt-4 max-w-2xl text-white/70">
          Access important Elevate365 student documents, policies and learning resources.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {documents.map((doc) => (
            <a
              key={doc.title}
              href={doc.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-purple-500/30 bg-white/5 p-6 transition hover:border-purple-400 hover:bg-purple-500/10"
            >
              <h3 className="text-2xl font-bold">{doc.title}</h3>
              <p className="mt-3 text-white/65">{doc.desc}</p>
              <span className="mt-5 inline-block font-bold text-purple-300">
                View Document →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}