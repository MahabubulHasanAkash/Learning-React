import "./Form.css";
import { useParams } from "react-router";
import { useState } from "react";
import { useHistory } from "react-router";

const Login = ({ status, addNewUser }) => {
  const { id: eid } = useParams();
  const [user, setUser] = useState({ name: "", id: "", dept: "" });
  const history = useHistory();

  const change = (e) => {
    const attr = e.target.name;
    const val = e.target.value;
    setUser({ ...user, [attr]: val });
  };

  const onsubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form onSubmit={onsubmit}>
        Email:{" "}
        <input
          type="email"
          name="email"
          value={user.email}
          o
          nChange={change}
        />
        <br />
        Password:{" "}
        <input
          type="password"
          name="password"
          value={user.email}
          onChange={change}
        />
        <br />
        <input type="submit" value="Login" />
      </form>
    </>
  );
};

export default Login;
