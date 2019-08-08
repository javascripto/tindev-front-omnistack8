import React from 'react';

import './Main.css';
import logo from '../assets/logo.svg';
import like from '../assets/like.svg';
import dislike from '../assets/dislike.svg';


export default function Main({ match: { params: { id }} }) {
  console.log(id);
  return (
    <div className="main-container">
      <img src={logo} alt="Tindev" />
      <ul>
        { [1, 2, 3, 4].map(_ => 
        <li>
          <img src="https://avatars0.githubusercontent.com/u/28929274?v=4" alt="" />
          <footer>
            <strong>Nome</strong>
            <p>Descrição</p>
          </footer>

          <div className="buttons">
            <button type="button">
              <img src={dislike} alt="Dislike" />
            </button>
            <button type="button">
              <img src={like} alt="Like" />
            </button>
          </div>
        </li>
        )}
      </ul>
    </div>
  );
}
