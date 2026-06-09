import { useParams, Link } from "react-router-dom";

const courseData = {
  1: {
    title: "Smart Contracts & DeFi Development",
    description:
      "Build and deploy smart contracts on Ethereum and Solana while learning Web3, DeFi protocols and decentralized exchange fundamentals.",
    lessons: [
      "Lesson 1: Introduction to Smart Contracts",
      "Lesson 2: Solidity and Web3 Basics",
      "Lesson 3: DeFi Protocols and Yield Farming",
      "Lesson 4: Decentralized Exchanges",
      "Lesson 5: Deploying Your First Smart Contract",
    ],
    downloads: [
      "Smart Contracts Starter Guide",
      "Solidity Quick Reference",
      "DeFi Risk Checklist",
    ],
    resources: [
      "Ethereum Developer Tools",
      "Solana Documentation",
      "Blockchain Explorer Tools",
    ],
    assignments: [
      "Assignment 1: Explain a Smart Contract Use Case",
      "Assignment 2: Create a DeFi Risk Summary",
    ],
  },

  2: {
    title: "Network Security & Firewall Management",
    description:
      "Master network security protocols, firewall configuration, intrusion detection systems and monitoring tools used by enterprise teams.",
    lessons: [
      "Lesson 1: Introduction to Network Security",
      "Lesson 2: Firewalls and Access Rules",
      "Lesson 3: Intrusion Detection Systems",
      "Lesson 4: VPNs and Secure Remote Access",
      "Lesson 5: Network Monitoring Best Practices",
    ],
    downloads: [
      "Firewall Configuration Checklist",
      "Network Security Starter Guide",
      "VPN Security Checklist",
    ],
    resources: [
      "Packet Analysis Tools",
      "Network Monitoring Tools",
      "Firewall Vendor Documentation",
    ],
    assignments: [
      "Assignment 1: Design a Basic Firewall Rule Set",
      "Assignment 2: Identify Network Security Risks",
    ],
  },

  3: {
    title: "Crypto Trading & Blockchain Investment",
    description:
      "Learn cryptocurrency trading strategies, portfolio management, risk assessment and blockchain-based financial concepts.",
    lessons: [
      "Lesson 1: Introduction to Crypto Markets",
      "Lesson 2: Technical Analysis Basics",
      "Lesson 3: Portfolio Management",
      "Lesson 4: Risk Management",
      "Lesson 5: Blockchain Investment Fundamentals",
    ],
    downloads: [
      "Crypto Trading Starter Guide",
      "Portfolio Risk Checklist",
      "Trading Journal Template",
    ],
    resources: [
      "Crypto Market Research Tools",
      "Blockchain Explorer Tools",
      "Risk Management Resources",
    ],
    assignments: [
      "Assignment 1: Create a Sample Crypto Watchlist",
      "Assignment 2: Build a Risk Management Plan",
    ],
  },

  4: {
    title: "Advanced Web Development Mastery Course",
    description:
      "A comprehensive advanced web development program covering modern architecture, cloud deployment, automated testing and scalable systems.",
    lessons: [
      "Lesson 1: Advanced Frontend Architecture",
      "Lesson 2: TypeScript and Scalable Codebases",
      "Lesson 3: APIs, GraphQL and Microservices",
      "Lesson 4: Docker, CI/CD and Deployment",
      "Lesson 5: Monitoring and Performance Optimization",
    ],
    downloads: [
      "Advanced Web Development Roadmap",
      "Deployment Checklist",
      "Testing Strategy Template",
    ],
    resources: [
      "Frontend Architecture Resources",
      "Cloud Deployment Tools",
      "Performance Testing Tools",
    ],
    assignments: [
      "Assignment 1: Design a Scalable App Structure",
      "Assignment 2: Create a Deployment Plan",
    ],
  },

  5: {
    title: "Cloud Security & Infrastructure Protection",
    description:
      "Learn how to secure cloud environments across AWS, Azure and GCP using identity management, encryption, compliance and zero-trust principles.",
    lessons: [
      "Lesson 1: Introduction to Cloud Security",
      "Lesson 2: Identity and Access Management",
      "Lesson 3: Encryption and Data Protection",
      "Lesson 4: Compliance Frameworks",
      "Lesson 5: Zero-Trust Cloud Architecture",
    ],
    downloads: [
      "Cloud Security Checklist",
      "IAM Best Practices Guide",
      "Zero-Trust Starter Guide",
    ],
    resources: [
      "AWS Security Resources",
      "Azure Security Center",
      "Google Cloud Security Documentation",
    ],
    assignments: [
      "Assignment 1: Review a Cloud Security Scenario",
      "Assignment 2: Build a Cloud Risk Checklist",
    ],
  },

  6: {
    title: "Cybersecurity Fundamentals & Threat Defense",
    description:
      "Master core cybersecurity principles including threat analysis, vulnerability assessment, incident response and defense strategies.",
    lessons: [
      "Lesson 1: Introduction to Cybersecurity",
      "Lesson 2: Threats and Vulnerabilities",
      "Lesson 3: Security Controls and Best Practices",
      "Lesson 4: Incident Response Basics",
      "Lesson 5: Building a Defense Strategy",
    ],
    downloads: [
      "Cybersecurity Fundamentals Welcome Pack",
      "Threat Defense Checklist",
      "Security Glossary",
    ],
    resources: [
      "Beginner Cybersecurity Tools",
      "Threat Intelligence Resources",
      "Security Awareness Resources",
    ],
    assignments: [
      "Assignment 1: Identify Common Threats",
      "Assignment 2: Create a Personal Security Checklist",
    ],
  },

  7: {
    title: "Blockchain Development & Architecture",
    description:
      "Deep dive into blockchain fundamentals, consensus mechanisms, distributed ledgers and decentralized application development.",
    lessons: [
      "Lesson 1: What is Blockchain?",
      "Lesson 2: Distributed Ledgers and Consensus",
      "Lesson 3: Wallets and Transactions",
      "Lesson 4: Smart Contract Architecture",
      "Lesson 5: Building Decentralized Applications",
    ],
    downloads: [
      "Blockchain Starter Guide",
      "Consensus Mechanisms Cheat Sheet",
      "dApp Planning Template",
    ],
    resources: [
      "Blockchain Explorer Tools",
      "Smart Contract Examples",
      "Developer Frameworks",
    ],
    assignments: [
      "Assignment 1: Explain Blockchain Use Cases",
      "Assignment 2: Design a Basic dApp Concept",
    ],
  },

  8: {
    title: "Ethical Hacking & Penetration Testing",
    description:
      "Learn professional penetration testing methodologies, vulnerability assessment, exploit testing and responsible security auditing.",
    lessons: [
      "Lesson 1: Introduction to Ethical Hacking",
      "Lesson 2: Reconnaissance and Information Gathering",
      "Lesson 3: Vulnerability Assessment",
      "Lesson 4: Exploitation Basics",
      "Lesson 5: Reporting and Responsible Disclosure",
    ],
    downloads: [
      "Ethical Hacking Starter Guide",
      "Penetration Testing Checklist",
      "Report Writing Template",
    ],
    resources: [
      "Security Lab Setup Guide",
      "Practice Platforms",
      "Responsible Disclosure Resources",
    ],
    assignments: [
      "Assignment 1: Reconnaissance Report",
      "Assignment 2: Vulnerability Assessment Summary",
    ],
  },
};

export default function CourseAccess() {
  const { courseId } = useParams();
  const course = courseData[courseId];

  if (!course) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Course Not Found</h1>
          <Link to="/my-courses" className="text-purple-400">
            Back to My Courses
          </Link>
        </div>
      </div>
    );
  }

  const Section = ({ title, items }) => (
    <div className="bg-white/5 border border-purple-500/30 rounded-3xl p-6">
      <h2 className="text-2xl font-bold mb-5 text-purple-400">{title}</h2>

      <div className="space-y-3">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-slate-900/80 border border-white/10 rounded-xl p-4 flex justify-between items-center"
          >
            <span>{item}</span>
            <button className="px-4 py-2 bg-purple-600 hover:bg-purple-500 rounded-lg text-sm font-bold">
              Open
            </button>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-950 text-white px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <Link to="/my-courses" className="text-purple-400 mb-8 inline-block">
          ← Back to My Courses
        </Link>

        <div className="bg-black/40 border border-purple-500/30 rounded-3xl p-8 mb-10">
          <p className="text-purple-400 tracking-[0.35em] uppercase text-sm font-bold mb-3">
            Course Access
          </p>

          <h1 className="text-5xl font-bold mb-4">{course.title}</h1>

          <p className="text-slate-300 max-w-3xl">{course.description}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <Section title="Lessons" items={course.lessons} />
          <Section title="Downloads" items={course.downloads} />
          <Section title="Resources" items={course.resources} />
          <Section title="Assignments" items={course.assignments} />
        </div>
      </div>
    </div>
  );
}