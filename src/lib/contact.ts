// One place for contact details, so every page stays in sync.
// Leave a link as null to hide it everywhere.

export const CONTACT = {
  email: "jen@aiwithjen.com",
  linkedin: "https://linkedin.com/in/jenniferkelleman",
  calendly: "https://calendly.com/ai-with-jen/connect" as string | null,
  sessionize: null as string | null,
};

export const mailto = (subject?: string) =>
  `mailto:${CONTACT.email}${subject ? `?subject=${encodeURIComponent(subject)}` : ""}`;
