// components/RecentProjects.js

export default function RecentProjects({ data, getTranslation, language, history }) {
  return (
    <section>
      <h2>{getTranslation('recentProjectsTitle', language)}</h2>
      <a href={data.agencyLink} target="_blank" rel="noopener noreferrer">
        {getTranslation('visitWicomm', language)}
      </a>
      <ul>
        {data.projects.map((project, index) => (
          <li key={index}>
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              {project.name}
            </a>
          </li>
        ))}
      </ul>

      <h3>{getTranslation('previousProjectsTitle', language)}</h3>
      <ul>
        {data.previousProjects.map((project, index) => (
          <li key={index}>
            <strong>{project.name}</strong>: {project.description}
          </li>
        ))}
      </ul>

      {history && (
        <>
          <h3>{getTranslation('managementHistoryTitle', language)}</h3>
          <ul>
            {history.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </>
      )}
    </section>
  );
};
