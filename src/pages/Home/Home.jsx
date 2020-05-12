import React from 'react';
import './Home.css';

function logout() {
  localStorage.clear();
  window.location.href = '/login';
}

const PagesHome = () => (
  <div className="pages-home">
    Parabéns, você conseguiu
    <br />
    <button type="button" onClick={logout}>Sair</button>
  </div>
);

export default PagesHome;
