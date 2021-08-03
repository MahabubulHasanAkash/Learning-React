import Nav_bar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState } from "react";
import { useFetch } from "./hooks/useFetch";
import UserList from "./components/UserList";
import CreateUser from "./components/CreateUser";
import Login from "./components/Login";

function App() {
  const [list, setUserList] = useState([]);
  useFetch("https://jsonplaceholder.typicode.com/users", setUserList);

  const _delete = (id) => {
    const _list = list.filter((user) => user.id !== id);
    setUserList(_list);
  };

  const addUser = (user) => {
    setUserList([...list, user]);
  };

  const [productList, setProductList] = useState([]);
  useFetch("https://jsonplaceholder.typicode.com/todos", setProductList);

  console.log(productList);
  console.log(list);

  const deleteProduct = (id) => {
    const _productList = list.filter((product) => product.id !== id);
    setProductList(_productList);
  };

  const addProduct = (product) => {
    setProductList([...list, product]);
  };

  const login = () => {};

  return (
    <Router>
      <Nav_bar />
      <Switch>
        <Route exact path="/home">
          <h1 className="text-center mt-4 mb-4">Welcome Home </h1>
        </Route>

        <Route path="/list">
          <UserList list={list} callback_delete={_delete} />
        </Route>

        <Route path="/create">
          <CreateUser status="add" addNewUser={addUser} />
        </Route>

        <Route path="/edit/:id" children={<CreateUser status="edit" />}></Route>

        <Route path="/products">
          <UserList list={productList} callback_delete={deleteProduct} />
        </Route>

        <Route path="/products/add">
          <CreateUser status="add" addNewUser={addProduct} />
        </Route>

        <Route
          path="/products/edit/:id"
          children={<CreateUser status="edit" />}
        ></Route>

        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
