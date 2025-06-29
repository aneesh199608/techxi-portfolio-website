export type ProjectSection = {
  title: string;
  description: string;
  image?: string; // Optional image URL for this section
  images?: string[]; // Optional multiple images
  type?: "default" | "audio" | "video" | "image" | "custom";
  audioSrc?: string;
  videoSrc?: string;
};

export type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  url?: string; // Case study or public URL
  comingSoon?: boolean;
  sections?: ProjectSection[];
  hasCaseStudy?: boolean;
};

export const projects: Project[] = [
  {
    id: "callbot",
    title: "CallBOT – AI-powered Communication Automation",
    description:
      "An enterprise-grade platform that automates outbound calls, WhatsApp messages, and emails using AI workflows tailored for business outreach.",
    image: "/project-screenshots/callbot.png",
    tags: ["React", "Node.js", "Tailwind", "Vite", "PostgreSQL"],
    hasCaseStudy: true,
    comingSoon: false,
    url: "/projects/callbot",
    sections: [
      {
        title: "Overview",
        type: "audio",
        description: `CallBOT automates outbound calls, WhatsApp, and email communication for modern businesses. Its AI-driven workflow builder allows teams to set up custom logic for follow-ups, scheduling, and lead qualification.`,
        audioSrc: "/audio/callbot-demo.mp3",
      },
      {
        title: "Key Features",
        description: `- Campaign Management\n- Multi-channel Messaging\n- Voice-to-Text & AI Summaries\n- Real-time Analytics Dashboard`,
        image: "/project-screenshots/callbot.png",
      },
      {
        title: "Tech Stack",
        description:
          "Built with React, Node.js, PostgreSQL, and Vite for superfast performance. Deployed with CI/CD pipelines for reliable releases.",
      },
    ],
  },
  {
    id: "cliniq",
    title: "ClinIQ – Digital Health Platform",
    description: "Unified platform for doctors and patients: video consults, e-prescriptions, records and payments, all in one place.",
    image: "/project-screenshots/placeholder-image.png",
    tags: ["React", "Firebase", "Stripe", "Redux"],
    url: "cliniq",
    hasCaseStudy: false,
    comingSoon: true,
  },
  {
    id: "freezebooking",
    title: "FreezeBooking – Smart Travel Scheduling",
    description: "A seamless travel booking platform integrating real-time fares, itinerary planning, and easy cancellations.",
    image: "/project-screenshots/freezebooking.jpg",
    tags: ["React", "TypeScript", "Next.js", "MongoDB"],
    url: "freezebooking",
    hasCaseStudy: false,
    comingSoon: true,
  },
  {
    id: "orbiting",
    title: "Orbiting – SaaS Subscription Analytics",
    description: "Automated dashboard for tracking revenue, churn, and engagement for SaaS businesses.",
    image: "/project-screenshots/placeholder-image.png",
    tags: ["Next.js", "Recharts", "Express.js"],
    url: "orbiting",
    hasCaseStudy: false,
    comingSoon: true,
  },
  {
    id: "ebunch",
    title: "E-Bunch – Multi-vendor E-Commerce",
    description: "Custom e-commerce solution with vendor onboarding, product management, and analytics.",
    image: "/project-screenshots/placeholder-image.png",
    tags: ["React", "Node.js", "Stripe", "Redux"],
    url: "ebunch",
    hasCaseStudy: false,
    comingSoon: true,
  },
  {
    id: "fitbox",
    title: "Fitbox – Smart Fitness App",
    description: "A fitness coaching app offering routines, progress tracking, and personalized recommendations.",
    image: "/project-screenshots/placeholder-image.png",
    tags: ["React Native", "Firebase", "Expo"],
    url: "fitbox",
    hasCaseStudy: false,
    comingSoon: true,
  },
];
