import { Link, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import MainLayout from "../layouts/MainLayout";
import heroImage from "../assets/hero-finance.jpg";
import dashboardPreview from "../assets/dashboard-preview.png";

const Home = () => {
  const { userInfo } = useSelector(
    (state) => state.user
  );

  if (userInfo) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <MainLayout>

      {/* HERO SECTION */}

      <section
        className="rounded-4 overflow-hidden mb-5"
        style={{
          minHeight: "75vh",
          backgroundImage: `
            linear-gradient(
              rgba(0,0,0,0.55),
              rgba(0,0,0,0.55)
            ),
            url(${heroImage})
          `,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="d-flex align-items-center justify-content-center text-center text-white"
          style={{
            minHeight: "75vh",
          }}
        >
          <div>

            <p
              className="text-uppercase mb-3"
              style={{
                letterSpacing: "3px",
              }}
            >
              Personal Finance Tracker
            </p>

            <h1
              className="fw-bold mb-4"
              style={{
                fontSize: "4rem",
              }}
            >
              Track Your Finances
              <br />
              With Confidence
            </h1>

            <p
              className="lead mx-auto mb-4"
              style={{
                maxWidth: "700px",
              }}
            >
              Monitor income, expenses and
              financial performance in one place.
              Gain better control over your money
              through a simple and intuitive dashboard.
            </p>

            <Link
              to="/register"
              className="btn btn-primary btn-lg me-3"
            >
              Get Started
            </Link>

            <Link
              to="/login"
              className="btn btn-outline-light btn-lg"
            >
              Login
            </Link>

          </div>
        </div>
      </section>

      {/* FEATURES */}

      <section className="mb-5">

        <div className="text-center mb-5">
          <h2 className="fw-bold">
            Why Choose Finance Tracker
          </h2>

          <p className="text-muted">
            Everything you need to manage
            your finances efficiently.
          </p>
        </div>

        <div className="row g-4">

          <div className="col-md-4">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body text-center p-4">

                <i
                  className="bi bi-shield-lock"
                  style={{
                    fontSize: "2.5rem",
                  }}
                ></i>

                <h4 className="mt-3">
                  Secure Authentication
                </h4>

                <p className="text-muted">
                  JWT authentication and encrypted
                  passwords ensure secure access.
                </p>

              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body text-center p-4">

                <i
                  className="bi bi-wallet2"
                  style={{
                    fontSize: "2.5rem",
                  }}
                ></i>

                <h4 className="mt-3">
                  Expense Tracking
                </h4>

                <p className="text-muted">
                  Record income and expenses
                  quickly and efficiently.
                </p>

              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body text-center p-4">

                <i
                  className="bi bi-graph-up"
                  style={{
                    fontSize: "2.5rem",
                  }}
                ></i>

                <h4 className="mt-3">
                  Financial Analytics
                </h4>

                <p className="text-muted">
                  Analyze spending habits
                  through statistics and charts.
                </p>

              </div>
            </div>
          </div>

        </div>

      </section>

      {/* DASHBOARD PREVIEW */}

      <section className="my-5">

        <div className="row align-items-center">

          <div className="col-lg-5">

            <h2 className="fw-bold mb-4">
              See Your Financial Data
              At A Glance
            </h2>

            <p className="lead text-muted">
              Monitor your current balance,
              income, expenses and transaction
              history through a clean and modern
              dashboard experience.
            </p>

          </div>

          <div className="col-lg-7">

            <div className="card shadow border-0">

              <div className="card-body">

                <div className="row text-center">

                  <div className="col-4">
                    <h6>Balance</h6>
                    <h4 className="text-success">
                      800 €
                    </h4>
                  </div>

                  <div className="col-4">
                    <h6>Income</h6>
                    <h4 className="text-primary">
                      1200 €
                    </h4>
                  </div>

                  <div className="col-4">
                    <h6>Expenses</h6>
                    <h4 className="text-danger">
                      400 €
                    </h4>
                  </div>

                </div>

                <hr />

                <img
                  src={dashboardPreview}
                  alt="Dashboard Preview"
                  className="img-fluid rounded"
                />

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section
        className="text-center py-5 my-5 rounded-4"
        style={{
          background: "#f8f9fa",
        }}
      >
        <h2 className="fw-bold">
          Ready To Start?
        </h2>

        <p className="lead text-muted">
          Create your account and take control
          of your finances today.
        </p>

        <Link
          to="/register"
          className="btn btn-primary btn-lg"
        >
          Create Free Account
        </Link>

      </section>

    </MainLayout>
  );
};

export default Home;