import React from "react";
import { connect } from "react-redux";
import { login } from "../../store/actions";


const Login = (props: any) => {
  const { dispatch, user } = props;
  const [inputs, setInputs] = React.useState({username: "", password: ""});

  const handleClickSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(login(inputs.username, inputs.password));
  };

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.persist();
    setInputs(inputs => ({...inputs, [e.target.name]: e.target.value}));
  };

  const renderLoginForm = () => (
    <form onSubmit={handleClickSubmit}>
      <input type="text" name="username" onChange={handleChangeInput} value={inputs.username}></input>
      <input type="password" name="password" onChange={handleChangeInput} value={inputs.password}></input>
      <button type="submit" name="submit">Login</button>
    </form>
  );

  const renderActiveUser = () => (
    <p>{ user.username }</p>
  )

  return (
    <div className="login">
      { !!user.username
        ? renderActiveUser()
        : renderLoginForm() }
    </div>
  );
}

const mapStateToProps = (state: any) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Login);