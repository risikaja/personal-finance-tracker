import { useState } from "react";
import { useLoginMutation } from "../store/apis/authApi";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";

import MainLayout from "../layouts/MainLayout";
import { setUser } from "../store/slices/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [login, { isLoading }] =
    useLoginMutation();

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const res = await login({
        email,
        password,
      }).unwrap();

      dispatch(setUser(res));

      toast.success("Login successful");

      navigate("/dashboard");
    } catch (error) {
      toast.error(
        error?.data?.message ||
          "Invalid credentials"
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
                Login
              </h2>

              <form onSubmit={submitHandler}>

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
                  className="btn btn-primary w-100"
                >
                  {isLoading
                    ? "Loading..."
                    : "Login"}
                </button>

              </form>

              <div className="text-center mt-3">
                Don't have an account?

                <Link
                  to="/register"
                  className="ms-2"
                >
                  Register
                </Link>
              </div>

            </div>

          </div>

        </div>

      </div>
    </MainLayout>
  );
};

export default Login;