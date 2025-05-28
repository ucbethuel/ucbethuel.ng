import { Link } from "react-router-dom";

const products = [
  {
    name: "UC Codes Dynamic Portfolio",
    image: "/src/assets/logo-1-trans.png",
    description:
      "Secure cloud storage platform with real-time sync and collaboration.",
    status: ["Production", "Owned"],
    url: "#",
  },
  {
    name: "Cloud Contact Saver",
    image: "/src/assets/logo-2-trans.png",
    description:
      "A web form which allows a prospective clinet to save his contact in your google contacts storage",
    status: ["Development", "Third Party"],
    url: "#",
  },
  {
    name: "LiveChat AI",
    image: "https://via.placeholder.com/300x200.png?text=LiveChat+AI",
    description:
      "Smart customer support chatbot powered by AI and machine learning.",
    status: ["Live", "Owned"],
    url: "https://livechatai.example.com",
  },
  {
    name: "InvoicePro",
    image: "https://via.placeholder.com/300x200.png?text=InvoicePro",
    description:
      "Automated invoicing and payment tracking for small businesses.",
    status: ["Live", "Third Party"],
    url: "https://invoicepro.example.com",
  },
];

const ProductShowcase = ({ preview = true }) => {
  //   const products = products;

  return (
    <section className="container py-5">
      <h2 className="text-center mb-4">Tech Products</h2>
      <div className="row justify-content-center">
        {products
          .slice(0, preview ? 2 : products.length)
          .map((product, index) => (
            <div className="col-md-6 col-lg-4 mb-4" key={index}>
              <div className="card h-100 shadow-sm">
                <img
                  src="/public/logo.svg"
                  className="card-img-top"
                  alt={product.name}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.description}</p>
                  <div className="ms-5 mb-3">
                    <span
                      className={
                        product.status[0].toLowerCase() == "production"
                          ? "text-danger"
                          : "text-secondary"
                      }
                    >
                      Status: {product.status[0]}
                    </span>{" "}
                    <br />{" "}
                    <span
                      className={
                        product.status[1].toLowerCase() == "Owned".toLowerCase()
                          ? "text-pri-color"
                          : "text-secondary"
                      }
                    >
                      Ownership: {product.status[1]}
                    </span>
                  </div>
                  <a
                    href={product.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn bg-pri-hover-color mt-auto"
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
          <Link to="/#" className="btn bg-pri-color px-4 py-2 fw-bold">
            View All Products
          </Link>
        </div>
      )}
    </section>
  );
};

export default ProductShowcase;
