import { projects } from "../data/projects";
import { ProjectCard } from "../components/ProjectCard";

export default function Home() {
  return (
    <main className="portfolio-container">
      <h1 className="title">👋 Hi, I'm Timoteo Cruz</h1>
      <p className="text-gray-400 mb-10">Here are some React projects I built:</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </main>
  );
}
