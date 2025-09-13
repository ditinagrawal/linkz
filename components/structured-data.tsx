export const StructuredData = () => {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ditin Agrawal",
    jobTitle: "Software Engineer",
    description:
      "Ditin Agrawal is a passionate software engineer / Full Stack Developer with a knack for building web applications and exploring new technologies.",
    url: "https://ditin.in",
    image: "https://ditin.in/avatar.jpg",
    sameAs: [
      "https://github.com/ditinagrawal",
      "https://linkedin.com/in/ditinagrawal",
      "https://x.com/ditinagrawal",
      "https://youtube.com/@ditinagrawal",
      "https://portfolio.ditin.in",
    ],
    email: "ditin.agrawal05@gmail.com",
    knowsAbout: [
      "Software Engineering",
      "Full Stack Development",
      "Web Development",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
    ],
    alumniOf: "Software Engineering",
    worksFor: {
      "@type": "Organization",
      name: "Available for Work",
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Ditin Agrawal - Software Engineer",
    description:
      "Personal link tree and portfolio hub for Ditin Agrawal, a passionate software engineer and full stack developer.",
    url: "https://ditin.in",
    author: {
      "@type": "Person",
      name: "Ditin Agrawal",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: "https://ditin.in",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
    </>
  );
};
