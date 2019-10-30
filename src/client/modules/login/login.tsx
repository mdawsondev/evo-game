import React from "react";
import { connect } from "react-redux";
import { login } from "../../store/actions";

const Login = ({ dispatch }: any) => {
  const [inputs, setInputs] = React.useState({username: "", password: ""});

  const handleClickSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(login(inputs.username, inputs.password));
  }

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.persist();
    setInputs(inputs => ({...inputs, [e.target.name]: e.target.value}));
  }

  return (
    <div>
      <form onSubmit={handleClickSubmit}>
        <input type="text" name="username" onChange={handleChangeInput} value={inputs.username}></input>
        <input type="password" name="password" onChange={handleChangeInput} value={inputs.password}></input>
        <button type="submit" name="submit">Login</button>
      </form>
    </div>
  )
}

export default connect()(Login);