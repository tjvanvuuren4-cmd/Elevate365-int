const documents = [
  {
    title: "Terms & Conditions",
    description: "Elevate365 service terms and client agreement.",
    url: "/documents/policies/Terms-and-Conditions.pdf",
  },
  {
    title: "Privacy Policy",
    description: "How Elevate365 protects client information.",
    url: "/documents/policies/Privacy-Policy.pdf",
  },
  {
    title: "Refund Policy",
    description: "Refund and cancellation information.",
    url: "/documents/policies/Refund-Policy.pdf",
  },
];

export default function Documents() {
  return (
    <main className="min-h-screen px-6 py-20">
      <h1 className="text-4xl font-bold mb-4">Documents</h1>
      <p className="mb-10 text-gray-600">
        View and download important Elevate365 documents.
      </p>

      <div className="grid gap-6 md:grid-cols-3">
        {documents.map((doc) => (
          <div key={doc.title} className="border rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-2">{doc.title}</h2>
            <p className="text-gray-600 mb-4">{doc.description}</p>
            <a
              href={doc.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-purple-600"
            >
              View Document →
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}