
import reactLogo from '../assets/react.svg'; // Replace with your actual icon paths
import jsLogo from '../assets/react.svg';
import htmlLogo from '../assets/react.svg';
import cssLogo from '../assets/react.svg';
import viteLogo from '../assets/react.svg';
import bootstrapLogo from '../assets/react.svg';

const tools = [
  { name: 'React', icon: reactLogo },
  { name: 'Vite', icon: viteLogo },
  { name: 'JavaScript', icon: jsLogo },
  { name: 'HTML5', icon: htmlLogo },
  { name: 'CSS3', icon: cssLogo },
  { name: 'Bootstrap', icon: bootstrapLogo },
];

const ToolsStack = () => {
  return (
    <section className="bg-light py-4 overflow-hidden">
      <div className="container">
        <h2 className="fw-bold text-center mb-4">Tools Stack</h2>
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
