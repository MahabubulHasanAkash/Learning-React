import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";
const User = ({ id, name, username, email, callback }) => {
  return (
    <Table striped bordered hover size="sm" responsive>
      <tbody>
        <tr>
          <td>{id}</td>
          <td>{name}</td>
          <td>{username}</td>
          <td>{email}</td>
          <td>
            <button onClick={() => callback(id)}>Delete</button>
            <Link to={`/edit/${id}`}> EDIT</Link>
          </td>
        </tr>
      </tbody>
    </Table>
  );
};
export default User;
