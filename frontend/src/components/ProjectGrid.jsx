import { Link } from 'react-router-dom'; // Use this only if you use React Router

const projects = [
  {
    title: 'First portfolio project',
    description: 'My first attempt of a personal portfolio using just HTML - 2020',
    tags: ['HTML'],
    live: '#',
    repo: 'https://github.com/ucbethuel/portfolio_project_cct',
    image: "https://www.svgrepo.com/show/508699/landscape-placeholder.svg",
  },
  {
    title: 'Heart Model Ai - GIZ Python Q Solution',
    description: 'A Solution to Advanced GIZ Course undertaken at CCT - Benin on Advance AI using Scikit-learn and Pandas',
    tags: ['Jupyter notebook', 'AI', 'Python', "GIZ", "Pandas", "Numpy"],
    live: '#',
    repo: 'https://github.com/ucbethuel/GIZ_python_q_solution',
    image: 'https://www.svgrepo.com/show/508699/landscape-placeholder.svg',
  },
  // Add more projects here
];

const ProjectCard = ({ project }) => (
  <div className="card shadow-sm h-100">
    <img
      src={project.image}
      className="card-img-top"
      alt={project.title}
      style={{ height: '180px', objectFit: 'cover' }}
    />
    <div className="card-body d-flex flex-column">
      <h5 className="card-title">{project.title}</h5>
      <p className="card-text flex-grow-1">{project.description}</p>
      <div className="mb-3">
        {project.tags.map((tag, i) => (
          <span key={i} className="badge bg-ter-color text-dark me-1">
            #{tag}
          </span>
        ))}
      </div>
      <div>
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="btn bg-pri-color btn-sm me-2"
        >
          Live Demo
        </a>
        <a
          href={project.repo}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline-secondary btn-sm"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
);

const ProjectGrid = ({ preview = false }) => {
  // Show only 2 projects if preview mode is true
  const displayedProjects = preview ? projects.slice(0, 2) : projects;

  return (
    <section className="container py-5">
      <h2 className="text-center mb-4">Projects</h2>

      <div className="row g-4">
        {displayedProjects.map((project, index) => (
          <div key={index} className="col-12 col-sm-6 col-lg-4">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>

      {preview && (
        <div className="text-center mt-4">
          {/* Use Link if using React Router */}
          <Link to="/projects" className="btn bg-pri-color btn-lg">
            View All Projects
          </Link>

          {/* Or, for normal anchor link */}
          {/* <a href="/projects" className="btn btn-warning btn-lg">View All Projects</a> */}
        </div>
      )}
    </section>
  );
};

export default ProjectGrid;
