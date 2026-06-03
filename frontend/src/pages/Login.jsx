import { useState } from "react";
import { useLoginMutation } from "../store/apis/authApi";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [login] = useLoginMutation();

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const res = await login({
        email,
        password,
      }).unwrap();

      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) =>
          setEmail(e.target.value)
        }
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) =>
          setPassword(e.target.value)
        }
      />

      <button type="submit">
        Login
      </button>
    </form>
  );
};

export default Login;