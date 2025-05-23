import { Link } from 'react-router-dom';

const products = [
  {
    name: 'CloudBox',
    image: 'https://via.placeholder.com/300x200.png?text=CloudBox',
    description: 'Secure cloud storage platform with real-time sync and collaboration.',
    url: 'https://cloudbox.example.com',
  },
  {
    name: 'TaskPilot',
    image: 'https://via.placeholder.com/300x200.png?text=TaskPilot',
    description: 'Project and task management app for agile teams and individuals.',
    url: 'https://taskpilot.example.com',
  },
  {
    name: 'LiveChat AI',
    image: 'https://via.placeholder.com/300x200.png?text=LiveChat+AI',
    description: 'Smart customer support chatbot powered by AI and machine learning.',
    url: 'https://livechatai.example.com',
  },
  {
    name: 'InvoicePro',
    image: 'https://via.placeholder.com/300x200.png?text=InvoicePro',
    description: 'Automated invoicing and payment tracking for small businesses.',
    url: 'https://invoicepro.example.com',
  },
];

const ProductShowcase = ({ preview = true }) => {
//   const products = products;

  return (
    <section className="container py-5">
      <h2 className="text-center mb-4">Tech Products</h2>
      <div className="row justify-content-center">
        {products.slice(0, preview ? 2 : products.length).map((product, index) => (
          <div className="col-md-6 col-lg-4 mb-4" key={index}>
            <div className="card h-100 shadow-sm">
              <img
                src={product.image}
                className="card-img-top"
                alt={product.name}
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <a
                  href={product.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-primary mt-auto"
                >
                  Visit Website
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {preview && (
        <div className="text-center mt-3">
          <Link to="/products" className="btn btn-warning px-4 py-2 fw-bold">
            View All Products
          </Link>
        </div>
      )}
    </section>
  );
};

export default ProductShowcase;
