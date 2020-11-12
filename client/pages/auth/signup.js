import { useState } from "react";
import axios from "axios";

import useRequest from "../../hooks/use-request";

export default () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { doRequest, errors } = useRequest({
    url: "/api/users/signup",
    method: "post",
    body: {
      email,
      password,
    },
  });

  const onSubmit = async (event) => {
    event.preventDefault();

    doRequest();
  };
  return (
    <form onSubmit={onSubmit}>
      <h1>Sign Up</h1>
      <div classname="form-group">
        <label>Email Address</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-control"
        />
      </div>
      <div classname="form-group">
        <label className="mt-3">Password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          className="form-control mb-3"
        />
      </div>
      {errors}
      <button className="btn btn-primary">Sign Up</button>
    </form>
  );
};
