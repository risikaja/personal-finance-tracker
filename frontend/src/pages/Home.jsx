import { Link } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const Home = () => {
  const { userInfo } = useSelector(
  (state) => state.user
);

if (userInfo) {
  return <Navigate to="/dashboard" />;
}
  return (
    <MainLayout>
      {/* Hero Section */}

      <section className="py-5">
        <div className="row align-items-center">

          <div className="col-lg-6">
            <h1 className="display-4 fw-bold">
              Manage Your Personal Finances
            </h1>

            <p className="lead mt-3">
              Track your income, monitor your expenses,
              and gain valuable insights into your
              financial habits.
            </p>

            <div className="mt-4">
              <Link
                to="/register"
                className="btn btn-primary btn-lg me-3"
              >
                Get Started
              </Link>

              <Link
                to="/login"
                className="btn btn-outline-dark btn-lg"
              >
                Login
              </Link>
            </div>
          </div>

          <div className="col-lg-6 text-center mt-4 mt-lg-0">
            <img
              src="https://images.unsplash.com/photo-1554224155-6726b3ff858f"
              alt="Finance"
              className="img-fluid rounded shadow"
            />
          </div>

        </div>
      </section>

      {/* Features */}

      <section className="py-5">
        <div className="text-center mb-5">
          <h2>Key Features</h2>
          <p className="text-muted">
            Everything you need to manage your finances.
          </p>
        </div>

        <div className="row">

          <div className="col-md-4 mb-4">
            <div className="card shadow-sm h-100">
              <div className="card-body text-center">
                <h4>💰 Track Income</h4>

                <p>
                  Record all your income sources and
                  keep track of your earnings.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card shadow-sm h-100">
              <div className="card-body text-center">
                <h4>📉 Monitor Expenses</h4>

                <p>
                  Understand where your money goes and
                  manage spending effectively.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card shadow-sm h-100">
              <div className="card-body text-center">
                <h4>📊 Financial Insights</h4>

                <p>
                  Visualize financial data and make
                  smarter decisions.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* How It Works */}

      <section className="py-5 bg-light rounded">
        <div className="container">

          <div className="text-center mb-5">
            <h2>How It Works</h2>
          </div>

          <div className="row text-center">

            <div className="col-md-4">
              <h1 className="fw-bold">1</h1>

              <h5>Create Account</h5>

              <p>
                Register and create your personal
                finance account.
              </p>
            </div>

            <div className="col-md-4">
              <h1 className="fw-bold">2</h1>

              <h5>Add Transactions</h5>

              <p>
                Record your income and expenses.
              </p>
            </div>

            <div className="col-md-4">
              <h1 className="fw-bold">3</h1>

              <h5>Analyze Finances</h5>

              <p>
                Monitor your balance and financial
                performance.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}

      <section className="py-5 text-center">
        <h2>
          Ready to Take Control of Your Finances?
        </h2>

        <p className="lead">
          Start tracking your finances today.
        </p>

        <Link
          to="/register"
          className="btn btn-success btn-lg"
        >
          Create Free Account
        </Link>
      </section>

    </MainLayout>
  );
};

export default Home;