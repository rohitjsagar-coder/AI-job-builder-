export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  salary_range: string;
  type: string;
  tags: string[];
  description: string;
  matchScore?: number;
  created_at?: string;
}


export const MOCK_JOBS: Job[] = [
  {
    id: "1",
    title: "Senior Frontend Engineer",
    company: "TechFlow AI",
    location: "Remote",
    salary_range: "$140k - $180k",
    type: "Full-time",
    tags: ["React", "TypeScript", "Tailwind"],
    description: "Build next-gen AI interfaces with cutting-edge technologies."
  },
  {
    id: "2",
    title: "Product Designer",
    company: "DesignScale",
    location: "San Francisco, CA",
    salary_range: "$130k - $160k",
    type: "Full-time",
    tags: ["Figma", "UI/UX", "Prototyping"],
    description: "Design seamless experiences for millions of users."
  },
  {
    id: "3",
    title: "Backend Developer",
    company: "DataSync",
    location: "Austin, TX",
    salary_range: "$120k - $150k",
    type: "Hybrid",
    tags: ["Node.js", "PostgreSQL", "AWS"],
    description: "Scaling high-performance APIs for data-intensive applications."
  },
  {
    id: "4",
    title: "Full Stack Engineer",
    company: "JobSphere",
    location: "Remote",
    salary_range: "$110k - $140k",
    type: "Contract",
    tags: ["Next.js", "Firebase", "Stripe"],
    description: "Full stack ownership of our job matching engine."
  },
  {
    id: "5",
    title: "AI Research Scientist",
    company: "NeuralNet",
    location: "Remote",
    salary_range: "$160k - $220k",
    type: "Full-time",
    tags: ["Python", "PyTorch", "ML"],
    description: "Shape the future of generative models and LLMs."
  }
];

export const calculateMatchScore = (userSkills: string[], jobTags: string[]) => {
  const matches = jobTags.filter(tag => userSkills.includes(tag)).length;
  return Math.round((matches / jobTags.length) * 100);
};
