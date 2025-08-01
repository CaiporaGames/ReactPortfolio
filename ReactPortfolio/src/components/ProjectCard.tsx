import "./../styles/ProjectCard.css";

interface Props {
  title: string;
  description: string;
  liveUrl: string;
  githubUrl: string;
  image?: string;
}

export function ProjectCard({ title, description, liveUrl, githubUrl }: Props) 
{
  return (
    <div className="card">
      <h2 className="card-title">{title}</h2>
      <p className="card-desc">{description}</p>
      <div>
        <a href={liveUrl} target="_blank" className="btn btn-live">
          Live
        </a>
        <a href={githubUrl} target="_blank" className="btn btn-code">
          GitHub
        </a>
      </div>
    </div>
  );
}
