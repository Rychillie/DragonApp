import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import StoreContext from 'components/Store/Context'
import UIButton from 'components/UI/Button/Button';
import styled from "styled-components";
import Img from 'img/Dragon.jpg';

function initialState() {
  return { user:'', password:'' };
}

function login({ user, password }) {
  if (user === 'admin' & password === 'admin') {
    return { token: '1234'};
  }

  return { error: 'Usuário ou senha invalida'};
}

const Bground = styled.div`
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100vh;

  &:before {
    content: "";
    background-image: url(${Img});
    background-position: center top;
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    max-height: 100vh;
    z-index: -1;
    transition: all 300ms ease-in-out;
    opacity: .6;
    filter: blur(12px);

    @media only screen and (min-width: 920px) {
      opacity: 1;
      filter: unset;
      width: 50%;
    }
  }

  &:after {
    content: "";
    background: black;
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    max-height: 100vh;
    z-index: -5;
    transition: all 300ms ease-in-out;
    opacity: 1;

    @media only screen and (min-width: 920px) {
      width: 50%;
      opacity: .4;
    }
  }
`

const FormUser = styled.div`
  position: absolute;
  display: block;
  width: 100%;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  transition: all 300ms ease-in-out;

  @media only screen and (min-width: 920px) {
    width: 50%;
  }
`

const LoginUser = styled.div`
  width: 94%;
  max-width: 400px;
  margin: 0 auto;
`

const UserLoginTitle = styled.h1`
  font-size: 40px;
  color: #0ABDE3;
  margin-top: 0;
  margin-bottom: 50px;
  text-align: center;
  padding: 0;
`

const UserLoginFormControl = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`

const UserLogin = () => {
  const[values, setValues] = useState(initialState);
  const { setToken } = useContext(StoreContext);
  const history = useHistory();

  function onChange(event) {
    const { value, name } = event.target;

    setValues({
      ...values,
      [name]: value,
    });
  }

  function onSubmit(event) {
    event.preventDefault();

    const { token } = login(values);

    if (token) {
      setToken(token);
      return history.push('/');
    }

    setValues(initialState);
  }

  return (
    <Bground>
      <FormUser>
        <LoginUser>
          <UserLoginTitle>Acessar o Sistema</UserLoginTitle>
          <form onSubmit={onSubmit}>
            <UserLoginFormControl>
              <label className="login" htmlFor="email">Usuário:</label>
              <input
                id="user"
                type="text"
                name="user"
                onChange={onChange}
                value={values.user}
              />
            </UserLoginFormControl>
            <UserLoginFormControl>
              <label className="login" htmlFor="password">Senha:</label>
              <input
                id="password"
                type="password"
                name="password"
                onChange={onChange}
                value={values.password}
              />
            </UserLoginFormControl>
            <UIButton
              type="submit"
              theme="contained-green"
              className="user-login__submit-button"
              rounded
            >
              Entrar
            </UIButton>
          </form>
        </LoginUser>
      </FormUser>
    </Bground>
  );
};

export default UserLogin;
