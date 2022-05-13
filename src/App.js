import React, { useState } from "react";
import FormLogin from "./components/FormLogin";
import "./App.css"
import TodoList from "./components/TodoList";
function App() {
  const adminUser = {
    email: "admin",
    password: "admin1234"
  }
  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const Login = details => {
    console.log(details);

    if (details.email === adminUser.email && details.password === adminUser.password) {
      console.log("Logged in");
      setUser({
        name: details.name,
        email: details.email
      });
    } else {
      setError("Details does not match.");
    }
  }
  const Logout = () => {
    console.log("logged out.");
    setUser({ name: "", email: "" });
  }
  return (
    <div className='App'>
      {(user.email !== "") ? (
        <div className="welcome">
          <TodoList />
          <h2>Welcome, <span>{user.name}</span></h2>
          <button onClick={Logout}>Logout</button>
        </div>
      ) : (
        <FormLogin Login={Login} error={error} />
      )}
    </div>
  );
}

export default App;
