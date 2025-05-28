

const tools =[
  {
    "name": "React",
    "icon": "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/react.svg"
  },
  {
    "name": "JavaScript",
    "icon": "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/javascript.svg"
  },
  {
    "name": "FastAPI",
    "icon": "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/fastapi.svg"
  },
  {
    "name": "Flask",
    "icon": "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/flask.svg"
  },
  {
    "name": "Pandas",
    "icon": "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/pandas.svg"
  },
  {
    "name": "NumPy",
    "icon": "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/numpy.svg"
  },
  {
    "name": "CSS3",
    "icon": "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/css3.svg"
  },
  {
    "name": "Bootstrap",
    "icon": "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/bootstrap.svg"
  },
  {
    "name": "HTML5",
    "icon": "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/html5.svg"
  },
  {
    "name": "Vite",
    "icon": "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/vite.svg"
  },
  {
    "name": "Scikit-learn",
    "icon": "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/scikitlearn.svg"
  },
  {
    "name": "Python",
    "icon": "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/python.svg"
  },
  {
    "name": "Docker",
    "icon": "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/docker.svg"
  },
  {
    "name": "OpenAI - ChatGPT",
    "icon": "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/openai.svg"
  },
  {
    "name": "Git",
    "icon": "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/git.svg"
  },
  {
    "name": "GitHub",
    "icon": "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/github.svg"
  },
  {
    "name": "Linux - Ubuntu",
    "icon": "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/ubuntu.svg"
  },
  {
    "name": "PostgreSQL",
    "icon": "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/postgresql.svg"
  },
  {
    "name": "SQLite",
    "icon": "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/sqlite.svg"
  },
  {
    "name": "Jupyter Notebook",
    "icon": "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/jupyter.svg"
  },
  {
    "name": "VS Code",
    "icon": "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/visualstudiocode.svg"
  },
  {
    "name": "Tailwind CSS",
    "icon": "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/tailwindcss.svg"
  },
  {
    "name": "Vercel",
    "icon": "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/vercel.svg"
  },
]
;

const ToolsStack = () => {
  return (
    <section className="bg-light py-4 overflow-hidden">
      <div className="container">
        <h2 className="fw-bold text-center mb-4">Tools Already Used</h2>
        <div className="marquee">
          <div className="marquee-content">
            {tools.map((tool, index) => (
              <div className="tool-item d-flex align-items-center me-5" key={index}>
                <img src={tool.icon} alt={tool.name} width="32" className="me-2" />
                <span className="fw-semibold">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolsStack;
