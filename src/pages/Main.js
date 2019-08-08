import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import './Main.css';
import api from '../services/api';
import logo from '../assets/logo.svg';
import like from '../assets/like.svg';
import dislike from '../assets/dislike.svg';


export default function Main({ match }) {
  const [users, setUsers] = useState([]);

  const axiosRequestConfig = { headers: { user: match.params.id } };

  useEffect(() => {
    async function loadUsers() {
      const requestConfig = { headers: { user: match.params.id } };
      const response = await api.get('/devs', requestConfig);
      setUsers(response.data);
    }
    loadUsers();
  }, [match.params.id]);



  async function handleLike(id) {
    console.log('like', id);
    await api.post(`/devs/${id}/likes`, null, axiosRequestConfig);

    setUsers(users.filter(user => user._id !== id));
  }

  async function handleDislike(id) {
    console.log('dislike', id);
    await api.post(`/devs/${id}/dislikes`, null, axiosRequestConfig);
    setUsers(users.filter(user => user._id !== id));
  }

  return (
    <div className="main-container">
      <Link to="/">
        <img src={logo} alt="Tindev" />
      </Link>
      <ul>
        { !users.length
          ? <div className="empty">Acabou :(</div>
          : users.map((user) => (
        <li key={user._id}>
          <img src={user.avatar} alt="" />
          <footer>
            <strong>{user.name}</strong>
            <p>{user.bio}</p>
          </footer>

          <div className="buttons">
            <button
              type="button"
              onClick={() => handleDislike(user._id)}>
              <img src={dislike} alt="Dislike" />
            </button>
            <button
              type="button"
              onClick={() => handleLike(user._id)}>
              <img src={like} alt="Like" />
            </button>
          </div>
        </li>
        ))}
      </ul>
    </div>
  );
}
