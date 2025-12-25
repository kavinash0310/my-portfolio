'use client';

interface AboutProps {
  isDark: boolean;
  cardBg: string;
  borderClass: string;
}

export default function About({ isDark, cardBg, borderClass }: AboutProps) {
  const experience = {
    company: "Nagarro",
    duration: "Aug 2022 – June 2025",
    role: "Engineer",
    progression: "Promoted from Trainee → Associate → Engineer",
    location: "Gurgaon, Haryana",
    points: [
      "Developed and optimized 10+ microservices for BFSI applications using Spring Boot, Java, and REST APIs, improving scalability and reducing response time by 25%.",
      "Integrated PAN, Aadhaar, Equifax, and AML APIs for customer verification, reducing onboarding time by 30% and ensuring full KYC/AML compliance.",
      "Implemented Spring Security, JWT, and OAuth2 to secure 50+ API endpoints; performed regular code reviews to maintain clean, high‑quality code.",
      "Built multi-threaded disbursement modules using Java 8 Concurrency (Executors, CompletableFuture), supporting 1000+ transactions per minute.",
      "Automated CI/CD pipelines with Jenkins, Docker, and Git, reducing release cycles by 40%.",
      "Collaborated with cross‑functional teams in Agile sprints, delivering backend modules with 90%+ test coverage.",
      "Contributed to Payout Validation and Loan Disbursement APIs with robust audit logging and exception handling for compliance and traceability."
    ]
  };

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <h2 className="text-5xl font-bold mb-16 text-center">
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </span>
        </h2>

        {/* Experience Section */}
        <div className={`${cardBg} p-10 rounded-2xl border ${borderClass} shadow-xl`}>
          <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Experience
          </h3>

          <div className="mb-4">
            <div className="text-xl font-semibold">{experience.company}</div>

            <div className="text-sm opacity-80">
              {experience.role} • {experience.location}
            </div>

            <div className="text-sm opacity-70 italic">
              {experience.progression}
            </div>

            <div className="text-sm opacity-60">{experience.duration}</div>
          </div>

          <ul className="space-y-3 mt-4">
            {experience.points.map((point, idx) => (
              <li
                key={idx}
                className={`leading-relaxed ${
                  isDark ? 'text-gray-400' : 'text-gray-700'
                }`}
              >
                • {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
