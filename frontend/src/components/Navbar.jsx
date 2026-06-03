import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { logout } from "../store/slices/userSlice";

const Navbar = () => {
  const dispatch = useDispatch();

  const { userInfo } = useSelector(
    (state) => state.user
  );

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <nav>
      <Link to="/">
        Home
      </Link>

      {userInfo ? (
        <>
          <Link to="/dashboard">
            Dashboard
          </Link>

          <Link to="/transactions">
            Transactions
          </Link>

          <button onClick={logoutHandler}>
            Logout
          </button>
        </>
      ) : (
        <>
          <Link to="/login">
            Login
          </Link>

          <Link to="/register">
            Register
          </Link>
        </>
      )}
    </nav>
  );
};

export default Navbar;