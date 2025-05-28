import { FaUserCircle } from "react-icons/fa";

const Headers = () => {
  return (
    <header>
      <nav className="navbar bg-pri-color">
        <div className="container-fluid d-flex justify-content-between align-items-center py-2">
          <a
            className="navbar-brand d-flex align-items-center text-dark text-decoration-none"
            href="#"
          >
            <img
              src="../src/assets/logo-2-trans.png"
              alt="UC Codes Logo"
              width="48"
              height="38"
              className="d-inline-block align-text-center pe-2"
            />
            <span className="fw-bold fs-5 text-quent-color">UC Codes</span>
          </a>

          <div className="d-flex align-items-center gap-3">
            <button
              className="btn fw-semibold bg-sec-color text-quent-color"
              style={{
                fontWeight: "bolder",
              }}
              type="button"
            >
              Newsletter
            </button>

            <FaUserCircle
              size={30}
              color="#333"
              style={{ cursor: "pointer" }}
              className="text-quent-color"
              title="Profile"
            />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Headers;
