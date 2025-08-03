import "./../styles/ProjectCard.css";

interface Props {
  title: string;
  description: string;
  learned?: string[];
  liveUrl: string;
  githubUrl: string;
  image?: string;
}

export function ProjectCard({ title, description, learned, liveUrl, githubUrl }: Props) 
{
  return (
    <div className="card">
      <h2 className="card-title">{title}</h2>
      <p className="card-desc">{description}</p>
       <div className="learned-section">
        <h3>What I learned:</h3>
        <ul style={{
  listStyleType: "disc",
  paddingLeft: "1.5rem",
  margin: 0
}}>
  {learned?.map((item, idx) => {
    const splitIndex = item.indexOf(":");
    const hasPrefix = splitIndex !== -1;
    const prefix = hasPrefix ? item.slice(0, splitIndex + 1) : "";
    const rest = hasPrefix ? item.slice(splitIndex + 1) : item;

    return (
      <li key={idx} style={{
        fontSize: "0.75rem",
        marginBottom: "0.2rem",
        lineHeight: "1.2"
      }}>
        {hasPrefix ? (
          <>
            <strong>{prefix}</strong>{rest}
          </>
        ) : (
          item
        )}
      </li>
    );
  })}
</ul>
      </div>
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
