import axios from 'axios';
import './index.scss';
import { getUser } from '../helpers/getUser';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';

import { userSlice } from '../../store/reducers/UserSlice';
import { getReposFromUser } from '../helpers/getReposFromUser';

export const Search = () => {
  const [login, setLogin] = useState<string>('');

  const dispatch = useAppDispatch();

  const { setUser } = userSlice.actions;

  const handleClick = async () => {
    if (login === '') {
      console.log('the login is required');
      return;
    }

    let x = await getUser(login);
    let countOfRepos = await getReposFromUser(x.repos_url);

    const newUser = {
      login: x.login,
      avatar_url: x.avatar_url,
      url: x.url,
      repos_url: x.repos_url,
      repos_count: countOfRepos,
    };

    dispatch(setUser(newUser));
    setLogin('');
  };

  return (
    <div className="search-container">
      <input
        value={login}
        onChange={(e) => setLogin(e.target.value)}
        type="text"
      />
      <div className="search-user" onClick={handleClick}>
        search
      </div>
    </div>
  );
};
