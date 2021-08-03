import { useParams } from "react-router";
import { useState } from "react";
import { useHistory } from "react-router";
import "./Form.css";

const Create = ({ status, addNewUser }) => {
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
    console.log(user);
    addNewUser(user);
    history.push("/userlist");
  };

  return (
    <>
      <br />
      <h3>
        {status === "add" ? "Add" : "Edit"} User {eid}
      </h3>
      <form onSubmit={onsubmit}>
        Name:{" "}
        <input type="text" name="name" value={user.name} onChange={change} />{" "}
        <br />
        ID: <input type="text" name="id" value={user.id} onChange={change} />
        <br />
        Username:{" "}
        <input
          type="text"
          name="username"
          value={user.username}
          onChange={change}
        />
        <br></br>
        Email:{" "}
        <input type="email" name="email" value={user.email} onChange={change} />
        <br />
        <input type="submit" value={status === "add" ? "Create" : "Update"} />
      </form>
    </>
  );
};

export default Create;
