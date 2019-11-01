import React from "react";
import { connect } from "react-redux";
import { Login } from "../../components/login";
import './main-menu.scss';

const MainMenu = (props: any) => {
  const { dispatch, user } = props;
  const [view, setView] = React.useState();

  const handleClickQuit = () => {
    window.close();
  }
  
  const renderPlay = () => (
    <ul className="main-menu__options">
      <li onClick={(e) => console.log(e)}>Character One</li>
      <li onClick={(e) => console.log(e)}>New Character</li>
      <li onClick={(e) => console.log(e)}>New Character</li>
      <li onClick={(e) => console.log(e)}>New Character</li>
      <li onClick={() => renderMenu(renderMain())}>Back</li>
    </ul>
  )

  const renderSettings = () => (
    <ul className="main-menu__options">
      <li onClick={(e) => console.log(e)}>Setting</li>
      <li onClick={(e) => console.log(e)}>Setting</li>
      <li onClick={(e) => console.log(e)}>Setting</li>
      <li onClick={() => renderMenu(renderMain())}>Back</li>
    </ul>
  )

  const renderMain = () => (
    <ul className="main-menu__options">
      <li onClick={() => renderMenu(renderPlay)}>Play</li>
      <li onClick={() => renderMenu(renderSettings)}>Settings</li>
      <li onClick={handleClickQuit}>Quit</li>
    </ul>
  )

  const renderMenu = (newView?: any) => {
    if (!view) setView(renderMain());
    if (!!newView) setView(newView());
    return view;
  }

  return (
    <div className="main-menu">
      <Login />
      { !!user.username && renderMenu() }
    </div>
  )

}

const mapStateToProps = (state: any) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(MainMenu);