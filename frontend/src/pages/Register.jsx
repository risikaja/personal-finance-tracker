import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";

import MainLayout from "../layouts/MainLayout";
import { useRegisterMutation } from "../store/apis/authApi";

const Register = () => {
  const navigate = useNavigate();

  const [register, { isLoading }] =
    useRegisterMutation();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] =
    useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      await register({
        name,
        email,
        password,
      }).unwrap();

      toast.success(
        "Account created successfully"
      );

      navigate("/login");
    } catch (error) {
      toast.error(
        error?.data?.message ||
          "Registration failed"
      );
    }
  };

  return (
    <MainLayout>
      <div className="row justify-content-center">

        <div className="col-md-6">

          <div className="card shadow">

            <div className="card-body p-4">

              <h2 className="text-center mb-4">
                Register
              </h2>

              <form onSubmit={submitHandler}>

                <div className="mb-3">
                  <label className="form-label">
                    Name
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    value={name}
                    onChange={(e) =>
                      setName(e.target.value)
                    }
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">
                    Email
                  </label>

                  <input
                    type="email"
                    className="form-control"
                    value={email}
                    onChange={(e) =>
                      setEmail(e.target.value)
                    }
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">
                    Password
                  </label>

                  <input
                    type="password"
                    className="form-control"
                    value={password}
                    onChange={(e) =>
                      setPassword(e.target.value)
                    }
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-success w-100"
                >
                  {isLoading
                    ? "Loading..."
                    : "Register"}
                </button>

              </form>

              <div className="text-center mt-3">
                Already have an account?

                <Link
                  to="/login"
                  className="ms-2"
                >
                  Login
                </Link>
              </div>

            </div>

          </div>

        </div>

      </div>
    </MainLayout>
  );
};

export default Register;